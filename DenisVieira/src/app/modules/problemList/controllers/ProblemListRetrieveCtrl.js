(function() {

	'use strict';

  angular.module('simpledesk.problemList.controllers').controller('ProblemListRetrieveCtrl', ProblemListRetrieveCtrl);

  ProblemListRetrieveCtrl.$inject = ['$scope', '$rootScope', '$location', '$stateParams','APP_SETTINGS'];

  function ProblemListRetrieveCtrl($scope, $rootScope, $location,$stateParams, APP_SETTINGS) {


  	$scope.problemType =  $stateParams.problemType;
  }

}());
