let main=document.querySelector(".main")
let fav=document.querySelector("#fav")
let sort=document.querySelector("#sort")
let search=document.querySelector("#search")
let firstArr=[]
let secondArr=[]


function crud(){
fetch("http://localhost:3000/animal/")
.then(res=>res.json())
.then(data=>{
    secondArr=data
    firstArr=firstArr.length || search.value ? firstArr :data
    main.innerHTML=""
    axios.get("http://localhost:3000/fav")
    .then(fav=>{
        firstArr.forEach(element => {
            if(fav.data.find(favEl=>favEl.id===element.id)){
                main.innerHTML+=`
                <div class="div">
                            <img src=${element.img} alt="">
                            <i class="bi bi-heart-fill" style="color: red;" onclick="deleteFav(${element.id})"  ></i>
                           <div class="price">
                            <h2>Price:</h2>
                            <p>$${element.number}</p>
                           </div>
                            <h1> ${element.name}</h1>
                            <p>${element.des}</p>
                            <button onclick="details(${element.id})">Details</button>
                        </div>
                `
            }
            else{
                main.innerHTML+=`
                <div class="div">
                            <img src=${element.img} alt="">
                            <i class="bi bi-heart" onclick="addfav(${element.id})"></i>
                           <div class="price">
                            <h2>Price:</h2>
                            <p>$${element.number}</p>
                           </div>
                            <h1> ${element.name}</h1>
                            <p>${element.des}</p>
                            <button onclick="details(${element.id})">Details</button>
                        </div>
                ` 
            }
           
        });
    })
   
})
}
crud()

function details(id){
    window.location=`./details.html?id=${id}`
}

fav.addEventListener("click",()=>{
    window.location=`./fav.html`
})

let add=document.querySelector("#add")


add.addEventListener("click",()=>{
    window.location=`./add.html`
})

function deleteFav(id){
    axios.delete("http://localhost:3000/fav/"+id)
    .then(res=>
        window.location.reload()
    )
}

function addfav(id){
    fetch("http://localhost:3000/animal/"+id)
    .then(res=>res.json())
    .then(data=>{
        axios.post("http://localhost:3000/fav/",data)
    })
}

sort.addEventListener("change",(e)=>{
    if(e.target.value==="as"){
     firstArr.sort((a,b)=>a.number-b.number)
    }
    else if (e.target.value==="des"){
     firstArr.sort((a,b)=>b.number-a.number)
    }
    else{
     firstArr=[]
    }
 crud()
 })

 search.addEventListener("input",(e)=>{
    firstArr=secondArr
    firstArr=firstArr.filter((element)=>
    element.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    )
    crud()
 }
 )

 let navlist=document.querySelector(".navlist")
 let nav=document.querySelector("nav")
 let list=document.querySelector("#list")

 window.addEventListener("scroll",()=>{
    if(window.scrollY>200){
        nav.style.backgroundColor="rgb(83, 201, 187)"
        nav.style.transition="all 0.5s ease"
        nav.style.position="fixed"
        nav.style.zIndex=1000
      
    }
    else{
        nav.style.backgroundColor=""
        nav.style.transition="all 0.7s ease"
        nav.style.position=""
       
    }
 })

 list.addEventListener("click",()=>{
    if(navlist.style.display!=="block"){
        navlist.style.display="block"
    }
    else{
        navlist.style.display="none"
    }
 })