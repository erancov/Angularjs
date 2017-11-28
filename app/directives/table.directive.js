(function(){
    angular.module("myApp")

.directive("myTable", myTable);

function myTable(){
    return{
        restrict:'E',
        scope:true,
        controller:function($scope, dataService){
            var vm = this;

             
            vm.refresh = function(){
                vm.users = dataService.users;
                // $.toast({
                //     heading: 'Information',
                //     text: 'Loaders are enabled by default. Use `loader`, `loaderBg` to change the default behavior',
                //     icon: 'info',
                //     loader: true,        // Change it to false to disable loader
                //     loaderBg: '#9EC600'  // To change the background
                // })       
            }
            vm.refresh();

            $scope.$on("refreshData", function(){
                vm.refresh();
                
            });

            vm.delete = function(user){
                dataService.delete(user);
            }

            

        },
        controllerAs:'vm',
        bindToController: true,
        templateUrl: 'app/directives/table.directive.html',
    }
}
})()
