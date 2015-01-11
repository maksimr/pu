(function() {
  var app = angular.module('app', []);

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

    $scope.onFocusBox = function(box, comunityName) {
      console.log('Box:', comunityName, box);
    };
  });

  $(function() {
    $('[data-toggle="popover"]').popover();
  });
}());
