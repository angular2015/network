(function () {
    'use strict';
    angular.module('networking.login', []).controller('contactCtrl', ['$scope', 'ajaxRequest', '$state', 'timeStorage',
        function ($scope, ajaxRequest, $state, timeStorage) {
            $scope.user = {
                username: '',
                mobile: ''
            };
            $scope.Submit = function (user) {
                console.log(user);
                var api = 'api/contact.php';
                var promise = ajaxRequest.send(api, user);
                promise.then(function (data) {
                    console.log(data)

                });


            };
        }]);
})();
