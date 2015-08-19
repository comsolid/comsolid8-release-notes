'use strict';

/**
 * @ngdoc directive
 * @name comsolidReleaseNotesApp.directive:disableAnimation
 * @description
 * # disableAnimation
 */
angular.module('comsolidReleaseNotesApp')
    .directive('disableAnimation', ['$animate', function ($animate) {
        return {
            restrict: 'A',
            link: function ($scope, $element, $attrs) {
                $attrs.$observe('disableAnimation', function (value) {
                    $animate.enabled(!value, $element);
                });
            }
        };
    }]);
