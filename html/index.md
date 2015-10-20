---
layout: default
title: "Software Developers for Hire"
permalink: /index.html
description:
  Hire us for your project and get an individually
  chosen team of programmers committed to
  the highest-quality standards in the industry.
keywords:
  - java programmers for hire
  - programmers to hire
  - software developer outsource
  - java programming outsource
  - hire freelancer
  - get a freelancer
  - find a freelancer
  - find a software developer
---

<script src="/js/twitter-fetcher.js"></script>
<script>
twitterFetcher.fetch(
  {
    'id': '656210753641279488',
    'domId': 'tweets',
    'maxTweets': 3,
    'enableLinks': true
  }
);
</script>

<div id='tweets'></div>

<p style="text-align:right"><a href="https://twitter.com/teamed_io">more news</a></p>

<form name="form" name="form" ng-submit="submit()">
  <p>
    <label>What your project is about?</label><br/>
    <textarea name="details" style="width:100%;height:5em" tabindex="1"
      ng-model="details" required autofocus></textarea><br/>
    <span class="help">Please, tell us briefly about your business case,
      expected stack of technologies, current situation with
      the source code (if it exists), and your cost/time expectations.</span>
  </p>
  <p>
    <button id='submit' tabindex="2">Request estimate</button><br/>
    <span class="help">We'll get back in a few hours with a free estimate.</span>
  </p>
</form>

<script>
angular.module('teamed', []).controller(
  'Main',
  [
    '$scope',
    function($scope) {
      $scope.submit = function() {
        var text =
          'I have a project to outsource:\n\n'
          + $scope.details;
        var url = 'http://www.netbout.com/start?post='
          + encodeURIComponent(text)
          + '&invite=yegor256&rename=new+project';
        window.location = url;
      }
    }
  ]
);
</script>

## Hire a Remotely<br/> <del>Managed</del> Orchestrated<br/>Team of Developers

Present us with your requirements, be it a web system, mobile app,
or Big Data who-knows-what. We will give you our best team of
freelancers, all working remotely, and we will <strong>orchestrate</strong> their work,
keeping you an active participant in the project.

No product owners on duty here or weekly updates! You're the <strong>product owner</strong>, and
all programmers will communicate with you directly and immediately about
features and functionality. Although all management overhead is ours.

440 North Wolfe Road, Ste 61<br/>
Sunnyvale, CA 94085<br/>
[hire@teamed.io](mailto:hire@teamed.io)<br/>
860.506.5536

