/*globals angular:false, window:false */
angular.module('teamed', []).controller(
  'Main',
  [
    '$scope',
    function($scope) {
      'use strict';
      $scope.submit = function() {
        var text =
          'I have a project to outsource:\n\n'
          + $scope.details;
        var url = 'http://www.netbout.com/start?post='
          + encodeURIComponent(text)
          + '&invite=yegor256&rename=new+project';
        window.location = url;
      }
    }
  ]
);
