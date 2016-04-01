(function () {
    'use strict';
    angular.module('networking.login', []).controller('LoginCtrl', ['$scope', 'ajaxRequest', '$state', 'timeStorage',
        function ($scope, ajaxRequest, $state, timeStorage) {
            $scope.user = {
                username: '',
                password: ''
            };
            $scope.loginSubmit = function (user) {
                console.log(user);
                $state.go('app.main')
                timeStorage.set('login', 'hello', 24);
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
