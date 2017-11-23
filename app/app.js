angular.module("myApp", []).controller("MainController",[function(){
    var vm = this;

    vm.name = '';

    vm.show = function(){
        console.log(vm.name)
    }
}])