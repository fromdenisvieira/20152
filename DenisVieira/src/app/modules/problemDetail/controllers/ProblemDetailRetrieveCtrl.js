(function() {

	'use strict';

  angular.module('simpledesk.problemDetail').controller('ProblemDetailRetrieveCtrl', ProblemDetailRetrieveCtrl);

  ProblemDetailRetrieveCtrl.$inject = ['$scope', '$rootScope', '$location', '$stateParams','APP_SETTINGS'];

  function ProblemDetailRetrieveCtrl($scope, $rootScope, $location,$stateParams, APP_SETTINGS) {

	  $scope.showModal = false;
      $scope.toggleModal = function(){
          $scope.showModal = !$scope.showModal;
      };

  	$scope.problemId =  $stateParams.problemId;
  }

}());
