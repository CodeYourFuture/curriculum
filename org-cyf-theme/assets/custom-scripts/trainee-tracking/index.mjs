const state = {
    trainees: null,
    modules: null,
    prs: null,
    attendance: null,
};

class Trainee {
    constructor(name, email, github) {
        this.name = name;
        this.email = email;
        this.github = github;
    }
}

class Module {
    constructor(name, sprints) {
        this.name = name;
        this.sprints = sprints;
    }

    assignmentCount() {
        let count = 0;
        for (const sprint of this.sprints) {
            count += sprint.assignmentCount();
        }
        return count;
    }
}

class Sprint {
    constructor(name, attendance, prs) {
        this.name = name;
        this.attendance = attendance;
        this.prs = prs;
    }

    assignmentCount() {
        return this.prs.length + 1;
    }

    matchPrs(prs) {
        const orderedPrs = [];
        for (const pr of this.prs) {
            orderedPrs.push(null);
        }
        for (const pr of prs) {
            let bestMatchIndex = null;
            let bestMatchCount = 0;
            const words = wordsFromPrTitle(pr);
            for (let i = 0; i < this.prs.length; i++) {
                const issueWords = wordsFromPrTitle(this.prs[i]);
                const matchCount = words.intersection(issueWords).size;
                if (matchCount >= bestMatchCount) {
                    bestMatchCount = matchCount;
                    bestMatchIndex = i;
                }
            }
            if (bestMatchCount > 0) {
                orderedPrs[bestMatchIndex] = pr;
            }
        }
        return orderedPrs;
    }
}

const wordsFromPrTitle = (pr) => new Set(pr.title.toLowerCase().split(" ").flatMap((word) => word.split("-")));

async function onLoad() {
    const googleAuthClient = google.accounts.oauth2.initTokenClient({
        client_id: "403459539948-i1qnqlig3skql2r10ci1i9h4gntt44g5.apps.googleusercontent.com",
        scope: "https://www.googleapis.com/auth/spreadsheets.readonly",
        callback: async (tokenResponse) => {
          const accessToken = tokenResponse.access_token;
    
          const promises = [];
          const modulePrefix = "Module-";
          for (const module of modules) {
            if (!module.startsWith(modulePrefix)) {
                console.error(`Expected module ${module} to start with ${modulePrefix} - ignoring`);
                continue;
            }
            const moduleSheetName = module.slice(modulePrefix.length).replace("-", " ");
            const promise = fetch(`https://sheets.googleapis.com/v4/spreadsheets/1dPY9Troijh3ZZkXbYkMMS3F5TkG4TKdRzd0Z3d45_gI/values/${moduleSheetName}`, {
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                },
              }).then(resp => resp.json()).then(resp => {
                const sprintToEmailToTime = {};
                // Skip header row
                for (const row of resp.values.slice(1)) {
                    const [_name, email, timestamp, _course, _module, sprint] = row;
                    if (!(sprint in sprintToEmailToTime)) {
                        sprintToEmailToTime[sprint] = {};
                    }
                    sprintToEmailToTime[sprint][email.toLowerCase()] = timestamp;
                }
                return {
                    "module": module,
                    "attendanceData": sprintToEmailToTime,
                };
              });
            promises.push(promise);
          }
          const resolvedValues = await Promise.all(promises);
          const values = {};
          for (const resolvedValue of resolvedValues) {
            values[resolvedValue.module] = resolvedValue.attendanceData;
          }
          state.attendance = values;
          render();
        },
      });

    document.getElementById("auth-button").addEventListener("click", (event) => {
        googleAuthClient.requestAccessToken();
        event.target.style.display = "none";
    });

    state.modules = await fetchModules();
    state.trainees = await getTrainees();
    state.prs = await fetchPrsWithoutLoadingReviews();

    render();
}

const render = () => {
    const container = document.querySelector("#tracker-content");
    const table = document.createElement("table");
    const moduleHeaderRow = document.createElement("tr");
    const sprintHeaderRow = document.createElement("tr");
    const assignmentHeaderRow = document.createElement("tr");

    const nameHeader = createTh("Name");
    nameHeader.rowSpan = 3;
    moduleHeaderRow.appendChild(nameHeader);

    for (const module of state.modules) {
        const moduleHeader = createTh(module.name);
        moduleHeader.colSpan = module.assignmentCount();
        moduleHeaderRow.appendChild(moduleHeader);

        for (const sprint of module.sprints) {
            const sprintHeader = createTh(sprint.name);
            sprintHeader.colSpan = sprint.assignmentCount();
            sprintHeaderRow.appendChild(sprintHeader);

            assignmentHeaderRow.appendChild(createTh("Attendance"));
            for (const pr of sprint.prs) {
                assignmentHeaderRow.appendChild(createIssueTh(pr));
            }
        }
    }

    table.appendChild(moduleHeaderRow);
    table.appendChild(sprintHeaderRow);
    table.appendChild(assignmentHeaderRow);

    const prIndex = {};
    for (const module of state.modules) {
        prIndex[module.name] = {};
        for (const trainee of state.trainees) {
            prIndex[module.name][trainee.github] = [];
        }
    }

    for (const pr of state.prs) {
        if (!(pr.userName in prIndex[pr.module])) {
            continue;
        }
        prIndex[pr.module][pr.userName].push(pr);
    }

    for (const trainee of state.trainees) {
        table.appendChild(createRow(trainee, state.modules, prIndex));
    }

    container.innerText = "";
    container.appendChild(table);
};

