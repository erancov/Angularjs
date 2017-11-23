angular.module("myApp")

.directive("myTable", myTable);

function myTable(){
    return{
        restrict:'E',
        replace: true,
       	
        templateUrl: 'app/table.directive.html',
        // template: '<div class="sparkline">Table</div>'
    }
}