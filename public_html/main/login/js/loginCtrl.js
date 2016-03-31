(function () {
    'use strict';
    angular.module('networking.login', []).controller('LoginCtrl', ['$scope', 'ajaxRequest', function ($scope, ajaxRequest) {
            $scope.user = {
                username: '',
                password: ''
            };
            $scope.loginSubmit = function (user) {
                console.log(user);
                var api = 'api/login.php';

                console.log(user);
                var promise = ajaxRequest.send(api, user);
                promise.then(function (data) {
                    console.log(data)
                });
                $scope.userData = user;
            };
        }]);
})();
