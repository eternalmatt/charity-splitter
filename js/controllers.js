function CharityController($scope, $http){
  $http.get('json/data.json').success(function(data){
    $scope.charities = data;
  });
}
