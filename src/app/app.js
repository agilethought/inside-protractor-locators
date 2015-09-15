/**
 * Created by mike on 2/4/2015.
 */
angular.module('inside', [
  'ngAnimate',
  'ngMessages',
  'ui.router',
  'ui.bootstrap',
  'templates-app',
  'inside.controller.home'
])
  .controller('Inside', Inside)
  .config(function($stateProvider, $urlRouterProvider) {
    'use strict';
    $stateProvider.state('default', {
      url: '/',
      abstract: true,
      views: {
        'header': {
          templateUrl: 'layout/header.tpl.html'
        },
        'nav': {
          templateUrl: 'layout/nav.tpl.html'
        },
        'content': {}
      }
    });

    $urlRouterProvider.otherwise('/home');
  }
);

/**
 * @class Controller

 * @constructor
 */
function Inside() {
  'use strict';
  this.welcome = 'Hello';
}
