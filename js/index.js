/*globals angular:false, window:false, email:false */
angular.module('teamed', []).controller(
  'Main',
  [
    '$scope',
    function($scope) {
      'use strict';
      $scope.submit = function(form) {
        email(form, 'patrick@teamed.io');
        var text =
          'I have a project to outsource:\n\n'
          + 'Contact: ' + $scope.contact + '\n\n'
          + 'Details: ' + $scope.details,
        entry = '@patrickboyle please help us to estimate this+project',
        url = 'http://www.netbout.com/start?'
          + 'rename=Estimate+for+New+Teamed+Project'
          + '&invite=yegor256'
          + '&invite=patrickboyle'
          + '&post=' + encodeURIComponent(text)
          + '&post=' + encodeURIComponent(entry);
        window.location = url;
      };
    }
  ]
);
