/*globals angular:false, window:false */
angular.module('teamed', []).controller(
  'Main',
  [
    '$scope',
    function($scope) {
      'use strict';
      $scope.submit = function() {
        var text =
          'I would like to join you\n\n'
          + 'name=' + $scope.name
          + '; bout=here'
          + '; rate=$' + $scope.rate + '/hr'
          + '; roles=DEV,IMP'
          + '; skills=' + $scope.skills
          + '; phone=' + $scope.phone
          + '; country=' + $scope.country
          + '; address=' + $scope.address
          + '; email=' + $scope.email
          + '; github=' + $scope.github
          + '; netbout=' + $scope.netbout
          + '; wallet=' + $scope.wallet
          + '; personality=' + $scope.personality
          + '; ref=' + $scope.ref
          + '\n\n' + $scope.info,
        entry = '@alice interview alias='
          + $scope.netbout
          + '; skills='
          + $scope.skills,
        url = 'http://www.netbout.com/start?post='
          + encodeURIComponent(text)
          + '&invite=alice&rename='
          + encodeURIComponent($scope.github)
          + '&post=' + encodeURIComponent(entry);
        window.location = url;
      };
    }
  ]
);
