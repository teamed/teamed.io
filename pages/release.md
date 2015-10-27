---
layout: default
title: "PI/RLS"
permalink: /release.html
description:
  This page calculates the bonus for every release in our
  projects
keywords:
  - cost of software
  - how much software costs
  - calculate cost of software
  - rough order of magnitude
  - estimate software cost
---

According to our [policy](/policy.html), project architect gets
a bonus once a new release gets published. This formula explains
how we calculate it:

<form name="estimate">
  <table class="tbl">
    <colgroup>
      <col style="width: 18em;"/>
      <col/>
    </colgroup>
    <tbody>
      <tr>
        <td>Time between releases (<i>t</i>)</td>
        <td><input style="width:4em" ng-model="t" maxlength="3"
          ng-maxlength="3" type="number"
          ng-change="update()" autofocus="autofocus" tabindex="1" name="t"/>
          hours</td>
      </tr>
      <tr>
        <td>Commits (<i>c</i>)</td>
        <td><input style="width:4em" ng-model="c" maxlength="3"
          ng-maxlength="3" type="number"
          ng-change="update()" tabindex="2" name="c"/></td>
      </tr>
      <tr>
        <td>Hits of code (<i>h</i>)</td>
        <td><input style="width:5em" ng-model="h" maxlength="4"
          ng-maxlength="4" type="number"
          ng-change="update()" tabindex="3" name="h"/></td>
      </tr>
    </tbody>
  </table>
</form>

This is how the bonus is calculated:

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
    <tr><td><i>k<sub>1</sub></i></td><td>Minutes to pay per HoC</td><td class="r">&#x7B;&#x7B; k1 &#x7D;&#x7D;</td></tr>
    <tr><td><i>k<sub>2</sub></i></td><td>Minutes to pay per commit</td><td class="r">&#x7B;&#x7B; k2 &#x7D;&#x7D;</td></tr>
    <tr><td><i>k<sub>3</sub></i></td><td>HoC expected per hour</td><td class="r">&#x7B;&#x7B; k3 &#x7D;&#x7D;</td></tr>
    <tr><td><i>k<sub>4</sub></i></td><td>Commits expected per hour</td><td class="r">&#x7B;&#x7B; k4 &#x7D;&#x7D;</td></tr>
    <tr><td><i>e<sub>1</sub></i></td><td><i>c / ( k<sub>4</sub> * t )</i></td><td class="r">&#x7B;&#x7B; e1 &#x7D;&#x7D;</td></tr>
    <tr><td><i>e<sub>2</sub></i></td><td><i>h / ( k<sub>3</sub> * t )</i></td><td class="r">&#x7B;&#x7B; e2 &#x7D;&#x7D;</td></tr>
    <tr><td><i>m</i></td><td><i>( h * k<sub>1</sub> + c * k<sub>1</sub> ) * e<sub>1</sub> * e<sub>2</sub></i></td><td class="r" style="font-weight:bold">&#x7B;&#x7B; m &#x7D;&#x7D;</td></tr>
  </tbody>
</table>

<script>
var app = angular.module('teamed', []);
app.controller(
  'Main',
  [
    '$scope',
    function($scope) {
      $scope.update = function() {
        $scope.k1 = 0.2;
        $scope.k2 = 1.9;
        $scope.k3 = 75;
        $scope.k4 = 1.3;
        $scope.e1 = Math.min(1.0, $scope.c / ($scope.k4 * $scope.t)).toFixed(2);
        $scope.e2 = Math.min(1.0, $scope.h / ($scope.k3 * $scope.t)).toFixed(2);
        $scope.m = (($scope.h * $scope.k1 + $scope.c * $scope.k2) * $scope.e1 * $scope.e2).toFixed(0);
      }
      $scope.c = 132;
      $scope.t = 169;
      $scope.h = 6327;
      $scope.update();
    }
  ]
);
</script>

