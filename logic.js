

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDehVTK8bKydeja68w3D1UaMgoMtJJ73Ck",
    authDomain: "test-5e833.firebaseapp.com",
    databaseURL: "https://test-5e833.firebaseio.com",
    projectId: "test-5e833",
    storageBucket: "test-5e833.appspot.com",
    messagingSenderId: "635088554189"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  console.log(database);


  var name = "";
  var role = "";
  var startDate = "";
  var monthRate = 0;


  $("#submit").on("click", function(event) {

    event.preventDefault();

    name = $("#employeeName").val().trim();
    role = $("#role").val().trim();
    startDate = $("#startDate").val().trim();
    monthRate = $("#monthRate").val().trim();

    console.log(name);

    database.ref().push({
               name: name,
               role: role,
               startDate: startDate,
               monthlyRate: monthRate,
               dateAdded: firebase.database.ServerValue.TIMESTAMP //timestamp data -- timezone -- keeping track of time is tricky and this is doing it for us
             });


  });

  //child-added event listener listenning to nodes 
  database.ref().on("child_added", function(snapshot) {

    console.log(snapshot);

   
  
  });

