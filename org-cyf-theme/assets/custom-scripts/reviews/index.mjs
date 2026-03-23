// 400/700/900
function badness(name, count) {
  if ((name === "old" || name == "this month") && count > 0) {
    return 900;
  }
  if (name === "this week" && count > 20) {
    return 900;
  }
  if (name === "this week" && count > 10) {
    return 700;
  }
  return 400;
}

const ageToEmoji = {
  "this week": "🟢",
  "this month": "🟠",
  old: "🔴",
};

function computeStatusClass(awaitingReview) {
  const score = Math.max(
    ...Object.entries(awaitingReview).map(([name, count]) =>
      badness(name, count)
    )
  );
  if (score === 900) {
    return "is-bad";
  } else if (score === 700) {
    return "is-medium";
  } else {
    return "is-good";
  }
}

const state = {
  "prs": null,
  "reviewer_filter": "",
  "region_filter": "",
  "sprint_filter_module": "",
  "sprint_filter_sprint": "",
  "sprint_filter_taskname": "",
}

async function onLoad() {
  const urlParams = new URLSearchParams(window.location.search);
  const region = urlParams.get("region");
  state.region_filter = region;

  render();
  state.prs = (await fetchPrsWithoutLoadingReviews()).filter((pr) => pr.status === "Needs Review");

  // Set up the filter for sprints
  const sprints = new Set();
  state.prs.forEach(pr => {
    sprints.add(`${pr.module} Sprint ${pr.sprint} - ${pr.taskName}`);
  });
  const sortedSprints = [...sprints].sort();
  const sprintFilterElement = document.querySelector("#sprint-filter");
  for (const sprint of sortedSprints) {
    const option = document.createElement("option");
    option.value = sprint;
    sprintFilterElement.appendChild(option);
  }

  render();
  await Promise.all(state.prs.map((pr) => pr.loadReviews()));
  render();

}

function render() {
  // Create regions filter object
  const regionSelect = document.querySelector("#region-filter");
  regionSelect.textContent = "";
  regionSelect.appendChild(makeRegionOption("All Regions", ""));
  for (const region of Object.keys(regionAliases)) {
    regionSelect.appendChild(makeRegionOption(region, region));
  }
  regionSelect.appendChild(makeRegionOption("Unknown", "Unknown"));
  regionSelect.addEventListener("change", (event) => {
    state.region_filter = event.target.value;
    render();
  });

  // Default loading state
  if (state.prs === null) {
    document.querySelector("#pr-list").innerText = "Loading...";
    return;
  }

  const awaitingReviewByAge = {};
  const prsByModule = {};
  const reviewers = new Set();

  for (const module of modules) {
    awaitingReviewByAge[module] = {
      "this week": 0,
      "this month": 0,
      old: 0,
    };
    prsByModule[module] = [];
  }

  // Filter all the relevant PRs to show, sorted by oldest first
  for (const pr of state.prs) {
    if (state.region_filter && !regionMatches(state.region_filter, pr.title)) {
      continue;
    }
    if (state.sprint_filter_module && pr.module != state.sprint_filter_module && pr.sprint != state.sprint_filter_sprint){
      continue;
    }
    for (const review of pr.reviews) {
      if (!review.isPrAuthor) {
        reviewers.add(review.userName);
      }
    }
    if (state.reviewer_filter && !pr.reviews.some((review) => review.userName.toLowerCase().startsWith(state.reviewer_filter.toLowerCase()))) {
      continue;
    }

    awaitingReviewByAge[pr.module][pr.updatedAge]++;
    prsByModule[pr.module].push(pr);
  }
  for (const module of modules) {
    prsByModule[module].sort((l, r) => {
      if (l.updatedAge > r.updatedAge) {
        return 1;
      } else if (l.updatedAge < r.updatedAge) {
        return -1;
      } else {
        return l.number - r.number;
      }
    });
  }

  document.querySelector("#pr-list").innerText = "";
  document.querySelector("#overview").innerText = "";

  // Build each module
  for (const module of modules) {
    const awaitingReview = awaitingReviewByAge[module];
    const totalPending = Object.values(awaitingReview).reduce(
      (acc, cur) => acc + cur,
      0
    );

    // Create a traffic light card to show at top of page
    const overviewCard = document
      .querySelector("template.overview-card")
      .content.cloneNode(true);
    fillWithModuleHeading(overviewCard.querySelector(".module"), module, totalPending);
    for (const [age, count] of Object.entries(awaitingReview)) {
      const bucket = overviewCard.querySelector(
        `.age-bucket.${age.replaceAll(" ", "-")} + .count`
      );
      if (bucket) bucket.innerText = count;
      if (bucket && badness(age, count) === 900) {
        bucket.classList.add("is-problem");
      }
    }
    overviewCard
      .querySelector(".overview-card")
      .classList.add(computeStatusClass(awaitingReview));
    document.querySelector("#overview").appendChild(overviewCard);

    // Add the PRs for each module
    if (totalPending) {
      const modulePrList = document
        .querySelector("template.pr-list")
        .content.cloneNode(true);
      fillWithModuleHeading(modulePrList.querySelector(".module"), module, totalPending);
      for (const pr of prsByModule[module]) {
        const prInList = document
          .querySelector("template.pr-in-list")
          .content.cloneNode(true);

        const emojiElement = prInList.querySelector(".emoji");
        if (pr.hasReviewer()) {
          emojiElement.innerText = "🙋🏾";
          const reviewers = [...new Set(pr.reviews.filter((reviewer) => !reviewer.isPrAuthor).map((reviewer) => reviewer.userName))];
          const maybeS = reviewers.length === 1 ? "" : "s";
          emojiElement.title = `Has reviewer${maybeS}: ${reviewers.join(", ")}`;
        } else {
          emojiElement.innerText = ageToEmoji[pr.updatedAge];
        }

        const prLink = prInList.querySelector("a.pr-link");
        prLink.href = pr.url;
        prLink.innerText = `${pr.title}`;

        const userLink = prInList.querySelector("a.user-link");
        userLink.href = pr.userUrl;
        userLink.innerText = `${pr.userName}`;

        prInList.querySelector(".pr-number").innerText = pr.number;
        modulePrList.querySelector("ul.pr-list").appendChild(prInList);
      }
      document.querySelector("#pr-list").appendChild(modulePrList);
    }
  }

  // Set up the filter for reviewers
  const knownReviewersElement = document.querySelector("#known-reviewers");
  knownReviewersElement.innerText = "";
  const sortedReviewers = [...reviewers].sort();
  for (const reviewer of sortedReviewers) {
    const option = document.createElement("option");
    option.value = reviewer;
    knownReviewersElement.appendChild(option);
  }

}

