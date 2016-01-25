angular.module('app').service('PassNameService', function() {
  
  var name;
  
  var setName = function(n){
	name = n;
  }

  var getName = function(){
	return name;
  }
	
   return {
    setName: setName,
    getName: getName
  };

});