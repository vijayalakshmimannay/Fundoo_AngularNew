// var app=angular.module("FundooApp",[]);
app.controller("loginCtrl",function($scope,$http,$window,$location){
    $scope.email=null;
    $scope.password=null;

    $scope.login=function(email, password){
        var data={
            email:email,
            password:password
        }
        //call the service
        $http.post("https://localhost:44327/api/User/Login",JSON.stringify(data))
        .then(function(response){
            console.log(response);

            if(response.data){

                // $localStorage.message = response.data.data;
                $window.localStorage.setItem('token', response.data.data);
                // console.log($localStorage.message);
                $location.path('/Dashboard');
                $scope.email=response.data.email;
                $scope.password=response.data.password;
            }
        },function(error){
            console.log(error)
        })
    };
})