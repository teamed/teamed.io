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

KLoC: <input id="kloc" name="kloc" value="20" style="width:5em"/>
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
  </colgroup>
  <tbody>
    <tr><td>T</td><td>Completed tasks</td><td class="mm" id="t"></td></tr>
    <tr><td>PR</td><td>Pull requests merged</td><td class="mm" id="pr"></td></tr>
    <tr><td>R</td><td>Average hourly rate</td><td class="mm" id="r"></td></tr>
    <tr><td>P</td><td>Paid to players</td><td class="mm" id="p"></td></tr>
    <tr><td>TM</td><td>Technical margin (69% of P)</td><td class="mm" id="tm"></td></tr>
    <tr><td>PM</td><td>Management fee ($19 per T/PR)</td><td class="mm" id="pm"></td></tr>
    <tr><td>MF</td><td>Merge fee ($49 per PR)</td><td class="mm" id="mf"></td></tr>
    <tr><td></td><td>Total (P+TM+PM+MF) +300%/-60%</td><td class="mm" id="total" style="font-weight:bold"></td></tr>
    <tr><td></td><td>Cost per LoC</td><td class="mm" id="cost"></td></tr>
  </tbody>
</table>

These numbers are very preliminary. For a more precise and
accurate estimate, email us.

<script type="text/javascript">
function dollars(val, fixed) {
  return '$' + val.toFixed(fixed);
}
$(document).ready(
  function() {
    $('#kloc').keyup(
      function () {
        var kloc = $(this).val(), $error = $('#error');
        if ($.isNumeric(kloc) && kloc >= 5 && kloc <= 1000) {
          var loc = kloc * 1000,
            t = Math.round(loc / 40),
            pr = Math.round(t * 0.75),
            r = 30 - 12 * (kloc / 1000),
            p = Math.round((t + pr) * r * 0.5),
            tm = Math.round(0.69 * p),
            pm = 19 * (t + pr),
            mf = 49 * pr,
            total = p + tm + pm + mf;
          $error.hide();
          $('#t').text(t);
          $('#pr').text(pr);
          $('#r').text(dollars(r, 2));
          $('#p').text(dollars(p, 0));
          $('#tm').text(dollars(tm, 0));
          $('#pm').text(dollars(pm, 0));
          $('#mf').text(dollars(mf, 0));
          $('#total').text(dollars(total));
          $('#cost').text(dollars(total / loc, 2));
        } else {
          $error.text('must be an integer, in 5..1000 range').show();
          $('.mm').text('');
        }
      }
    );
  }
);
</script>

