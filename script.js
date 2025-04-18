let menu = document.querySelector(".menu")
let circle = document.querySelector(".circle")
let body = document.querySelector("body")
let pin= document.querySelector("#pin")
let add= document.querySelector("#add")
let close= document.querySelector("#close")
let taskElement = document.querySelector(".task");
let input = document.querySelector(".input");


circle.addEventListener("mouseover", (e) => {
    menu.style.display = "flex"; // Shows the menu when hovering over the circle
    console.log(e)
    e.stopPropagation()
    
    setTimeout(()=>{
        menu.style.display = "none"; // Shows the menu when hovering over the circle
    
    },2000)

});

pin.addEventListener('click',()=>{
    taskElement.classList.toggle("show-before");
})
let inp_toggle = false;
add.addEventListener('click',()=>{

  if(inp_toggle == false){
  input.classList.add("show-inp")
  console.log("add")
    inp_toggle = true;
  }
    else{
        input.classList.remove("show-inp")
        inp_toggle = false;
        console.log("removed")
    }

 })

 close.addEventListener('click',()=>{ 
    input.classList.remove("show-inp")
    inp_toggle = false;
    console.log("removed")
  })