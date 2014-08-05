var myApp = angular.module("toDoList", []);

myApp.controller("toDoListController", ["$scope", function($scope)
{
	$scope.tasks = [];

	$scope.addTask = function()
	{
		$scope.tasks.push({task: $scope.taskText, completed: false});
	};

	$scope.totalTasks = function()
	{
		return($scope.tasks.length);
	}

	$scope.removeTask = function()
	{
		for(i = 0; i <= $scope.tasks.length; i++)
		{
			if($scope.tasks[i].completed === true)
			{
				$scope.tasks.splice()
			}
		}
	};
}]);