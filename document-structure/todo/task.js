const inputToDo = document.querySelector(".tasks__input")
const taskList = document.querySelector(".tasks__list")
const taskBtn = document.querySelector(".tasks__add")
let removeTask = document.querySelectorAll(".task__remove");


function Add () {
    let text = inputToDo.value;
    console.log(text)
    if (text.length > 0) {
        taskList.innerHTML += `<div class="task">
        <div class="task__title">
          ${text}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`
    
    
        inputToDo.value = ""
        return false
}}

taskBtn.onclick = Add
inputToDo.change = Add



       
 for (let item of removeTask) {
    item.onclick = () => {
    item.closest(".task")
    console.log (item.closest(".task"))
    console.log (removeTask)
 }}