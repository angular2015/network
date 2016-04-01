(function () {
    'use strict';
    angular.module('networking.menu', []).controller('MenuCtrl', ['$scope', 'timeStorage','$state',
        function ($scope, timeStorage,$state) {
            $scope.userData = [];
            if (timeStorage.get('login')) {
                $scope.login = true;
            }
            console.log('$scope.userData');
            $scope.logout = function () {
                timeStorage.remove('login');
                $state.go('app.main');
                $scope.login = false;
            }
        }]);
})();
