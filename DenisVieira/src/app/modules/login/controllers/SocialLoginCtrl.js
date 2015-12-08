
(function() {

	'use strict';

  angular.module('simpledesk.login.controllers').controller('SocialLoginCtrl', SocialLoginCtrl);

  SocialLoginCtrl.$inject = ['$scope','SocialAuthSvc','$rootScope', '$location', 'APP_SETTINGS'];


  function SocialLoginCtrl($scope, SocialAuthSvc, $rootScope, $location, APP_SETTINGS) {


  		$scope.socialLogin = function(authMethod){

  		    SocialAuthSvc.$authWithOAuthRedirect(authMethod).then(function(authData){

  		    }).catch(function(error){
  		      if(error.code === 'TRANSPORT_UNAVAILABLE'){

  		        SocialAuthSvc.$authWithOAuthPopup(authMethod).then(function(authData){

  		        })

  		      }else{
  		        console.log(error);
  		      }

  		    })
  	  	}

      var ref = new Firebase(APP_SETTINGS.API_URL);

      $scope.doFacebookLogin = function(){
          ref.authWithOAuthPopup("facebook", function(error, authData) {
              if (error) {
                  console.log("Falha no login!!", error);
              }else{
                  $rootScope.user = {
                      name: authData.facebook.displayName,
                      email: authData.facebook.email,
                      image: authData.facebook.profileImageURL
                  };
                  $location.path('/');
                  $scope.$apply();
              }
          }, {
              scope: "email"
          });
      }

  }

}());



