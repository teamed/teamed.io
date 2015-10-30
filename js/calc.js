/*globals $:false, console:false */
var app = angular.module('teamed', []);
app.config(
  [
    '$locationProvider',
    function($locationProvider) {
      'use strict';
      $locationProvider.html5Mode(true);
    }
  ]
);
app.controller(
  'Main',
  [
    '$scope', '$location',
    function($scope, $location) {
      'use strict';
      $scope.dollars = function(value, digits) {
        if (!digits) {
          digits = 0;
        }
        var txt;
        if (value === undefined) {
          txt = '?';
        } else {
          txt = '$' + value.toFixed(digits);
        }
        return txt;
      };
      $scope.round = function(value) {
        return Math.round(value);
      };
      $scope.update = function() {
        $scope.sa = $scope.thinking * 75;
        $scope.a = $scope.building * 100;
        $scope.h = $scope.hoc / 90;
        $scope.r = 40;
        if ($scope.hoc > 10000) {
          $scope.r -= 12 / ($scope.hoc / 5000);
        }
        $scope.t = $scope.h * 1.3;
        $scope.pr = $scope.t * 0.25;
        $scope.p = $scope.h * $scope.r;
        $scope.tm = $scope.p;
      };
      var params = $location.search(), coords = '15,80,25000', vals;
      if (params.hasOwnProperty('v')) {
        if (params.v.match(/^\d+,\d+,\d+/g)) {
          coords = params.v;
        } else {
          console.log("can't match coordinates: [" + params.v + ']');
        }
      } else {
        console.log('coordinates are absent in the URI');
      }
      vals = coords.split(',');
      $scope.thinking = parseInt(vals[0], 10);
      $scope.building = parseInt(vals[1], 10);
      $scope.hoc = parseInt(vals[2], 10);
      $scope.update();
    }
  ]
);
