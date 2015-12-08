(function() {

  angular.module('simpledesk', [

    // App Components

    // App Modules
    'simpledesk.login'
    , 'simpledesk.dashboard'
    , 'simpledesk.register'
    , 'simpledesk.problemList'
    , 'simpledesk.problemDetail'

    // External Dependencies
    , 'firebase'
    , 'ngAnimate'
    , 'ui.router'
  ])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

  }]);



}());
