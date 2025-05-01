let menu = document.querySelector(".menu")
let circle = document.querySelector(".circle")
let body = document.querySelector("body")
let pin= document.querySelector("#pin")
let add= document.querySelector("#add")
let close= document.querySelector("#close")
let taskElement = document.querySelector(".task");
let input = document.querySelector(".input");
let addTaskBtn = document.querySelector(".add-task-btn");
let inp = document.querySelector(".inp");
let tasksDiv = document.querySelector(".tasks");


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
  // console.log(tasks)
  addTaskBtn.addEventListener('click',()=>{
    if(inp.value !== "") {
      addTask()
      inp.value = ""; // Clear the input field after adding the task
    }
     else{
      inp.placeholder = "Task cannot be empty!";
      inp.style.border = "2.5px solid red"; // Change border color to red
      setTimeout(() => {
          inp.placeholder = "Enter your task here"; // Reset to default placeholder
          inp.style.border = "1px solid #EE82EE"; // Reset border color to default
        }, 2000); // Clear the message after 2 seconds 
     }
  let tasks=" "
  console.log("clicked")
  let val= inp.value
   
                    
})

inp.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
  if(inp.value !== "") {
    addTask()
    inp.value = ""; // Clear the input field after adding the task
  }
   else{
    inp.placeholder = "Task cannot be empty!";
    inp.style.border = "1px solid red"; // Change border color to red
    setTimeout(() => {
        inp.placeholder = "Enter your task here"; // Reset to default placeholder
        inp.style.border = "1px solid #EE82EE"; // Reset border color to default
      }, 2000); // Clear the message after 2 seconds 
   }

  }
  });

function addTask(){
  let tasks=" "
  console.log("clicked")
  let val= inp.value
    tasks=` <div class="task">
                        <div class="left">
                     <p>  ${val}.</p>
                        </div>
                        <div class="right">
                          <div class="sub-right1">
                            <p> 8PM 24AUG 2024</p>
                          <p>Pending</p>
                          </div>
                          <div class="sub-right2">
                            <img src="asset/icons/circle.svg " class="circle" alt="">
                          </div>
                        </div>
                        <div class="menu">
                            <span>Edit</span>
                            <span id="pin">Pin</span>
                            <span>Delete</span>
                        </div>
                    </div>` + tasks;
                       console.log(tasks)
                    tasksDiv.innerHTML += tasks
  
}