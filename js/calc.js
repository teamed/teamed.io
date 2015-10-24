/*globals $:false */
var app = angular.module('teamed', []);
app.config(
  [
    '$locationProvider',
    function($locationProvider) {
      $locationProvider.html5Mode(true);
    }
  ]
);
app.controller(
  'Main',
  [
    '$scope', '$location',
    function($scope, $location) {
      $scope.dollars = function(value, digits) {
        if (!digits) {
          digits = 0;
        }
        var txt;
        if (value == undefined) {
          txt = '?';
        } else {
          txt = '$' + value.toFixed(digits);
        }
        return txt;
      }
      $scope.round = function(value) {
        return Math.round(value);
      }
      $scope.update = function() {
        // if (!$scope.estimate.$valid) {
        //   console.log('invalid input');
        //   return;
        // }
        $scope.sa = $scope.thinking * 100;
        $scope.a = $scope.building * 100;
        $scope.h = $scope.hoc / 210;
        $scope.r = 30;
        if ($scope.hoc > 10000) {
          $scope.r -= 12 / ($scope.hoc / 5000);
        }
        $scope.t = $scope.h * 2.6;
        $scope.pr = $scope.t * 0.45;
        $scope.p = $scope.h * $scope.r;
        $scope.tm = $scope.p * 0.69;
        $scope.pm = 19 * ($scope.t + $scope.pr);
        $scope.mf = 49 * $scope.pr;
      }
      var params = $location.search();
      var coords = '15,80,25000';
      if ('v' in params) {
        if (params['v'].match(/^\d+,\d+,\d+/g)) {
          coords = params['v'];
        } else {
          console.log("can't match coordinates: [" + params['v'] + ']');
        }
      } else {
        console.log('coordinates are absent in the URI');
      }
      var vals = coords.split(',')
      $scope.thinking = parseInt(vals[0]);
      $scope.building = parseInt(vals[1]);
      $scope.hoc = parseInt(vals[2]);
      $scope.update();
    }
  ]
);
