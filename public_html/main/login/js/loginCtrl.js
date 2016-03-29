(function(){
    'use strict';
   angular.module('networking.login',[]).controller('LoginCtrl',['$scope',function($scope){
           $scope.user={
               username:'',
               password:''
           };
           $scope.loginSubmit=function(user){
               console.log(user);
               $scope.userData=user;
           };
   }]); 
})();
