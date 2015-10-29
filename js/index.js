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
          + 'Contact: ' + $scope.details + '\n\n'
          + 'Details:' + $scope.details,
        url = 'http://www.netbout.com/start?post='
          + encodeURIComponent(text)
          + '&invite=yegor256&invite=patrickboyle&rename=new+project';
        window.location = url;
      };
    }
  ]
);
