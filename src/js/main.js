(function() {
  var app = angular.module('app', [
    'ui.bootstrap'
  ]);

  app.factory('comunityList', function() {
    var createComunity = function(comunityName) {
      return {
        name: comunityName
      };
    };

    var comunityList = [
      'SPRUG',
      'SMART Management',
      'DevOps-40',
      'FrontEnd',
      'ClojureSpb',
      'Go',
    ].map(createComunity);

    return function() {
      return comunityList;
    };
  });

  app.controller('MainController', function($scope, comunityList) {
    var createSpeechBox = function(time) {
      return {
        time: time,
        title: '...',
        author: ''
      };
    };

    var timeFrames = [
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00'
    ];

    $scope.timeFrames = timeFrames;
    $scope.focusComunity = null;
    $scope.comunityList = comunityList().map(function(comunity) {
      return {
        name: comunity.name,
        speechBoxes: timeFrames.map(createSpeechBox)
      };
    });

    $scope.onFocusComunity = function(comunity) {
      $scope.focusComunity = comunity;
    };
  });

  $(function() {
    $('[data-toggle="popover"]').popover();
  });
}());
