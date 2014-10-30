---
layout: landing
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

This is how much your software will cost if you
hire us to develop it (KLoC means thousands of lines of code).

KLoC: <input id="kloc" name="kloc" value="13" style="width:3em" autofocus="autofocus"/>
<span id="error" style="display:none;color:red;font-size:0.8em"></span>

<style type="text/css">
.mm {
  text-align: right;
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
    <col style="width:4em"/>
    <col style="width:1.5em"/>
  </colgroup>
  <tbody>
    <tr><td>T</td><td>Completed tasks</td><td class="mm" id="t"></td><td></td></tr>
    <tr><td>PR</td><td>Pull requests merged</td><td class="mm" id="pr"></td><td></td></tr>
    <tr><td>H</td><td>Hours spent</td><td class="mm" id="h"></td><td></td></tr>
    <tr><td>R</td><td>Average hourly rate</td><td class="mm" id="r"></td><td></td></tr>
    <tr><td>P</td><td>Paid to programmers</td><td class="mm" id="p"></td><td>(1)</td></tr>
    <tr><td>TM</td><td>Technical margin (69% of P)</td><td class="mm" id="tm"></td><td>(2)</td></tr>
    <tr><td>PM</td><td>Management fee ($19 per T/PR)</td><td class="mm" id="pm"></td><td>(3)</td></tr>
    <tr><td>MF</td><td>Merge fee ($49 per PR)</td><td class="mm" id="mf"></td><td>(4)</td></tr>
    <tr><td></td><td>Total (P+TM+PM+MF)</td><td class="mm" id="total" style="font-weight:bold"></td><td></td></tr>
    <tr><td></td><td>Cost per LoC</td><td class="mm" id="cost"></td><td></td></tr>
    <tr><td></td><td>Cost per hour</td><td class="mm" id="hourly"></td><td></td></tr>
  </tbody>
</table>

These numbers are very preliminary. For a more precise and
accurate estimate, email us.

<script type="text/javascript" src="/js/calc.js"></script>
