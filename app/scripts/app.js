'use strict';

/**
 * @ngdoc overview
 * @name comsolidReleaseNotesApp
 * @description
 * # comsolidReleaseNotesApp
 *
 * Main module of the application.
 */
angular
    .module('comsolidReleaseNotesApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/interface', {
                templateUrl: 'views/interface.html',
                controller: 'InterfaceCtrl'
            })
            .when('/multimidia', {
                templateUrl: 'views/multimidia.html',
                controller: 'PagesCtrl'
            })
            .when('/jogos', {
                templateUrl: 'views/jogos.html',
                controller: 'JogosCtrl'
            })
            .when('/escritorio', {
                templateUrl: 'views/escritorio.html',
                controller: 'PagesCtrl'
            })
            .when('/diversos', {
                templateUrl: 'views/diversos.html',
                controller: 'PagesCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
    .run(['$rootScope', '$location', function($rootScope, $location) {
        $rootScope.showCarousel = function () {
            return ($location.path() === '/');
        };

        $rootScope.encontro = 'COMSOLiD 8';
    }]);
