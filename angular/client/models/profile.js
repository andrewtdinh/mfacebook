'use strict';

angular.module('facebook')
.factory('Profile', function($http, nodeUrl){

  function Profile(){
  }

  Profile.update = function(user){
    return $http.put(nodeUrl + '/profile', user);
  };

  Profile.fetch = function(){
    return $http.get(nodeUrl + '/profile');
  };

  return Profile;
});
