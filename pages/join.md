---
layout: default
title: "Join Us"
permalink: /join.html
description:
  In order to hire you, we have to collect some basic
  information.
keywords:
  - hire software developer
  - remote programmer hire
  - hire programmer
  - start working remotely
  - hire a programmer
---

Please fill out this form if you want to work with us.

<form name="form" name="form" id="form" ng-submit="submit('#form');">
  <p>
    <label>Your full name</label><br/>
    <input name="name" style="width:12em" tabindex="1"
      maxlength="100" ng-model="name" required autofocus/>
  </p>
  <p>
    <label>Hourly rate (in U.S. dollars)</label><br/>
    <input name="rate" type="number" tabindex="2"
      style="width:5em" maxlength="10" ng-model="rate" required/><br/>
    <span class="help">Keep this article in mind:
    <a href="http://www.yegor256.com/2014/10/29/how-much-do-you-cost.html">How Much Do You Cost?</a>
    If your rate is lower than $20 per hour, don't bother; we most
    likely won't accept you.</span>
  </p>
  <p>
    <label>Skills</label><br/>
    <input name="skills" tabindex="3"
      pattern="([0-9A-Za-z+\- ]+,?)+" placeholder="([0-9A-Za-z+\- ]+,?)+"
      style="width:16em" maxlength="150" ng-model="skills" required/><br/>
    <span class="help">Comma-separated list of skills you're good at; for example,
    "Java, C++" or "UML." No more than three, please.</span>
  </p>
  <p>
    <label>Phone number</label><br/>
    <input name="phone" style="width:10em" tabindex="4"
      pattern="[0-9.\-+ ]+" placeholder="[0-9.\-+ ]+"
      maxlength="20" ng-model="phone" required/><br/>
    <span class="help">Our customers require us to collect this information
    from all our engineers, programmers, testers, DevOps, etc. We have
    to know who we're working with in order to guarantee our clients
    a certain level of security for their sensitive information. We won't
    call or mail you.</span>
  </p>
  <p>
    <label>Country</label><br/>
    <input name="country" style="width:9em" tabindex="5"
      pattern="[a-zA-Z ]+" placeholder="[a-zA-Z ]+"
      maxlength="50" ng-model="country" required/>
  </p>
  <p>
    <label>Postal address</label><br/>
    <input name="address" style="width:20em" tabindex="6"
      maxlength="150" ng-model="address" required/>
  </p>
  <p>
    <label>Email</label><br/>
    <input name="email" type="email" tabindex="7"
      style="width:17em" maxlength="100" ng-model="email" required/>
  </p>
  <p>
    <label><a href="https://github.com">GitHub</a> account name</label><br/>
    <input name="github" type="text" tabindex="8"
      placeholder="[a-zA-Z0-9\-]+" pattern="[a-zA-Z0-9\-]+"
      style="width:11em" maxlength="50" ng-model="github" required/><br/>
    <span class="help">As <a href="http://www.yegor256.com/2014/10/07/stop-chatting-start-coding.html">this article</a> explains,
    we exclusively use GitHub tickets to communicate in a project; no
    emails, chats, meetings, or phone calls.</span>
  </p>
  <p>
    <label><a href="http://www.netbout.com">Netbout</a> account name</label><br/>
    <input name="netbout" style="width:11em" tabindex="9"
      placeholder="[a-zA-Z0-9]+" pattern="[a-zA-Z0-9]+"
      maxlength="50" ng-model="netbout" required/><br/>
    <span class="help">We use Netbout for non-project discussions
    related to payments, disciplinary actions, ratings, performance
    appraisals, etc. Netbout integrates our management and automated
    reporting tools. If you don't have a Netbout account, create one now;
    it should take less than a minute. Don't forget to register your email
    there to stay tuned for updates.</span>
  </p>
  <p>
    <label>Your personality code<br/>
    <input name="personality" style="width:9em" tabindex="10"
      placeholder="[a-zA-Z\-]+" pattern="[a-zA-Z\-]+"
      maxlength="8" ng-model="personality" required/><br/>
    <span class="help">Please, take
      this <a href="http://www.16personalities.com/">5-minutes test</a>
      to identify your personality profile. They will give you a five-letter
      code, post it here. It won't affect our decision anyhow, we just
      want to know you better.</span>
  </p>
  <p>
    <label>How do we pay you?</label><br/>
    <input name="wallet" style="width:13em" tabindex="11"
      maxlength="100" ng-model="wallet" required/><br/>
    <span style="float:right">
      <img src="/images/wallet/paypal.png" style="width:50px;height:50px;"/>
      <img src="/images/wallet/bitcoin.png" style="width:50px;height:50px;"/>
      <img src="/images/wallet/upwork.png" style="width:50px;height:50px;"/>
    </span>
    <span class="help">There are three options at the moment:
    <a href="http://www.paypal.com">PayPal</a>,
    <a href="http://www.bitcoin.org">Bitcoin</a>,
    or <a href="http://www.upwork.com">Upwork</a>.
    If you want us to pay through PayPal, just give us the email of
    your PayPal account.
    If you prefer Bitcoins, give us the address of your <a href="https://en.bitcoin.it/wiki/Address">BTC address</a>.
    If you want to use Upwork, provide us a link to your Upwork profile.</span>
  </p>
  <p>
    <label>Tell us briefly about yourself</label><br/>
    <textarea name="info" style="width:21em;height:4em" tabindex="12"
      ng-model="info" required></textarea><br/>
    <span class="help">Read <a href="http://www.yegor256.com/2014/10/29/how-much-do-you-cost.html">this article</a>
    and explain briefly why you think you're better than
    others and why we should work with you.
    It would be great if you could solve
    <a href="https://github.com/teamed/quiz">this quiz</a>,
    submit a pull request with your corrections, and post the link
    to it right here.</span>
  </p>
  <p>
    <label>How did you find us?</label><br/>
    <input name="ref" style="width:9em" tabindex="13"
      maxlength="200" ng-model="ref" required/><br/>
    <span class="help">If you have a reference code, post it
      here and the person who gave it to you will receive a bonus
      &mdash; if we hire you :)</span>
  </p>
  <p>
    <button id='submit' tabindex="14">Submit</button>
    via
    <img src="/images/netbout-logo.jpg" alt="netbout"
      style="vertical-align:middle;width:100px;height:22px;"/>
    <br/>
    <span class="help">Right after you click this button, we'll create a new
    conversation in Netbout. One of us will reply to you
    within 24 hours. Keep in mind that we reject over 80 percent of
    applications.</span>
  </p>
</form>

<script src="/js/join.js"></script>
