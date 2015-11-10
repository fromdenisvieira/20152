(function() {

	'use strict';

	angular.module('simpledesk.dashboard.controllers').controller('DashboardRetrieveCtrl', DashboardRetrieveCtrl);

	DashboardRetrieveCtrl.$inject = ['$scope', 'SocialAuthSvc','$rootScope', '$location', 'APP_SETTINGS','$http'];

	function DashboardRetrieveCtrl($scope, SocialAuthSvc,$rootScope, $location, APP_SETTINGS,$http) {

		    SocialAuthSvc.$onAuth(function(authData){
		    	console.log(authData);
			    if(authData === null){
			      console.log("Usuário não autenticado");
					$location.path('login');
			    }
			    else{
			      console.log("Usuário está autenticado");
			      //console.log(authData);
			    }
			    $scope.authData = authData;
				});

				$scope.searchActive = function(){
					if($scope.search === ''){
						return false;
					}else{
						return true;
					}
				}


	    	$scope.carregaJSON = function() {
            $http.get('app/services/problemTypes.json').then(function(resultado){
                $scope.problemTypes = resultado.data;
            });
        }

        $scope.carregaJSON();

        $scope.goDisciplina = function(idPeriodo){
					$location.path('disciplinas/'+idPeriodo);
				}

	}

}());


