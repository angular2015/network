(function () {
    'use strict';
    angular.module('networking')
            .factory('graphInit', graphInit)
            .controller('HomeCtrl', ['$rootScope', 'exploreGraph', 'graphInit', '$timeout', '$mdDialog', '$scope', '$state',
                function ($rootScope, exploreGraph, graphInit, $timeout, $mdDialog, $scope, $state) {
                   $scope.treeLevel='';
                    var promise = exploreGraph.data();
                    promise.then(function (data) {
                        console.log(data.data);
                        var graphData = graphInit.init(data.data);
                        console.log(graphData);
                        $timeout(function () {
                            $scope.treeLevel = graphData.treeLevel;
                            console.log($scope.treeLevel);
                            exploreGraph.create(graphData.data[0]);
                        }, 1000);
                    });
                    $rootScope.$on('action', function (ev, data) {
                        console.log(data);
                        if (data.action == 'Add')
                            $scope.showDialog();
                        if (data.action == 'about')
                            $state.go('app.profile',{user:data.node.user_id});
                    })


                    $scope.showDialog = showDialog;

                    function showDialog($event) {
                        var parentEl = angular.element(document.body);
                        $mdDialog.show({
                            parent: parentEl,
                            targetEvent: $event,
                            templateUrl: 'main/home/dialog/addMember.html',
                            locals: {
                                items: $scope.items
                            },
                            controller: DialogController
                        });

                    }
                    function DialogController($scope, $mdDialog, items) {
                        $scope.member = {
                            username: '',
                            mobile: '',
                            email: ''
                        };
                        $scope.createMember = function (member) {
                            console.log(member)
                        };
                        $scope.closeDialog = function () {
                            $mdDialog.hide();
                        }
                    }
                }]);

    function graphInit($localStorage) {
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
            if (data[i].status == 0)
            {
                data[i].viewinfo = viewinfoabout;
            } else
                data[i].viewinfo = viewinfo;

            if (data[i].objectives)
            {

                if (data[i].objectives.length == 2)
                {

                    data[i].viewinfo = viewinfoabout;
                }

                if (data[i].objectives.length)
                {

                    for (var j = 0; j < data[i].objectives.length; j++)
                    {
                        graph.init(data[i].objectives, j);
                    }
                }
            }
            data[i].viewinfo.label = data[i].display_name;
            data[i].viewinfo.hint = data[i].user_name;

            if ($localStorage.treeLevel < data[i].tree_level)
                $localStorage.treeLevel = data[i].tree_level;
          
            var maindata =
                    {
                        data: data,
                        treeLevel: $localStorage.treeLevel
                    };
            return maindata;
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