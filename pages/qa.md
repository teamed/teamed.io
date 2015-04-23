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

As a Quality Assurance (QA) engineer your responsibility in a project is
to review every ticket after its completion and reveal incompliances with
our quality requirements listed below. The requirements are groupped
by the type of the ticket they are applicable to.

When you find some issues in a ticket, make sure the performer
fixes them first, before giving any mark to him/her. Remember that once
you give a quality mark, the performer has no motivation any more to fix
anything, becuase he/she gets the money and walks away.
You should act as a barrier between the performer and the money.
Don't rush, let them work a bit and fix all quality problems possible to fix.

All tickets:

 * The formatting of a ticket description, as well as all messages inside it, follows
   [Github Markdown](https://help.github.com/articles/github-flavored-markdown/)
   style.

 * Messages in a ticket always start with a name of a user they are
   addressed to.

`TS/FIX` (bug fixing tickets) and `TS/PDD` (puzzle resolving):

 * The ticket is closed only when the reported problem is solved,
   [see](http://www.yegor256.com/2015/02/12/top-down-design.html).

 * Some of ticket messages must mention all pull requests where the
   problem was actually fixed.

`TS/FIX` (bug fixing tickets):

 * Problem reporter and problem solver are two different persons,
   [see](http://www.yegor256.com/2014/11/24/principles-of-bug-tracking.html#1.-keep-it-one-on-one).

 * Ticket title and description clearly state what is _broken_ and
   what kind of fix is expected,
   [see](http://www.yegor256.com/2014/11/24/principles-of-bug-tracking.html#5.-report-when-it-is-broken)

 * The ticket describes _one_ specific problem and provides a _single_ solution.

`TS/REV` (code review):

 * Pull request title explains the problem it is fixing.

 * Pull request description explains the solution proposed and contains
   a link to the original ticket it is related to.

 * The code reviewer found at least _three problems_ in the code.

 * All problems found by the code reviewer were addressed by
   the pull request author.

