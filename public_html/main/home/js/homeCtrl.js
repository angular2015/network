(function () {
    'use strict';
    angular.module('networking').controller('HomeCtrl', ['exploreGraph', function (exploreGraph) {
            var promise = exploreGraph.data();
            promise.then(function (data) {
                console.log(data.data);
                 exploreGraph.create(data.data);
            })
           
        }]);
})();
