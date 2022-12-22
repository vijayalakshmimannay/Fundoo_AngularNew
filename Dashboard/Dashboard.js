// var app=angular.module("FundooApp",[]);
app.component('noteList',{
    templateUrl:"/Notes/addNotes.html",
}).controller("dashboardCtrl",function($scope,$http,$window){
    var token=$window.localStorage.getItem("token");
    let headersConfig = {
        headers:{
            Authorization:"Bearer "+localStorage.getItem("token")
        } 
    }

    $scope.getAllTheNotes=function(){
        $http.get("https://localhost:44327/api/Notes/GetNotes",headersConfig)
    .then((response1)=>{console.log(response1.data);
   $scope.getNotes = response1.data.data;
    //$scope.AllNotesArray = response1.data;
    //console.log(AllNotesArray);
    },(error)=>{ console.log(error)
    })

    }
    //-----Takenote one and two
    var note=this;
    note.toggle=false;
    $scope.showButtons = [0];
    $scope.toggle1 = function() {
      $scope.showButtons = [1];
  };
  $scope.postNote=function(title,note){
      
      var token=$window.localStorage.getItem("token");
      console.log(token);
      
     let headersConfig = {
      headers:{
          Authorization:"Bearer "+localStorage.getItem("token")
      } 
  }
  var data={
        title: title,
        note: note,
        userId:''
      }
      //call the service
      $http.post("https://localhost:44327/api/Notes/Create",JSON.stringify(data), headersConfig)
      .then(function(response){
          console.log(response);
  
          if(response.data){
              $scope.msg="Post Data Submitted";
              $window.alert("Notes Created!");
              $scope.title=response.data.title;
              $scope.note=response.data.note;
          }
      },function(error){
          console.log(error)
      })
  };

  //For Archive
$scope.ToArchive=function(noteID){
    var datanote={
        noteID: noteID
      }
      $scope.noteID=noteID;
      console.log( $scope.noteID);
    $http.put(`https://localhost:44327/api/Notes/Archive?NoteID=${noteID}`,null,headersConfig)
    .then(function(response){
        console.log(response);
       window.location.reload();  
    },function(error){
        console.log(error)
    })
  };
      
//   $scope.openModal = function(noteID,title,note,color,image,isArchive,isPin,isTrash){
//     user={
//       noteID:noteID,
//         title:title,
//         note:note,
//         color:color,
//         image:image,
//         isArchive:isArchive,
//         isPin:isPin,
//         isTrash:isTrash,
//     }
//     $scope.modalInstance = $uibModal.open({
//     ariaLabelledBy: 'modal-title',
//     ariaDescribedBy: 'modal-body',
//     templateUrl: 'window.html',
//     controller :'ModelHandlerController',
//     controllerAs: '$ctrl',
//     size: 'sm',
//     resolve: {
//     user:function(){
//       return user;
//     }
//     }
//     });
   
//     }

    
})

