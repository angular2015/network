(function () {
    'use strict';
    angular.module('networking.login').controller('RegisterCtrl', ['$scope', '$mdToast',
        function ($scope, $mdToast) {
            $scope.user = {
                username: '',
                password: '',
                code: '',
                mobile: '',
                email: ''
            };
            $scope.loginSubmit = function (user) {
                $mdToast.show($mdToast.simple().textContent(user));
            };
        }]);
})();