const createRow = (trainee, modules, prsByModuleAndUserName) => {
    const row = document.createElement("tr");
    row.appendChild(createTd(trainee.name));
    for (const module of modules) {
        const traineePrs = prsByModuleAndUserName[module.name][trainee.github];
        const traineePrsBySprint = groupPrsBySprint(traineePrs);

        for (let i = 0; i < module.sprints.length; i++) {
            const sprint = module.sprints[i];
            const traineePrs = traineePrsBySprint[i] || [];
            // We didn't have a register for the very first sprint.
            if (state.attendance === null || (module.name === "Module-Tools" && i === 0)) {
                row.appendChild(attendanceCell("unknown"));
            } else {
                const moduleAttendance = state.attendance[module.name];
                const sprintName = `sprint-${i + 1}`;
                if (sprintName in moduleAttendance) {
                    if (trainee.email.toLowerCase() in moduleAttendance[sprintName]) {
                        const timestampString = moduleAttendance[sprintName][trainee.email.toLowerCase()];
                        const timestamp = new Date(Date.parse(timestampString));
                        // TODO: Check the day, not just the time.
                        if (timestamp.getHours() < 10 || (timestamp.getHours() == 10 && timestamp.getMinutes() < 10)) {
                            row.appendChild(attendanceCell("present"));
                        } else {
                            row.appendChild(attendanceCell("late"));
                        }
                    } else {
                        row.appendChild(attendanceCell("absent"));
                    }
                } else {
                    row.appendChild(attendanceCell("absent"));
                }
            }
            for (const pr of sprint.matchPrs(traineePrs)) {
                if (pr === null) {
                    row.appendChild(missingPrCell());
                } else {
                    row.appendChild(prCell(pr));
                }
            }
        }
    }
    return row;
};

const groupPrsBySprint = (prs) => {
    const prsBySprint = [];
    for (const pr of prs) {
        let bestSprintPart = null;
        const titleParts = pr.title.toLowerCase().split("|");
        for (const rawTitlePart of titleParts) {
            const titlePart = rawTitlePart.trim();
            if (titlePart.startsWith("sprint")) {
                bestSprintPart = titlePart;
            } else if (titlePart.startsWith("week") && !bestSprintPart) {
                bestSprintPart = titlePart;
            }
        }
        if (!bestSprintPart) {
            console.log(`Couldn't identify sprint for ${pr.url} with title ${pr.title}`);
            continue;
        }
        const sprintNumberMatch = bestSprintPart.match(/\d+/);
        if (!sprintNumberMatch) {
            console.log(`Couldn't identify sprint for ${pr.url} with title ${pr.title}`);
            continue;
        }
        const sprintNumberString = sprintNumberMatch[0];
        const sprintNumber = parseInt(sprintNumberString);
        while (prsBySprint.length < sprintNumber) {
            prsBySprint.push([]);
        }
        prsBySprint[sprintNumber - 1].push(pr);
    }
    return prsBySprint;
};

const createTd = (text) => createElement("td", text);
const createTh = (text) => createElement("th", text);

const createElement = (tagName, text) => {
    const element = document.createElement(tagName);
    element.innerText = text;
    return element;
};

const createIssueTh = (pr) => {
    const link = document.createElement("a");
    link.innerText = pr.title;
    link.href = pr.html_url;
    const element = document.createElement("th");
    element.appendChild(link);
    return element;
}

// attendance is one of "unknown", "absent", "present", "late"
const attendanceCell = (attendance) => {
    const cell = document.createElement("td");
    cell.classList.add(`attendance-${attendance}`);
    cell.innerText = attendance;
    return cell;
};

const missingPrCell = () => {
    const element = createTd("");
    element.classList.add("pr-missing");
    return element;
}

const prCell = (pr) => {
    const link = createElement("a");
    link.href = pr.url;
    link.innerText = pr.number;
    const td = document.createElement("td");
    const normalisedStatus = pr.status.toLowerCase().replace(" ", "-");
    td.classList.add(`pr-${normalisedStatus}`);
    td.appendChild(link);
    return td;
}

async function fetchModules() {
    const sprintLabelPrefix = "📅 Sprint ";

    const promises = [];
    for (const moduleName of modules) {
        promises.push(fetch(`${apiPrefix}/${moduleName}/issues?direction=asc`).then((response) => response.json()));
    }
    const responses = await Promise.all(promises);

    const moduleInfo = [];
    for (let i = 0; i < modules.length; i++) {
        const moduleName = modules[i];
        const response = responses[i];
        const sprintToIssues = {};

        for (const issue of response) {
            if (issue.pull_request) {
                continue;
            }
            const submitPrLabel = issue.labels.find((label) => label.name === "Submit:PR");
            if (!submitPrLabel) {
                continue;
            }
            const sprintLabel = issue.labels.find((label) => label.name.startsWith(sprintLabelPrefix));
            if (!sprintLabel) {
                continue;
            }
            const sprintName = sprintLabel.name.slice(sprintLabelPrefix.length);
            if (!(sprintName in sprintToIssues)) {
                sprintToIssues[sprintName] = [];
            }
            sprintToIssues[sprintName].push(issue);
        }
        const sprints = [];
        for (const [sprintName, issues] of Object.entries(sprintToIssues).sort(([sprint1, _issues1], [sprint2, _issues2]) => sprint1.localeCompare(sprint2))) {
            sprints.push(new Sprint(sprintName, false, issues));
        }
        moduleInfo.push(new Module(moduleName, sprints));
    }
    return moduleInfo;
}

async function getTrainees() {
    const query = new URLSearchParams(window.location.search);
    if (query.has("trainees")) {
        const trainees = []
        const decoded = JSON.parse(atob(query.get("trainees")));
        for (const trainee of decoded) {
            trainees.push(new Trainee(trainee.name, trainee.email, trainee.github));
        }
        return trainees;
    }
    return [];
}

onLoad();