Don't forget to follow us on
[Facebook](https://www.facebook.com/teamedio),
[LinkedIn](https://www.linkedin.com/company/teamed-io),
[AngelList](https://angel.co/teamed-io), and
[Twitter](https://twitter.com/teamed_io).

<p class="help">
  Yes, we're based in <strong>Silicon Valley</strong>, but our developers
  all contribute remotely from more than 15 countries, including Poland,
  the Philippines, Brazil, Russia, France, Ukraine, and the United States.
</p>

<span id="how"></span>
## Learn How It Works

The way we develop software is absolutely unique
and revolutionary. We basically [invented](http://www.yegor256.com/2014/04/17/how-xdsd-is-different.html) it.

For every project, we organize a **distributed team**
of programmers who work on a contractual basis.

We break the project scope down to **thousands of micro tasks**
and compile the output into a single work product.
(We have four pending patents for this mechanism.)

We ensure that every incremental task preserves the **required quality**
of the overall project.

<a href="http://www.yegor256.com"><img src="http://www.yegor256.com/images/yegor-bugayenko-192x192.png"
  style="width:128px;border-radius:50%;float:left;margin-right:1em;margin-bottom:1em"/></a>
&ldquo;I started to experiment with this idea six years ago, in 2009. I've filed
a number of patents, tested it in a few dozen open source projects, and gave it a name. It's called
eXtremely Distributed Software Development ([XDSD](http://www.xdsd.org)).
I also wrote a number of articles about it on [my blog](http://www.yegor256.com/tag/xdsd.html).
Interested in learning more? Just [email me](mailto:yegor@teamed.io) and
we'll chat.&rdquo;

<p style="text-align:right">
&mdash; Yegor Bugayenko<br/>
CTO of Teamed.io
</p>

<span id="portfolio"></span>
## Enjoy the Quality of Code

The quality of code we produce is higher than any other software
team can deliver simply because: 1) our quality controls are
[very strict](http://www.yegor256.com/2014/08/13/strict-code-quality-control.html),
and 2) we apply them after each change.

Our teams are also working on open source projects, so you can
check our code and compare it with what you've seen before from other
teams and other programmers. Also, check out the way we manage projects. All
project communications are open in
[GitHub](https://github.com/teamed). Take a look at these recent
projects:

<p class="double">
<a href="http://www.takes.org">
<img src="http://www.takes.org/clapper.jpg" style="width:96px;height:96px;" alt="takes logo"/></a>
<a href="http://www.takes.org">takes.org</a>
&mdash;
a true object-oriented and immutable Java web framework
for UI web apps and RESTful APIs that serves as an OOP alternative
to Spring, Play Framework, and other dinosaurs.
</p>

<p class="double">
<a href="http://www.rultor.com">
<img src="http://doc.rultor.com/images/logo.svg" style="width:64px;height:64px;" alt="rultor logo"/></a>
<a href="http://www.rultor.com">rultor.com</a>
&mdash;
a virtual DevOps assistant that automates merge, release, and deploy operations
in on-demand Docker containers and communicates with over 100 open source
projects through GitHub.
</p>

<p class="double">
<a href="http://www.jcabi.com">
<img src="http://img.jcabi.com/logo-square.svg" style="width:64px;height:64px;" alt="jcabi logo"/></a>
<a href="http://www.jcabi.com">jcabi.com</a>
&mdash;
useful Java components, including <a href="https://github.com/jcabi/jcabi-aspects">AOP aspects</a>,
<a href="https://github.com/jcabi/jcabi-dynamo">DynamoDB SDK</a>,
<a href="https://github.com/jcabi/jcabi-mysql-maven-plugin">MySQL Maven Plugin</a>,
<a href="https://github.com/jcabi/jcabi-github">GitHub API</a>, etc.,
all built with strict OOP principles in mind.
</p>

<!--
<p class="double">
<a href="http://www.s3auth.com">
<img src="http://img.s3auth.com/logo.svg" style="width:170px;" alt="s3auth logo"/></a>
HTTP Basic Authenticating Gateway for Amazon S3 Buckets
</p>
-->

<!--
<p class="double">
<a href="http://www.stateful.co">
<img src="http://img.stateful.co/pomegranate.svg" style="width:64px;" alt="stateful logo"/></a>
Stateful RESTful Web Primitives With XML/JSON API
</p>
-->

Also see [our full portfolio](/portfolio.html).

Again, we produce higher quality of code because we control quality in every micro task.
Our micro tasks are really small in size and usually take less than
30 minutes to complete. Every single task (without exception)
has to pass the [stringent quality checks](http://www.yegor256.com/2014/08/13/strict-code-quality-control.html)
that we employ, like Checkstyle, Rubocop, or FindBugs.

## Pay a Few Times Less

There is no wasted money here, because we don't pay <strong>salaries</strong>.
Our programmers are paid based on their deliverables. If, for some reason, they
are unable to deliver, or if the project no longer requires their services
&mdash; you don't pay. We don't have to focus on covering our expenses, so we have more
time to focus on meeting your project objectives.

In some cases,
we're [30 times more cost-efficient](http://www.yegor256.com/2014/04/11/cost-of-loc.html)
than traditional organizations.

<span id="pool"></span>
## Access a Literally Unlimited Talent Pool

You get targeted skills because we don't have programmers in house.
Since we don't have programmers on our payroll, you have
the luxury of choosing from a vast talent market of only
those professionals specifically required for your project.
If your software needs to be written in Scala, we won't try to sell
you in-house Python developers just to cover our expenses.

You get access to an unlimited talent pool
because we pay high hourly rates for the best engineers.
We are willing to pay up to [$500 per hour](http://www.yegor256.com/2014/10/29/how-much-do-you-cost.html)
for an exceptionally talented programmer.
You can't get that person on a payroll, no matter
how interesting and well-funded your project may be. However, for a part-time
assignment, we can hire those talented programmers for your project.

We may work with almost any technology stack, but we prefer open source
technologies on Linux, especially:

<p class="double">
<img src="/images/tech/java.jpg" style="width:64px;height:64px;"/>
Java, Groovy, Hadoop, AOP/AspectJ,
JAX-RS, XML, XSLT, JUnit, Maven, Mockito
</p>

<p class="double">
<img src="/images/tech/aws.jpg" style="width:128px;height:52px;"/>
EC2, S3, Elastic Beanstalk, DynamoDB, CloudWatch,
SNS, SQS, CloudFront, SES
</p>

<p class="double">
<img src="/images/tech/database.png" style="width:64px;height:64px;"/>
PostgreSQL, H2, DynamoDB,
MongoDB, SimpleDB
</p>

<p class="double">
<img src="/images/tech/html5.png" style="width:64px;height:64px;"/>
JavaScript, jQuery, SASS, AngularJS,
node.js, HTML5, CSS3, PhantomJS, CasperJS
</p>

<p class="double">
<img src="/images/tech/wheel.png" style="width:64px;height:64px;"/>
GitHub, Rultor, Travis, Docker, Continuous Integration,
Build Automation, TDD, Static Analysis
</p>

<p class="help">
  There are some technologies we prefer <strong>not</strong> to work with,
  as well, including: PHP, Python, Ant, Azure, utility classes,
  MySQL, getters and setters, .Net, copy &amp; paste,
  Subversion, JIRA/Bitbucket, Scrum, daily standups,
  singletons, Windows, Adobe Flash, ORM, Perl, Spring Framework, RPC,
  NULL references, Selenium, PowerMock
</p>

<span id="team"></span>
## Check Out Our<br/>Best Developers

Even though we build a custom team for each project, some developers
have remained with us for a long time, participating
in many projects simply because they are **the best**
(in alphabetic order):

<p class="double">
<a href="https://github.com/caarlos0"><img src="/images/team/caarlos0.png" style="width:96px;height:96px;border-radius:50%;"/></a>
<a href="https://github.com/caarlos0">@caarlos0</a>
is a software developer based in Joinville, SC, Brazil.
You can find out more about him at <a href="http://www.carlosbecker.com">carlosbecker.com</a>.
</p>

<p class="double">
<a href="https://github.com/carlosmiranda"><img src="/images/team/carlosmiranda.png" style="width:96px;height:96px;border-radius:50%;"/></a>
<a href="https://github.com/carlosmiranda">@carlosmiranda</a>
is a Certified Java Developer who also works part-time as a programming instructor;
more info <a href="https://ph.linkedin.com/pub/carlos-miguel-miranda/92/993/b8">here</a>.
</p>

<p class="double">
<a href="https://github.com/darkled"><img src="/images/team/darkled.png" style="width:96px;height:96px;border-radius:50%;"/></a>
<a href="https://github.com/darkled">@darkled</a>
is a senior Java developer with 8+ years of experience, mostly in telecommunications and computer science research; more info
<a href="https://www.linkedin.com/in/alexeysaenko">here</a>.</p>

<p class="double">
<a href="https://github.com/ekondrashev"><img src="/images/team/ekondrashev.png" style="width:96px;height:96px;border-radius:50%;"/></a>
<a href="https://github.com/ekondrashev">@ekondrashev</a>
is a freelancer from Odessa, Ukraine, with 8+ years of experience in Java and 5+ in Python;
check him out on <a href="https://www.upwork.com/freelancers/~010f8bc13f9d228ff1">Upwork</a>.</p>

<p class="double">
<a href="https://github.com/ggajos"><img src="/images/team/ggajos.png" style="width:96px;height:96px;border-radius:50%;"/></a>
<a href="https://github.com/ggajos">@ggajos</a>
is a co-founder of the
<a href="http://opentangerine.com">Open Tangerine</a> software house,
as well as a quality evangelist &mdash; not only in code.</p>

<p class="double">
<a href="https://github.com/krzyk"><img src="/images/team/krzyk.png" style="width:96px;height:96px;border-radius:50%;"/></a>
<a href="https://github.com/krzyk">@krzyk</a>
is a software developer with 12 years of experience
developing applications for the telecommunications, advertising, and travel industries;
more info <a href="https://www.linkedin.com/in/krzyk">here</a>.
</p>

<p class="double">
<a href="https://github.com/longtimeago"><img src="/images/team/longtimeago.png" style="width:96px;height:96px;border-radius:50%;"/></a>
<a href="https://github.com/longtimeago">@longtimeago</a>
is a software developer with significant experience in the securities and forex trading domain
who likes automation, quality, and proactivity; more <a href="https://ua.linkedin.com/pub/pavlo-polishchuk/18/889/b49">here</a>.</p>

<p class="double">
<a href="https://github.com/pinaf"><img src="/images/team/pinaf.png" style="width:96px;height:96px;border-radius:50%;"/></a>
<a href="https://github.com/pinaf">@pinaf</a>
is a mathematician and senior Java developer with 10+ years of experience,
most of which is in the financial sector; more info <a href="https://br.linkedin.com/in/pinaf">here</a>.
</p>

<span id="join"></span>
## You're a Good Programmer?<br/> Consider Joining Us

If you're passionate about software development
and quality, we want to work with you. You should know,
though, that our [coding standards](http://www.yegor256.com/2014/08/13/strict-code-quality-control.html) are unexpectedly high for most newcomers. Moreover, our work model
[differs](http://www.yegor256.com/2014/04/17/how-xdsd-is-different.html)
from anything you've probably seen before. But you
shouldn’t be scared &mdash; just be ready to improve &nbsp;:)

We offer flexible, part-time work you can perform
from anywhere. In most cases, we expect you to spend up
to 10 hours per week blending our projects into your other full-time work.

Our projects are both challenging and interesting. You
will solve difficult problems, work with cutting-edge technologies,
and collaborate with skilled professionals. There are no
routine or boring tasks here.

You should expect to work on small, well-defined tasks
(usually 30 minutes each) personally selected to fit your
skills and experience. We even [encourage](http://www.yegor256.com/2014/04/13/no-obligations-principle.html)
our developers to reject
tasks if they don't feel like they're a good fit.

<span style="float:right">
  <img src="/images/wallet/paypal.png" style="width:75px;height:75px;"/>
  <img src="/images/wallet/bitcoin.png" style="width:75px;height:75px;"/>
  <img src="/images/wallet/upwork.png" style="width:75px;height:75px;"/>
</span>
We pay you immediately after a task is completed, either
through [Upwork](http://www.upwork.com), [PayPal](http://www.paypal.com),
or [Bitcoins](https://bitcoin.org/en/),
according to the budget allocated for the task multiplied by your hourly rate.
Say, for example, that your rate is [$50 per hour](http://www.yegor256.com/2014/10/29/how-much-do-you-cost.html)
and the task budget is 30 minutes.
You will get $25 immediately after the task is completed. Here is a
[sample](/engineer.pdf) of our contract.

<form action="/join.html">
  <p>
    <button type="submit">Apply Now</button>
  </p>
  <p class="help">
    By the way, if you want to contribute to our open source projects, try
    these: <a href="https://github.com/yegor256/takes">takes</a>,
    <a href="https://github.com/yegor256/rultor">rultor</a>, and
    <a href="https://github.com/yegor256/thindeck">thindeck</a>.
    We're working on them right now,
    and your help would be appreciated.
  </p>
</form>

<script src="//platform.twitter.com/oct.js" type="text/javascript"></script>
<script type="text/javascript">
twttr.conversion.trackPid('l4qjl');
</script>
