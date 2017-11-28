angular.module("myApp")

.factory("dataService", dataService);

function dataService($rootScope){
    var factory = {}

    var users = [
        {id:"1", name:"Mark Otto", age:35, role:"Manager"},
        {id:"2", name:"Jacob Thornton", age:40, role:"Admin"},
        {id:"3", name:"Larry Bird", age:25, role:"Employee"}
    ];

    factory.delete = function(user){
       var index = users.map(function(obj) {
            return obj.id;
        }).indexOf(user.id);
        users.splice(index, 1)
    }

    factory.postData = function(data){

        try {
             if(users.length > 0){
                var arr = users[users.length -1];
                var newId = arr.id;
                data.id = ++newId;       
            }else{
                data.id = 1;
            }
            
            if (data != undefined || data != null){    
                if ($.inArray(data, users) < 0) {
                    
                    users.push(data); 
                    $.toast({
                        heading: 'Success',
                        text: 'User was created!',
                        showHideTransition: 'slide',
                        icon: 'success'
                    })
                }              
            }
            
        } catch (error) {
            $.toast({
                heading: 'Error',
                text: 'Try again!' + error,
                showHideTransition: 'fade',
                icon: 'error'
            })
            
        }
       
        factory.getData();
    }

     factory.users = users;

    factory.getData = function(){
        $rootScope.$broadcast('refreshData');
    }

    return factory;
}