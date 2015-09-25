function dollars(val, fixed) {
  return '$' + val.toFixed(fixed);
}
$(document).ready(
  function() {
    $('#kloc').keyup(
      function () {
        var kloc = $(this).val(), $error = $('#error');
        if ($.isNumeric(kloc) && kloc >= 5 && kloc <= 200) {
          var loc = kloc * 1000,
            t = Math.round(loc / 40),
            pr = Math.round(t * 0.75),
            h = Math.round(t * 0.5 + pr * 0.75),
            r = 40 - 12 * (kloc / 200),
            p = Math.round((t + pr) * r * 0.5),
            tm = Math.round(0.69 * p),
            pm = 19 * (t + pr),
            mf = 49 * pr,
            total = p + tm + pm + mf;
          $error.hide();
          $('#t').text(t);
          $('#pr').text(pr);
          $('#h').text(h);
          $('#r').text(dollars(r, 2));
          $('#p').text(dollars(p, 0));
          $('#tm').text(dollars(tm, 0));
          $('#pm').text(dollars(pm, 0));
          $('#mf').text(dollars(mf, 0));
          $('#total').text(dollars(total));
          $('#cost').text(dollars(total / loc, 2));
          $('#hourly').text(dollars(total / h, 0));
        } else {
          $error.text('must be an integer, in 5..200 range').show();
          $('.mm').text('');
        }
      }
    ).keyup();
  }
);
