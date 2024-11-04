(function(){
    'use strict';
  
    angular.module('LunchChecker', [])
      .controller('LunchCheckerContainer', LunchCheckerContainer);
  
    LunchCheckerContainer.$inject = ['$scope'];
  
    function LunchCheckerContainer($scope) {
  
      $scope.Text = "";
      $scope.TextChecker = function() {
        if ($scope.Text.trim() === "") {
          $scope.Message = "Please enter data first";
          return;
        }
  
        var TextArray = $scope.Text.split(',');
        var lengthOfTextArray = 0;
  
        for (let i = 0; i < TextArray.length; i++) {
          if (TextArray[i].trim() !== "") {
            lengthOfTextArray += 1;
          }
        }
  
        if (lengthOfTextArray === 0) {
          $scope.Message = "Please enter data first";
        } else if (lengthOfTextArray <= 3) {
          $scope.Message = "Enjoy!";
        } else {
          $scope.Message = "Too much!";
        }
      };
    }
  })();
  