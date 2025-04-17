let menu = document.querySelector(".menu")
let circle = document.querySelector(".circle")
let body = document.querySelector("body")
let pin= document.querySelector("#pin")
let taskElement = document.querySelector(".task");


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

