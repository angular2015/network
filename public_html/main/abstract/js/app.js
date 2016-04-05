
angular.module('networking', ['ngMaterial', 'ui.router', 'ngStorage', 'networking.login', 'networking.menu']);

angular.module('networking').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/arvm/main');
        $stateProvider
                .state('app', {
                    url: '/arvm',
                    template: '<ui-view></ui-view>',
                    abstract: true,
                    controller: 'AppCtrl'
                })
                .state('app.menu', {
                    url: '/menu',
                    templateUrl: 'main/menu/templates/menu.html',
                    controller: 'MenuCtrl'
                })
                .state('app.login', {
                    url: '/login',
                    templateUrl: 'main/login/templates/login.html',
                    controller: 'LoginCtrl'
                })
                .state('app.register', {
                    url: '/register',
                    templateUrl: 'main/register/templates/register.html',
                    controller: 'RegisterCtrl'
                })
                .state('app.home', {
                    url: '/home',
                    templateUrl: 'main/home/templates/home.html',
                    controller: 'HomeCtrl'
                })
                .state('app.main', {
                    url: '/main',
                    templateUrl: 'main/main_page/templates/main.html',
                    controller: 'mainCtrl'
                })
                .state('app.profile', {
                    url: '/profile/:user',
                    templateUrl: 'main/profile/templates/profile.html',
                    controller: 'profileCtrl'
                }).state('app.contact', {
                    url: '/app/contact',
                    templateUrl: 'main/contact_us/templates/contact_us.html',
                    controller: 'profileCtrl'
                })
        ;

    }]);
angular.module('networking').run(['timeStorage', function (timeStorage) {
        console.log(timeStorage.get('login'));
        console.log('run');
    }]);