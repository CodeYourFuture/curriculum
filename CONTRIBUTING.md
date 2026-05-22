# Contribution Guide

## Welcome to the <!-- CYF-ONLY -->CYF<!-- END-CYF-ONLY --> Curriculum

We are a volunteer-led community of tech professionals, and we teach people to code for free. We are majority-minority, we welcome everyone, and we welcome _you_.

This curriculum compiles narratives and activities developed by hundreds of people all over the world. You are invited to join us. Volunteer for the Tech Education team to teach in our classes, or contribute in a number of other ways. You can also volunteer remotely.

[Volunteer with CYF](https://codeyourfuture.io/volunteers/)

## Who runs this?

Our Tech Education volunteers teach in our classes. All Tech Ed volunteers can, and do, develop content for the curriculum, and they are encouraged to experiment to see what works. Our trainees also notice problems, and propose or implement solutions!

The Curriculum Team is a group of long term volunteers who are responsible for the overall direction of the curriculum. They decide the strategy and accept new content into the core. Once a Tech Ed volunteer has sufficiently tried out their material, they can propose that it be adopted into the main curriculum, and the Curriculum Team will make the ultimate decision. See more info on contributing new content below.

The Curriculum is led by the Director of Education, currently [Daniel Wagner-Hall](https://github.com/illicitonion). We meet every two weeks to discuss the curriculum and make decisions. The agenda is posted in the Slack channel #cyf-curriculum and [the minutes](https://curriculum.codeyourfuture.io/guides/contributing/minutes/) are posted on this website. If you'd like to come and talk to us, please do!

## About our content

### Our content is:

- practical
- written in simple English at a maximum of CEFR B2
- free

### Our content is not:

- a textbook
- a reference manual
- a collection of tutorials

## Pedagogy

We broadly use the [Teach Tech Together](https://teachtogether.tech/) pedagogical framework, in a [flipped classroom](https://bokcenter.harvard.edu/flipped-classrooms) style.

## How to contribute

Contributions to the curriculum are always welcome. Help in navigating teh directory structure and instructions for local testing can be found in the [contribution guidelines pages](https://curriculum.codeyourfuture.io/guides/contributing/) of our curriculum.

### Site Search

PageFind runs the search. https://pagefind.app/
It's in the build command on Netlify `hugo && npx pagefind --source "public"`
If you need to develop on this locally, run:

```bash
rm -rf public &&
npm run build:dev &&
npx pagefind --site "public" --serve
```

And go to http://localhost:1414/ to see the PageFind-served site with search enabled; but there is no hot reload. You can run hugo on http://localhost:1313/ at the same time.

## Checklist before raising a PR

Please check the following before raising a PR. Unless you have been given permissions to push to the code your future repo you will have to create a fork of the repo and then raise a PR from that to the main repo. You will also not be able to add reviewers yourself unless you have been given permission, but you can mention people in the PR description to bring it to their attention.

If you are working on a GitHub issue please mention the reference in the PR, but if it is a small improvement it does not need one.

- [ ] I have checked my spelling and grammar with an [automated tool](https://www.grammarly.com/grammar-check)
- [ ] I have previewed my changes to check the [markdown renders](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) as I intend
- [ ] I have run my code to check it works
- [ ] My changes follow our [Style Guide](https://curriculum.codeyourfuture.io/guides/code-style-guide)

## Deploy preview

When you raise a PR, Netlify will automatically try and deploy your branch and give you a custom URL so you can view a preview of your changes and anyone reviewing your PR can see the preview without needing to run the branch locally.

However, if you do not have permissions to push to the CodeYourFuture repo and are creating a PR from a fork of the review, someone with the correct permissions will have to approve the Netlify build. Please ask in the #cyf-curriculum channel in slack to get the build approved. If you have push permissions then the build will happen automatically.

As this repo contains multiple sites, when you create a PR it will create a different Netlify build for each site. Netlify also runs Lighthouse and creates a report on performance, accessibility, SEO and best practices so you can see how your branch performs.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/nbogie"><img src="https://avatars2.githubusercontent.com/u/69844?v=4?s=100" width="100px;" alt=""/><br /><sub><b>nbogie</b></sub></a><br /><a href="https://github.com/CodeYourFuture/syllabus/commits?author=nbogie" title="Documentation">📖</a></td>
    <td align="center"><a href="https://stephanie.chezleskrus.com/"><img src="https://avatars1.githubusercontent.com/u/22812441?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Stéphanie Krus</b></sub></a><br /><a href="#a11y-stephanie-K" title="Accessibility">️️️️♿️</a></td>
    <td align="center"><a href="http://www.thecodethatchriswrote.com"><img src="https://avatars2.githubusercontent.com/u/5181870?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Chris Owen</b></sub></a><br /><a href="https://github.com/CodeYourFuture/syllabus/commits?author=ChrisOwen101" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/mickyginger"><img src="https://avatars0.githubusercontent.com/u/3531085?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mike Hayden</b></sub></a><br /><a href="#content-mickyginger" title="Content">🖋</a></td>
    <td align="center"><a href="https://alasdairsmith.co.uk"><img src="https://avatars3.githubusercontent.com/u/424411?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alasdair Smith</b></sub></a><br /><a href="#content-40thieves" title="Content">🖋</a> <a href="https://github.com/CodeYourFuture/syllabus/commits?author=40thieves" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/textbook/about"><img src="https://avatars2.githubusercontent.com/u/785939?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jonathan Sharpe</b></sub></a><br /><a href="#content-textbook" title="Content">🖋</a> <a href="#infra-textbook" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://github.com/RC-PM"><img src="https://avatars3.githubusercontent.com/u/69386499?v=4?s=100" width="100px;" alt=""/><br /><sub><b>rc-pm</b></sub></a><br /><a href="https://github.com/CodeYourFuture/syllabus/commits?author=rc-pm" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/nholdsworth94"><img src="https://avatars1.githubusercontent.com/u/69724935?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nick Holdsworth</b></sub></a><br /><a href="#content-nholdsworth94" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/timhamrouge"><img src="https://avatars1.githubusercontent.com/u/34589526?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tim Hamrouge</b></sub></a><br /><a href="#content-timhamrouge" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Dedekind561"><img src="https://avatars.githubusercontent.com/u/25401570?v=4?s=100" width="100px;" alt=""/><br /><sub><b>MitchLloyd</b></sub></a><br /><a href="https://github.com/CodeYourFuture/syllabus/pulls?q=is%3Apr+reviewed-by%3ADedekind561" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/CodeYourFuture/syllabus/commits?author=Dedekind561" title="Tests">⚠️</a> <a href="https://github.com/CodeYourFuture/syllabus/commits?author=Dedekind561" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/gregdyke"><img src="https://avatars.githubusercontent.com/u/148489?v=4?s=100" width="100px;" alt=""/><br /><sub><b>gregdyke</b></sub></a><br /><a href="#infra-gregdyke" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/CodeYourFuture/syllabus/commits?author=gregdyke" title="Tests">⚠️</a> <a href="#content-gregdyke" title="Content">🖋</a> <a href="https://github.com/CodeYourFuture/syllabus/commits?author=gregdyke" title="Code">💻</a></td>
    <td align="center"><a href="http://lucymac.github.io/"><img src="https://avatars.githubusercontent.com/u/8991119?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lucy Zidour</b></sub></a><br /><a href="#content-LucyMac" title="Content">🖋</a> <a href="https://github.com/CodeYourFuture/syllabus/commits?author=LucyMac" title="Code">💻</a> <a href="https://github.com/CodeYourFuture/syllabus/pulls?q=is%3Apr+reviewed-by%3ALucyMac" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/theseafaringturtle"><img src="https://avatars.githubusercontent.com/u/16257713?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alessandro</b></sub></a><br /><a href="#content-theseafaringturtle" title="Content">🖋</a> <a href="https://github.com/CodeYourFuture/syllabus/commits?author=theseafaringturtle" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/makanti"><img src="https://avatars.githubusercontent.com/u/5037924?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Antigoni Makri</b></sub></a><br /><a href="#content-makanti" title="Content">🖋</a> <a href="https://github.com/CodeYourFuture/syllabus/commits?author=makanti" title="Code">💻</a></td>
      </tr>
  <tr>
    <td align="center"><a href="https://francescrosas.com"><img src="https://avatars.githubusercontent.com/u/50098?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Francesc Rosas</b></sub></a><br /><a href="#content-frosas" title="Content">🖋</a></td>
    <td align="center"><a href="http://sammart.in"><img src="https://avatars.githubusercontent.com/u/803607?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sam Martin</b></sub></a><br /><a href="#content-Sam-Martin" title="Content">🖋</a> <a href="https://github.com/CodeYourFuture/syllabus/commits?author=Sam-Martin" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/jcholyhead"><img src="https://avatars.githubusercontent.com/u/92216197?v=4?s=100" width="100px;" alt=""/><br /><sub><b>jcholyhead</b></sub></a><br /><a href="#content-jcholyhead" title="Content">🖋</a> <a href="https://github.com/CodeYourFuture/syllabus/commits?author=jcholyhead" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/MarkFarmiloe"><img src="https://avatars.githubusercontent.com/u/240964?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mark Farmiloe</b></sub></a><br /><a href="#content-MarkFarmiloe" title="Content">🖋</a> <a href="https://github.com/CodeYourFuture/syllabus/commits?author=MarkFarmiloe" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/szemate"><img src="https://avatars.githubusercontent.com/u/3908828?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Máté Szendrő</b></sub></a><br /><a href="#content-szemate" title="Content">🖋</a> <a href="https://github.com/CodeYourFuture/syllabus/commits?author=szemate" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/mcrav"><img src="https://avatars.githubusercontent.com/u/26581932?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Matthew Craven</b></sub></a><br /><a href="https://github.com/CodeYourFuture/syllabus/issues?q=author%3Amcrav" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/carterd888"><img src="https://avatars.githubusercontent.com/u/62474051?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Daniel Carter</b></sub></a><br /><a href="https://github.com/CodeYourFuture/syllabus/issues?q=author%3Acarterd888" title="Bug reports">🐛</a></td>
      </tr>
  <tr>
    <td align="center"><a href="https://github.com/bonboh"><img src="https://avatars.githubusercontent.com/u/6434329?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Coung</b></sub></a><br /><a href="#content-bonboh" title="Content">🖋</a> <a href="https://github.com/CodeYourFuture/syllabus/commits?author=bonboh" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Lana-Franks-Code"><img src="https://avatars.githubusercontent.com/u/64899248?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lana-Franks-Code</b></sub></a><br /><a href="https://github.com/CodeYourFuture/syllabus/issues?q=author%3ALana-Franks-Code" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/g1st"><img src="https://avatars.githubusercontent.com/u/16963832?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gintaras</b></sub></a><br /><a href="https://github.com/CodeYourFuture/syllabus/issues?q=author%3Ag1st" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/rickscode"><img src="https://avatars.githubusercontent.com/u/71875733?v=4?s=100" width="100px;" alt=""/><br /><sub><b>rickscode</b></sub></a><br /><a href="https://github.com/CodeYourFuture/syllabus/issues?q=author%3Arickscode" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/ClaireBickley"><img src="https://avatars.githubusercontent.com/u/58375712?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Claire Bickley</b></sub></a><br /><a href="#content-ClaireBickley" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.jackfranklin.co.uk"><img src="https://avatars.githubusercontent.com/u/193238?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jack Franklin</b></sub></a><br /><a href="https://github.com/CodeYourFuture/syllabus/issues?q=author%3Ajackfranklin" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/sansaid"><img src="https://avatars.githubusercontent.com/u/47756528?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sanyia Saidova</b></sub></a><br /><a href="#content-sansaid" title="Content">🖋</a> <a href="https://github.com/CodeYourFuture/syllabus/commits?author=sansaid" title="Code">💻</a></td>
      </tr>
  <tr>
    <td align="center"><a href="https://github.com/ochthenoodle"><img src="https://avatars.githubusercontent.com/u/91696526?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jo</b></sub></a><br /><a href="#content-ochthenoodle" title="Content">🖋</a> <a href="https://github.com/CodeYourFuture/syllabus/commits?author=ochthenoodle" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
