(function() {

    'use strict';

    angular.module('simpledesk.problemList.controllers',[]);
    // angular.module('simpledesk.problemList.services',[]);
    // angular.module('simpledesk.problemList.filters',[]);
    // angular.module('simpledesk.problemList.directives',[]);

    angular.module('simpledesk.problemList', [
      'ui.router',
      'simpledesk.problemList.controllers'
      //'simpledesk.problemList.services',
      // 'simpledesk.problemList.filters',
      // 'simpledesk.problemList.directives',

    ])

    .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

      var modulePath = 'app/modules/problemList/view/';

      $stateProvider
        .state('problemList', {
          url: '/problemList/:problemType',
          templateUrl: modulePath+'index.html',
          controller: 'ProblemListRetrieveCtrl'
        });


    }]);



}());