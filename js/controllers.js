function CharityController($scope, $http){
  $http.get('data/data.json').success(function(data){
    $scope.charities = data.charities;
    $scope.donation = data.donation;
  });
}
