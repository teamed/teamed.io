---
layout: plain
title: "Cost Calculator"
permalink: /calculator.html
description:
  How much does a normal project cost with Teamed.io? This
  calculator will give you a ballpark estimate
keywords:
  - cost of software
  - how much software costs
  - calculate cost of software
  - rough order of magnitude
  - estimate software cost
---

Our [project lifecycle](http://www.yegor256.com/2014/10/06/software-project-lifecycle.html)
consists of four phases. First three of them
can be estimated:

<form name="estimate">
  <table class="tbl">
    <colgroup>
      <col style="width: 7em;"/>
      <col/>
    </colgroup>
    <tbody>
      <tr>
        <td>Thinking</td>
        <td><input style="width:2em" ng-model="thinking" maxlength="3" ng-maxlength="3" ng-pattern="/^[0-9]+$/"
          ng-change="update()" autofocus="autofocus" tabindex="1" name="thinking"/>
          hours
          <span class="oops" ng-show="estimate.thinking.$error.pattern">oops!</span></td>
      </tr>
      <tr>
        <td>Building</td>
        <td><input style="width:2em" ng-model="building" maxlength="3" ng-maxlength="3" ng-pattern="/^[0-9]+$/"
          ng-change="update()" tabindex="2" name="building"/>
          hours
          <span class="oops" ng-show="estimate.building.$error.pattern">oops!</span></td>
      </tr>
      <tr>
        <td>Fixing</td>
        <td><input style="width:4em" ng-model="hoc" maxlength="6" ng-maxlength="6" ng-pattern="/^[0-9]+$/"
          ng-change="update()" tabindex="3" name="hoc"/>
          <a href="http://www.yegor256.com/2014/11/14/hits-of-code.html">hits of code</a>
          <span class="oops" ng-show="estimate.hoc.$error.pattern">oops!</span></td>
      </tr>
    </tbody>
  </table>
</form>

This is an estimate of a total budget:

<style type="text/css">
  .r {
    text-align: right;
  }
  .b {
    font-weight: bold;
  }
  .oops {
    color: red;
  }
  .tbl {
    width: 100%;
    font-size: 0.8em;
    font-family: monospace;
  }
</style>
<table class="tbl">
  <colgroup>
    <col style="width:2em"/>
    <col/>
    <col style="width:6em"/>
  </colgroup>
  <tbody>
    <tr><td></td><th colspan="2">Thinking</th></tr>
    <tr><td>SA</td><td>Analysis (&#x7B;&#x7B; thinking &#x7D;&#x7D; hours, $100/hour)</td><td class="r">&#x7B;&#x7B; dollars(sa) &#x7D;&#x7D;</td></tr>
    <tr><td></td><th colspan="2">Building</th></tr>
    <tr><td>A</td><td>Prototype (&#x7B;&#x7B; building &#x7D;&#x7D; hours, $100/hour)</td><td class="r">&#x7B;&#x7B; dollars(a) &#x7D;&#x7D;</td></tr>
    <tr><td></td><th colspan="2">Fixing</th></tr>
    <tr><td>P</td><td>Paid to programmers</td><td class="r">&#x7B;&#x7B; dollars(p) &#x7D;&#x7D;</td></tr>
    <tr><td>PM</td><td>Management fee ($19 per T/PR)</td><td class="r">&#x7B;&#x7B; dollars(pm) &#x7D;&#x7D;</td></tr>
    <tr><td>TM</td><td>Technical margin (69% of P)</td><td class="r">&#x7B;&#x7B; dollars(tm) &#x7D;&#x7D;</td></tr>
    <tr><td>MF</td><td>Merge fee ($49 per PR)</td><td class="r">&#x7B;&#x7B; dollars(mf) &#x7D;&#x7D;</td></tr>
    <tr><td colspan="2" class="r">Total</td><td class="r b" style="border-top: 1px solid gray;">&#x7B;&#x7B; dollars(p+tm+pm+mf+sa+a) &#x7D;&#x7D;</td></tr>
  </tbody>
</table>

These are some key performance indicators:

<table class="tbl">
  <colgroup>
    <col style="width:2em"/>
    <col/>
    <col style="width:6em"/>
  </colgroup>
  <tbody>
    <tr><td>T</td><td>Tasks completed</td><td class="r">&#x7B;&#x7B; round(t) &#x7D;&#x7D;</td></tr>
    <tr><td>PR</td><td>Pull requests merged</td><td class="r">&#x7B;&#x7B; round(pr) &#x7D;&#x7D;</td></tr>
    <tr><td>H</td><td>Total hours spent</td><td class="r">&#x7B;&#x7B; round(h+thinking+building) &#x7D;&#x7D;</td></tr>
    <tr><td>R</td><td>Avg. hourly rate of a programmer</td><td class="r">&#x7B;&#x7B; dollars(r) &#x7D;&#x7D;</td></tr>
    <tr><td>CT</td><td>Cost per hit-of-code</td><td class="r">&#x7B;&#x7B; dollars((p+tm+pm+mf+sa+a) / hoc, 2) &#x7D;&#x7D;</td></tr>
    <tr><td>CH</td><td>Cost per hour</td><td class="r">&#x7B;&#x7B; dollars((p+tm+pm+mf+sa+a) / (h+building+thinking), 2) &#x7D;&#x7D;</td></tr>
  </tbody>
</table>

<script>
var app = angular.module('teamed', []);
app.config(
  [
    '$locationProvider',
    function($locationProvider) {
      $locationProvider.html5Mode(true);
    }
  ]
);
app.controller(
  'Main',
  [
    '$scope', '$location',
    function($scope, $location) {
      $scope.dollars = function(value, digits) {
        if (!digits) {
          digits = 0;
        }
        var txt;
        if (value == undefined) {
          txt = '?';
        } else {
          txt = '$' + value.toFixed(digits);
        }
        return txt;
      }
      $scope.round = function(value) {
        return Math.round(value);
      }
      $scope.update = function() {
        // if (!$scope.estimate.$valid) {
        //   console.log('invalid input');
        //   return;
        // }
        $scope.sa = $scope.thinking * 100;
        $scope.a = $scope.building * 100;
        $scope.h = $scope.hoc / 100;
        $scope.r = 40;
        if ($scope.hoc > 10000) {
          $scope.r -= 12 / ($scope.hoc / 5000);
        }
        $scope.t = $scope.h * 1.9;
        $scope.pr = $scope.t * 0.75;
        $scope.p = $scope.h * $scope.r;
        $scope.tm = $scope.p * 0.69;
        $scope.pm = 19 * ($scope.t + $scope.pr);
        $scope.mf = 49 * $scope.pr;
      }
      var params = $location.search();
      var coords = '15,80,25000';
      if ('v' in params) {
        if (params['v'].match(/^\d+,\d+,\d+/g)) {
          coords = params['v'];
        } else {
          console.log("can't match coordinates: [" + params['v'] + ']');
        }
      } else {
        console.log('coordinates are absent in the URI');
      }
      var vals = coords.split(',')
      $scope.thinking = parseInt(vals[0]);
      $scope.building = parseInt(vals[1]);
      $scope.hoc = parseInt(vals[2]);
      $scope.update();
    }
  ]
);
</script>

**P**: Each member of the team has its own hourly
rate. We pay them directly and then ask you to reimburse these expenses.
We may also charge a few percents on top of these for PayPal, oDesk, wire
transfer fees we have when trasferring money to programmers.

**PM**: Each project has a project manager who also works
remotely and manages the entire team. His responsibilities include
task tracking, project planning, schedule/budget control,
recruiting/discharging programmers, etc.

**TM**: This is our margin on top of what programmers get. This
is our profit.

**MF**: This money covers all our expenses and investments into
new technologies we develop in [campus](/campus.html), mostly open source.
There are a few important
tools that we use to optimize the development and make this entire
distributed model of work possible, including [rultor](http://www.rultor.com),
[pdd](https://github.com/teamed/pdd),
[qulice](http://www.qulice.com) static analyzer,
set of [jcabi](http://www.jcabi.com) libraries, etc.
Besides that, we pay
for build servers, continuous integration environment, test environments, etc.

