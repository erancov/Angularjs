(function(){


angular.module("myApp")

.directive("myModal", myModal);

function myModal(){
    return{
        restrict:'E',
        scope:true,
        controller:function($scope, dataService){
            var vm = this;
            vm.user = {};
            

            vm.post = function(val){
                dataService.postData(vm.user);
                // $scope.$emit('userData', {user: vm.user});
                vm.user = {};              
                $('.modal').modal('hide');
            }

            
        },
        controllerAs:'vm',
        bindToController: true,
        templateUrl:'app/directives/modal.directive.html'
    }
}
})()