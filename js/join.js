/*globals angular:false, window:false */
angular.module('teamed', []).controller(
  'Main',
  [
    '$scope',
    function($scope) {
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
          + '; ref=' + $scope.ref
          + '\n\n' + $scope.info;
        var entry = '@alice interview alias='
          + $scope.netbout
          + '; skills='
          + $scope.skills;
        var url = 'http://www.netbout.com/start?post='
          + encodeURIComponent(text)
          + '&invite=alice&rename='
          + encodeURIComponent($scope.github);
          + '&post=' + encodeURIComponent(entry);
        window.location = url;
      }
    }
  ]
);
