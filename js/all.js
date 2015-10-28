/*globals $:false, window:false, document:false, alert:false */
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
              'email': 'hire@teamed.io',
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
angular.module('teamed', []).controller(
  'Main',
  [
    '$scope',
    function($scope) {
      'use strict';
      $scope.email = function(form) {
        var $form = $(form);
        send_email(
          'site@teamed.io',
          'Form data: ' + $form.serialize(),
          'form submitted',
          function () {
            alert("Thanks, we'll get back to you ASAP!");
          },
          function () {
            alert("There was some problem. Please try again.");
          }
        );
      };
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
