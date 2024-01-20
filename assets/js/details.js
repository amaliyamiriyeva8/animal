let main=document.querySelector(".main")
let id=new URLSearchParams(window.location.search).get("id")
function crud(){
fetch("http://localhost:3000/animal/"+id)
.then(res=>res.json())
.then(element=>{
        main.innerHTML=`
        <div class="div">
                    <img src=${element.img} alt="">
                   <div class="price">
                    <h2>Price:</h2>
                    <p>$${element.price}</p>
                   </div>
                    <h1> ${element.name}</h1>
                    <p>${element.des}</p>
                </div>
        `
    });
}
crud()