(function () {
    'use strict';
    angular.module('networking')
            .factory('graphInit', graphInit)
            .controller('HomeCtrl', ['$rootScope','exploreGraph', 'graphInit', '$timeout', '$mdDialog', '$scope',
                function ($rootScope,exploreGraph, graphInit, $timeout, $mdDialog, $scope) {
                    var promise = exploreGraph.data();
                    promise.then(function (data) {
                        console.log(data.data);
                        var graphData = graphInit.init(data.data);
                        console.log(graphData);
                        $timeout(function () {
                            exploreGraph.create(graphData[0]);
                        }, 1000);
                    });
                      $rootScope.$on('action',function(ev,data){
                            console.log(data);
                             $scope.showDialog();
                      })
                    
                    
   $scope.showDialog = showDialog;
  $scope.items = [1, 2, 3];
                    function showDialog($event) {
                        var parentEl = angular.element(document.body);
                        $mdDialog.show({
                            parent: parentEl,
                            targetEvent: $event,
                            template:
                                    '<md-dialog aria-label="List dialog">' +
                                    '  <md-dialog-content>' +
                                    '    <md-list>' +
                                    '      <md-list-item ng-repeat="item in items">' +
                                    '       <p>Number {{item}}</p>' +
                                    '      </md-item>' +
                                    '    </md-list>' +
                                    '  </md-dialog-content>' +
                                    '  <md-dialog-actions>' +
                                    '    <md-button ng-click="closeDialog()" class="md-primary">' +
                                    '      Close Dialog' +
                                    '    </md-button>' +
                                    '  </md-dialog-actions>' +
                                    '</md-dialog>',
                            locals: {
                                items: $scope.items
                            },
                            controller: DialogController
                        });

                    }
                    function DialogController($scope, $mdDialog, items) {
                        $scope.items = items;
                        $scope.closeDialog = function () {
                            $mdDialog.hide();
                        }
                    }
                }]);

    function graphInit() {
        var graph = {};
        graph.init = function (data, i) {
            var viewinfo = {
                "color": "#26334b",
                "label": "",
                "hint": "",
                "shape": "square",
                "actions": [
                    {
                        "id": "Add",
                        "name": "Add Member"
                    },
                    {
                        "id": "about",
                        "name": "about"
                    }
                ]
            };
            var viewinfoabout = {
                "color": "#26334b",
                "label": "",
                "hint": "",
                "shape": "square",
                "actions": [
                    {
                        "id": "about",
                        "name": "about"
                    }
                ]
            };
            if (!i)
                i = 0;
            data[i].viewinfo = viewinfo;
            console.log(i, data[i].display_name);
            if (data[i].objectives)
            {

                if (data[i].objectives.length == 2)
                {

                    data[i].viewinfo = viewinfoabout;
                }
                if (data[i].objectives.length)
                {

                    for (var j = 0; j < data[i].objectives.length; j++)
                        graph.init(data[i].objectives, j);
                }
            }
            data[i].viewinfo.label = data[i].display_name;
            data[i].viewinfo.hint = data[i].user_name;
            return data;
        };
        return graph;
    }
    ;
})();
// "viewinfo": {
//                                "color": "#26334b",
//                                "label": "shashank",
//                                "hint": "shashank dixit",
//                                "shape": "square",
//                                "actions": [
//                                    {
//                                        "id": "Add Member",
//                                        "name": "Add Member"
//                                    }
//                                ]
//                            }