const awaitingReviewByAge = {};
const prsByModule = {};

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

async function onLoad() {
  for (const module of modules) {
    awaitingReviewByAge[module] = {
      "this week": 0,
      "this month": 0,
      old: 0,
    };
    prsByModule[module] = [];
  }

  for (const pr of (await fetchPrs()).filter(
    (pr) => pr.status === "Needs Review"
  )) {
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

  for (const module of modules) {
    const awaitingReview = awaitingReviewByAge[module];
    const totalPending = Object.values(awaitingReview).reduce(
      (acc, cur) => acc + cur,
      0
    );

    const overviewCard = document
      .querySelector("template.overview-card")
      .content.cloneNode(true);
    overviewCard.querySelector(
      ".module"
    ).innerText = `${module} (${totalPending})`;
    for (const [age, count] of Object.entries(awaitingReview)) {
      const bucket = overviewCard.querySelector(
        `.age-bucket.${age.replaceAll(" ", "-")} .count`
      );
      if (bucket) bucket.innerText = count;
      if (bucket && badness(age, count) === 900) {
        bucket.classList.add("problem");
      }
    }
    overviewCard
      .querySelector(".overview-card")
      .classList.add(computeStatusClass(awaitingReview));
    document.querySelector("#overview").appendChild(overviewCard);

    if (totalPending) {
      const modulePrList = document
        .querySelector("template.pr-list")
        .content.cloneNode(true);
      modulePrList.querySelector(
        ".module"
      ).innerText = `${module} (${totalPending})`;
      for (const pr of prsByModule[module]) {
        const prInList = document
          .querySelector("template.pr-in-list")
          .content.cloneNode(true);

        prInList.querySelector(".emoji").innerText = ageToEmoji[pr.updatedAge];

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
}

onLoad();
