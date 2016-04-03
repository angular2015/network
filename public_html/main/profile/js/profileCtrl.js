angular.module('networking')
        .controller('profileCtrl', ['$stateParams', '$scope',
            function ($stateParams, $scope) {
                console.log($stateParams);
                if ($stateParams.user)
                    $scope.notUser = true;
            }]);