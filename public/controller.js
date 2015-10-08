function item1($scope, $http){
	console.log("Hey Peter");

 $http.get('/products').success(function(response){
 	console.log("I got the data i requested");
 	$scope.products = response;
 });

}