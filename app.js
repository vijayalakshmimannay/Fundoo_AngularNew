var app=angular.module("FundooApp",['ngRoute','ngStorage']);

app.config(["$routeProvider",function($routeProvider){
    
$routeProvider.
when("/Login",{
    templateUrl:"Login/Login.html",
    controller:"loginCtrl"
}).
when("/Register",{
    templateUrl:"Register/Register.html",
    controller:"registerCtrl"

}).
when("/Dashboard",{
    templateUrl:"DashBoard/Dashboard.html",
    controller:"dashboardCtrl"
}).
otherwise({
redirectTo:"/Login"
});
}]);
// app.controller("fundooappCtrl",function($scope,$http){
//       //-----Takenote one and two
//       var note=this;
//       note.toggle=false;
//       $scope.showButtons = [0];
//       $scope.toggle1 = function() {
//         $scope.showButtons = [1];
//     };
//     $scope.postNote=function(title,note){
        
//         var token=$window.localStorage.getItem("token");
//         console.log(token);
        
//        let headersConfig = {
//         headers:{
//             Authorization:"Bearer "+localStorage.getItem("token")
//         } 
//     }
//     var data={
//           title: title,
//           note: note,
//         }
//         //call the service
//         $http.post("https://localhost:44327/api/Notes/Create",JSON.stringify(data))
//         .then(function(response){
//             console.log(response);
    
//             if(response.data){
//                 $scope.msg="Post Data Submitted";
              
//                 $scope.title=response.data.title;
//                 $scope.note=response.data.note;
//             }
//         },function(error){
//             console.log(error)
//         })
//     };

//    //Login js-------------------------------------------------
//     $scope.login=function(email, password){
//         var data={
//             email:email,
//             password:password
//         }
//        //call the service
//        $http.post("https://localhost:44327/api/User/Login",JSON.stringify(data))
//        .then(function(response){
//            console.log(response);

//            if(response.data){
//                $window.localStorage.setItem('token', response.data.token);
//                /* $localStorage.message=response.data.token; */
//                console.log($localStorage.message);
//                $location.path('/Dashboard');
//                $scope.email=response.data.email;
//                $scope.password=response.data.password;
//            }
//        },function(error){
//            console.log(error)
//        })
//    }; 

//      //Register js-------------------------------------------------
   
//     $scope.postdata=function(firstName,lastName,email, password){
//     var data={
//         firstName:firstName,
//         lastName:lastName,
//         email:email,
//         password:password
//     }
//     //call the service
//     $http.post("https://localhost:44327/api/User/Register",JSON.stringify(data))
//     .then(function(response){
//         console.log(response);
//         if(response.data){
//             $scope.msg="Post Data Submitted";
//             $scope.firstName=response.data.firstName;
//             $scope.lastName=response.data.lastName;
//             $scope.email=response.data.email;
//             $scope.password=response.data.password;
//         }
//     },function(error){
//         console.log(error)
//     })
// }; 
// })


