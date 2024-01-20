const form = document.querySelector("form")
const name = document.querySelector("#name")
const description = document.querySelector("#description")
const price = document.querySelector("#number")
const image = document.querySelector("#image")
const add_file = document.querySelector("#add-file")
const table = document.querySelector("table")
const p1=document.querySelector("#p1")
const p2=document.querySelector("#p2")
const p3=document.querySelector("#p3")
const p4=document.querySelector("#p4")


fetch("http://localhost:3000/animal/")
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            table.innerHTML += `
        <tr>
        <td>${element.id}</td>
        <td>${element.number}</td>
        <td>${element.name}</td>
        <td>${element.des}</td>
        <td onclick="deletebtn(${element.id})" >Delete</td>
    </tr>
        `
        });
    })

function deletebtn(id) {
    axios.delete("http://localhost:3000/animal/" + id)
        .then(res =>
            window.location.reload()
        )
}

add_file.addEventListener("input", (e) => {
    let file=e.target.files[0]
    if(file){
        let reader=new FileReader()
        reader.readAsDataURL(file)
        reader.onload=()=>{
            image.src=reader.result
            image.style.width="70px"
            image.style.height="70px"
        }
    }
})



form.addEventListener("submit",(e)=>{
  e.preventDefault()
 
  const all=[add_file,price,name,description]
  const pElements=[p1,p2,p3,p4]

  all.forEach((element,index)=>{
    if(element.value){
        pElements[index].style.display="none"
    }
    else{
        pElements[index].style.display="block"
    }
  })


    if(all.every(element=>element.value)){
        axios.post("http://localhost:3000/animal/",{
            img:image.src,
            name:name.value,
            number:price.value,
            des:description.value
            
         } ).then(res=>
            window.location="index.html"
            ) }
        })
    

   
    