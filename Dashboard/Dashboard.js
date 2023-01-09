// var app=angular.module("FundooApp",[]);
app.component('noteList',{
    templateUrl:"/Notes/addNotes.html",
}).controller("dashboardCtrl",function($scope,$http,$window){
    var note = this;
    var noteToTrash = 0;
    $scope.titleName = ["Notes"]
    note.toggle = false;
    $scope.colorArray = ["LightSalmon","Pink","PapayaWhip","Khaki","Lavender","Thistle","GreenYellow","Aquamarine","BlanchedAlmond","Gainsboro","AliceBlue"]
    $scope.showButtons = [0];
    $scope.toggle1 = function () {
        $scope.showButtons = [1];
    };
    $scope.labelView = [0];
    var token=$window.localStorage.getItem("token");
    let headersConfig = {
        headers:{
            Authorization:"Bearer "+localStorage.getItem("token")
        } 
    }
    $scope.pop = [0];
    $scope.popper = function (noteID) {
        console.log($scope.pop);
      noteToTrash = noteID
      if ($scope.pop.includes(0)) {
        $scope.pop = [1];
        console.log($scope.pop);
      }
      else {
        $scope.pop = [0];
      }
      
    };
    $scope.getAllTheNotes=function(){
        $http.get("https://localhost:44327/api/Notes/GetNotes",headersConfig)
    .then((response1)=>{console.log(response1.data);
   $scope.getNotes = response1.data.data;
    //$scope.AllNotesArray = response1.data;
    //console.log(AllNotesArray);
    },(error)=>{ console.log(error)
    })
    
    $http.get("https://localhost:44327/api/Label/GetLabelbyUserId", headersConfig)
    .then( function(response){
        console.log("All The labels.")
        console.log(response.data.data);
        $scope.getAllLabels = response.data.data;
        console.log($scope.getAllLabels);
    }, function(error){
        console.log(error)
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

  $scope.colorPop = [0]
  $scope.colorPopup = function () {
      if ($scope.colorPop.includes(0)) {
          $scope.colorPop = [1];
      }
      else {
          $scope.colorPop = [0]
      }
  };

  $scope.changeColor = function (noteID, color){
      $http.put(`https://localhost:44327/api/Notes/Colour?notesId=${noteID}&colour=${color}`, null, headersConfig)
          .then(function (response) {
              console.log(response)
          }, function (error) {
              console.log(error)
          })
          window.location.reload()
  }
      
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


$scope.refreshWindow = function (){
    window.location.reload();
}
$scope.addLabel = function (noteID) {
    $scope.labelNote = noteID
    if ($scope.labelView.includes(0)) {
        $scope.labelView = [1];
    }
    else {
        $scope.labelView = [0]
    }
}
$scope.setLabel = function (name){
    $http.post(`https://localhost:44327/api/Label/Create?Name=${name}&noteID=${$scope.labelNote}`, null, headersConfig)
    .then(function (response)
    {
      console.log(response.data)
        if (response.data)
        {
          console.log("label res"+response.data);
          $scope.labelView = [0];
          $scope.pop = [0];
         /*  $scope.refreshWindow(); */
        }

    }, function (error){
        console.log(error)
    })
}
})

