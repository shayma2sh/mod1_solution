var app = angular.module('LunchCheck', []);
app.controller('LunchCheckController', function($scope) {
	
    $scope.enjoyOrnot = function(){
    if(!$scope.inputItems){
    	$scope.messege="Please enter data first !!";
    	$scope.invalid_input = {
        "border-color" : "red"
         }
         $scope.error_msg = {
        "color" : "red"
         }
    	return false;
    	
    }
    items =$scope.inputItems.split(',');
    $scope.invalid_input = {
        "border-color" : "green"
         }
         $scope.error_msg = {
        "color" : "green"
         }
    console.log(items);
	if(items.length  < 4 ) {
		$scope.messege = " Enjoy !";
	}

	else{
		$scope.messege = " Too much !";
	}


    }
    

    
});