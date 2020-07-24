(function(){

  'use strict';
  angular.module('LunchCheck',[])
  
  .controller('LunchCheckController',LunchCheckController);
  
  LunchCheckController.$inject=['$scope'];
  function LunchCheckController ($scope){
  
  $scope.Fooditems="";
  $scope.message="";
  
  $scope.checkLunchItems=function(){
      if($scope.Fooditems==""){
          $scope.message = "Please enter data first.";
          $scope.noticeType = "danger";
      }
    
      else{
        var Fooditems1=$scope.Fooditems.split(",");
        var fength=Fooditems1.length;
        if ((fength <= 3)||(fength==4 &&Fooditems1[3].trim()=="")){ 
          $scope.message = "Enjoy!!";
          $scope.noticeType = "success";
          console.log(fength)
  
          }
        else{
              $scope.message = "Too Much!";
              $scope.noticeType = "warning";
  
          }
      }
    }
  };
  })();