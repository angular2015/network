(function () {
    'use strict';
    angular.module('networking').controller('mainCtrl', ['$scope','$interval', function ($scope,$interval) {
            console.log('main scope');
            $scope.galleryData = [
                'img/a.png',
                'img/b.png',
                'img/c.png'
            ];
            $scope.selected = $scope.galleryData[0];
            var IMG_WIDTH = 801;
            $scope.scrollTo = function (image, ind) {
                $scope.listPosition = {left: (IMG_WIDTH * ind * -1) + "px"};
                $scope.selected = image;

            }
            var i = 0;
            var autoSlide = function () {
                $scope.scrollTo($scope.galleryData[i], i);
                if (i + 1 == $scope.galleryData.length) {
                    i = 0;
                } else {
                    i++;

                }
            };
            var autoSlideInterval = $interval(autoSlide, 2000);

            $scope.startAutoSlide = function () {
                autoSlideInterval = $interval(autoSlide, 5000);
            }



            $scope.stopAutoSlide = function () {
                $interval.cancel(autoSlideInterval);
            }


        }]);
})();