const regionMatches = (regionToFilter, prTitle) => {
  if (regionToFilter == "Unknown") {
    for (const region of Object.keys(regionAliases)) {
      if (regionMatches(region, prTitle)) {
        return false;
      }
    }
    return true;
  }
  const lowerParts = prTitle.toLowerCase().split("|").map((part) => part.trim());
  for (const alias of [regionToFilter, ...regionAliases[regionToFilter]]) {
    const lowerAlias = alias.toLowerCase();
    for (const lowerPart of lowerParts) {
      if (lowerPart == lowerAlias) {
        return true;
      }
    }
  }
  return false;
};

const regionAliases = {
  "Cape Town": ["South Africa", "SouthAfrica", "ZA", "ZA Cape Town"],
  "Glasgow": ["Scotland"],
  "London": [],
  "North West": ["NW", "Manchester"],
  "Sheffield": [],
  "West Midlands": ["WM", "WestMidlands", "West-Midlands"],
}

const fillWithModuleHeading = (container, module, pending) => {
  container.innerText = "";
  const link = document.createElement("a");
  link.innerText = module;
  link.href = `https://github.com/CodeYourFuture/${module}/pulls`;
  const text = document.createTextNode(` (${pending})`);
  container.append(link, text);
}

const makeRegionOption = (label, value) => {
  const option = document.createElement("option");
  option.textContent = label;
  option.value = value;
  option.selected = state.region_filter === value;
  return option;
}

onLoad();

// TODO add a filter for task
document.querySelector("#reviewer-filter").addEventListener("keyup", (event) => {
  state.reviewer_filter = event.target.value;
  console.log("Setting filter to " + state.reviewer_filter);
  render();
});
const sprintFilterMatch = /(.+) Sprint (\d) - (\w+)/;
document.querySelector("#sprint-filter").addEventListener("change", (event) => {
  if(event.target.value){
    const chosenFilter = sprintFilterMatch.match(event.target.value);
    state.sprint_filter_module = chosenFilter[1];
    state.sprint_filter_sprint = chosenFilter[2];
    state.sprint_filter_taskname = chosenFilter[3];
  } else {
    state.sprint_filter_module = state.sprint_filter_sprint = state.sprint_filter_taskname = "";
  }
  render();
})
