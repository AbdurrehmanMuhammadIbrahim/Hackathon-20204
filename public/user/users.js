let signup=()=>{
    var email= document.getElementById("email").value
  var password= document.getElementById("pass").value
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((data) => {
      console.log(data)
    // Signed in 
    // var user = userCredential.user;
    // ...
    // alert(data)
    window.location.href="../resturant/restturants.html"
  })
  .catch((error) => {
    // var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });


    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var pass = document.getElementById("pass").value
    var country = document.getElementById("country").value
    var city = document.getElementById("city").value
    var users ={
        name : name,
        email :email,
        password :pass,
        country : country,
        city : city,
   
  
    }
    firebase.database().ref('users').push(users)
   
}

let signin=()=>{
    var email= document.getElementById("email").value
    var password= document.getElementById("pass").value
    firebase.auth().signInWithEmailAndPassword(email, password) 
     .then((data) => {
    // Signed in 
    // var user = userCredential.user;
    // ...
    console.log(data)
    window.location.href="../resturant/restturants.html"
  })
  .catch((error) => {
    // var errorCode = error.code;
    var errorMessage = error.message;
console.log(errorMessage)
alert(errorMessage)
    
  });
}




function data(){
    
  firebase.database().ref("data").on("child_added",function(data){
      a=data.val()
  console.log(a)
  document.getElementById("data").innerHTML+=
  `
  
  <div class="card mb-3"  >
    <img class="card-img-top" src="${a.link}" alt="Card image cap" id="imgss">
    <div class="card-body">
      <h5 class="card-title">${a.itemname}</h5>
      <p class="card-text">${a.price}</p>
      <p class="card-text">${a.delivery}</p> 
      <a class="btn btn-primary">Order Now</a>
  

    </div>
  </div><hr class="new1">
  `
  })
  
  }
  // var uploadTask = firebase.storage().ref("Image/"+imgname+".png").put(image)
  data()
