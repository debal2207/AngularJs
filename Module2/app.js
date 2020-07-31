(function () {
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){

  $scope.checkLunch = function () {

    if ($scope.lunchMenu === undefined || $scope.lunchMenu === "") {
        $scope.colour = "red";
        $scope.result = "Please enter data first";
      }
    else {
      var itemList = $scope.lunchMenu;
      var items = itemList.split(",");
      var count=0;
      var item;
      for(item of items){
        if(item.trim().length != 0)
          count++;
      }
      if (count <=3) {
        $scope.colour = "green";
        $scope.result = "Enjoy!";
      } else {
        $scope.colour = "green";
        $scope.result = "Too much!";
      }
     }

  };
}

})();
