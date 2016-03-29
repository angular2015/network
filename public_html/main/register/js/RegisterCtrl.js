(function () {
    'use strict';
    angular.module('networking.login').controller('RegisterCtrl', ['$scope', function ($scope) {
            $scope.user = {
                username: '',
                password: '',
                code: '',
                mobile: '',
                email: ''
            };
            $scope.loginSubmit = function (user) {
                console.log(user);
            };
        }]);
})();
