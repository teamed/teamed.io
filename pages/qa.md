---
layout: plain
title: "Quality Assurance principles"
permalink: /qa.html
description:
  Quality Assurance (QA) in a software project must be
  focused on standards and principles of problems and tasks
  tracking
keywords:
  - quality assurance
  - qa in software
  - software quality assurance
  - quality assurance in software development
  - quality assurance principles
---

Each ticket must comply to the following requirements. They are
groupped by the type of the task.

All:

 * Formatting of ticket description follows
   [Github Markdown](https://help.github.com/articles/github-flavored-markdown/)
   style.

`TS/FIX` (bug fixing):

 * The ticket is closed only when the reported problem is solved,
   [see](http://www.yegor256.com/2015/02/12/top-down-design.html)

 * Problem reporter and problem solver are two different persons,
   [see](http://www.yegor256.com/2014/11/24/principles-of-bug-tracking.html#1.-keep-it-one-on-one)

 * Ticket title and description clearly state what is _broken_ and
   what kind of fix is expected,
   [see](http://www.yegor256.com/2014/11/24/principles-of-bug-tracking.html#5.-report-when-it-is-broken)

 * The ticket describes _one_ specific problem and provides a _single_ solution.

`TS/REV` (code review):

 * The code reviewer found at least _three issues_ in the pull request.

`TS/PDD` (puzzle resolving):

 * tbd
