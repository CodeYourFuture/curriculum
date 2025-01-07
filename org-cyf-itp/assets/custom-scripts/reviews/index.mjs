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

const NO_REVIEWER_PLACEHOLDER = "[No reviewer]";

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
}

async function onLoad() {
  render();
  state.prs = (await fetchPrsWithoutLoadingReviews()).filter((pr) => pr.status === "Needs Review");
  render();
  await Promise.all(state.prs.map((pr) => pr.loadReviews()));
  render();
}

function render() {
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

  for (const pr of state.prs) {
    for (const review of pr.reviews) {
      if (!review.isPrAuthor) {
        reviewers.add(review.userName);
      }
    }
    if (state.reviewer_filter) {
      if (state.reviewer_filter === NO_REVIEWER_PLACEHOLDER) {
        if (pr.hasReviewer()) {
          continue;
        }
      } else if (state.reviewer_filter) {
        if (!pr.reviews.some((review) => review.userName.toLowerCase().startsWith(state.reviewer_filter.toLowerCase()))) {
          continue;
        }
      }
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

  const knownReviewersElement = document.querySelector("#known-reviewers");
  knownReviewersElement.innerText = "";
  const sortedReviewers = [...reviewers].sort();
  if (sortedReviewers) {
    const option = document.createElement("option");
    option.value = NO_REVIEWER_PLACEHOLDER;
    knownReviewersElement.appendChild(option);
  }
  for (const reviewer of sortedReviewers) {
    const option = document.createElement("option");
    option.value = reviewer;
    knownReviewersElement.appendChild(option);
  }
}

onLoad();

document.querySelector("#reviewer-filter").addEventListener("keyup", (event) => {
  state.reviewer_filter = event.target.value;
  console.log("Setting filter to " + state.reviewer_filter);
  render();
});
