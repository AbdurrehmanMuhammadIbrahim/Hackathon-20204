// function addlist(item,price,){
//     var data = document.getElementById("data")
//     var items = document.getElementById("data")
//     // var header = document.createElement("h1")
//     var _itemname = document.createElement("h1")
//     var _image = document.createElement("img")
//     var _price = document.createElement("H3")
   

//     // header.innerHTML=
//     _itemname.innerHTML =  "  "+item;
//     // _image.innerHTML = "image"+"  "+link;
//     _image.src = link;
//      // ImgName = document.getElementById("namebox").value
 
//   _price.innerHTML = "Rs:"+"  "+price +"<hr>";

//   items.appendChild(_itemname)
//   data.appendChild(_image)
//   data.appendChild(_price)


// // }
// function FetchAllData(){
// firebase.database().ref("Admins").on("value",function(snapshot){
//  snapshot.forEach(
//      function(childSnapshot) {
//    var item = childSnapshot.val().itemname;
//   var image = childSnapshot.val().image;  
//       var link = childSnapshot.val().link;

//   var price = childSnapshot.val().price;  

//      addlist(item,image,price, link)          
//  }
//  )
// })
// }
// window.onload(FetchAllData())

function get(){
    
firebase.database().ref("Admins").on("child_added",function(data){
    a=data.val()
console.log(a)
document.getElementById("get").innerHTML+=
`

<div class="card mb-3"  >
  <img class="card-img-top" src="${a.link}" alt="Card image cap" id="imgs">
  <div class="card-body">
    <h5 class="card-title">${a.name}</h5>
    <p class="card-text">${a.city}</p>
    <p class="card-text">${a.country}</p>
    <p class="card-text">${a.email}</p>
    <a href="../user/userhome.html" class="btn btn-primary">VISIT</a>

    
  </div>
</div>
`
})

}
// var uploadTask = firebase.storage().ref("Image/"+imgname+".png").put(image)
get()