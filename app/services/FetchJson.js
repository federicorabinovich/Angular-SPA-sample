angular.module('app').service('FetchJson', ['$http', function($http){
  
  return $http.get('app/data/studentsGrades.json').success(function(data){
    return data;
  }).error(function(err){
    return err;
  });

}]);