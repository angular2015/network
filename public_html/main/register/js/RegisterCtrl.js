(function () {
    'use strict';
    angular.module('networking.login').controller('RegisterCtrl', ['$scope', '$mdToast','ajaxRequest',
        function ($scope, $mdToast,ajaxRequest) {
            $scope.user = {
                username: '',
                password: '',
                code: '',
                mobile: '',
                email: ''
            };
            $scope.loginSubmit = function (user) {
//                $mdToast.show($mdToast.simple().textContent(user));
              
                    var api = 'api/registration.php';
                   
                    console.log(user);
                    var promise = ajaxRequest.send(api, user);
                    promise.then(function (data) {
                        console.log(data)
                    });


            };
        }]);
})();
