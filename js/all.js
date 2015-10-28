/*globals $:false, window:false, document:false, alert:false */
function send_email(to, text, success, error) {
  'use strict';
  $.ajax(
    {
      type: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: {
        'key': 'GMfq6HmqFFR4HGCVfIu6Zw',
        'message': {
          'from_email': 'site@teamed.io',
          'to': [
            {
              'email': to,
              'type': 'to'
            },
            {
              'email': 'yegor@teamed.io',
              'name': 'Yegor Bugayenko',
              'type': 'cc'
            }
          ],
          'text': 'Hi,\n\n' + text
            + '\n\nThanks'
            + '\n\n--\nsent through the form at www.teamed.io',
          'subject': 'new form submitted',
          'auto_html': false,
          'important': true
        }
      },
      success: success,
      error: error
    }
  );
}
var email = function(form, email) {
  'use strict';
  var $form = $(form),
    $button = $form.find('button'),
    before = $form.text();
  $button.prop('disabled', true).text('processing...');
  email = typeof email !== 'undefined' ? email : 'hire@teamed.io';
  send_email(
    email,
    $form.serialize(),
    function () {
      $button.text('thanks!');
    },
    function () {
      $button.prop('disabled', false).text(before);
    }
  );
};
angular.module('teamed', []).controller(
  'Main',
  [
    '$scope',
    function($scope) {
      'use strict';
      $scope.email = email;
    }
  ]
);

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-1963507-34']);
_gaq.push(['_trackPageview']);
var ga = document.createElement('script'),
  s = document.getElementsByTagName('script')[0];
ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
s.parentNode.insertBefore(ga, s);
