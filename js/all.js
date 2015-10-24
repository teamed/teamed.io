/*globals $:false, window:false, document:false */
function valid_email(email) {
  'use strict';
  var re = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function send_email(from, text, subject, success, error) {
  'use strict';
  $.ajax(
    {
      type: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: {
        'key': 'GMfq6HmqFFR4HGCVfIu6Zw',
        'message': {
          'from_email': from,
          'to': [
            {
              'email': 'sales@teamed.io',
              'name': 'Yegor Bugayenko',
              'type': 'to'
            }
          ],
          'text': 'Hi,\n\n' + text
            + '\n\nEmail: ' + from
            + '\n\nThanks'
            + '\n\n--\nsent through the form at www.teamed.io',
          'subject': subject,
          'auto_html': true,
          'important': true
        }
      },
      success: success,
      error: error
    }
  );
}
$(
  function() {
    'use strict';
    $('#send').click(
      function (event) {
        var $this = $(this), $error = $('#error'), email = $('#email').val();
        if (!email) {
          $error.text('No email... What do you mean?');
        } else if (!valid_email(email)) {
          $error.text('Email address doesn\'t look correct');
        } else {
          $error.text('');
          $this.attr('disabled', 'disabled');
          $this.html('Please, wait...');
          event.preventDefault();
          send_email(
            email,
            'I\'m interested in more information.\n\n',
            'I am interested in teamed.io',
            function () {
              window.location = '/sent.html';
            },
            function () {
              $this.attr('disabled', '');
              $this.html('Oops :( Try again...');
            }
          );
        }
      }
    );
  }
);

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-1963507-34']);
_gaq.push(['_trackPageview']);
(function() {
  'use strict';
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
