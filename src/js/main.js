(function() {
  var app = angular.module('app', [
    'ui.bootstrap'
  ]);

  app.factory('comunityList', function() {
    var comunityList = [{
      name: 'SPRUG'
    }, {
      name: 'SMART Management'
    }, {
      name: 'DevOps-40'
    }];

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

    $scope.comunityList = comunityList();
    $scope.speechBoxes = timeFrames.map(createSpeechBox);
    $scope.focusComunity = null;

    $scope.onFocusBox = function(box, comunityName) {
      $scope.focusComunity = {
        comunityName: comunityName,
        speechBoxes: $scope.speechBoxes
      };
    };
  });

  $(function() {
    $('[data-toggle="popover"]').popover();
  });
}());
