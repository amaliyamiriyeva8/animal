let main=document.querySelector(".main")

function crud(){
fetch("http://localhost:3000/fav/")
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        main.innerHTML+=`
        <div class="div">
                    <img src=${element.img} alt="">
                   <div class="price">
                    <h2>Price:</h2>
                    <p>$${element.price}</p>
                   </div>
                    <h1> ${element.name}</h1>
                    <p>${element.des}</p>
                    <button onclick="deletebtn(${element.id})">Delete</button>
                </div>
        `
    });
})
}
crud()

function deletebtn(id){
    axios.delete("http://localhost:3000/fav/"+id)
    .then(res=>
        window.location.reload()
    )
}