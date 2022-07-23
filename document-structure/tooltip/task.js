let hints = document.querySelectorAll(".has-tooltip")


for (let item of hints) {
   item.onclick = () => {
    if (document.querySelector(".tooltip") !== null) document.querySelector(".tooltip").remove() 
   const position = item.getBoundingClientRect();
    let text = item.title
    let div = document.createElement("div");
    div.classList.add("tooltip");    
    div.classList.add("tooltip_active");
   

    div.textContent = text;
    div.setAttribute("data-position", "bottom")
    div.setAttribute("style", `left: ${position.left}px; top: ${position.top + 20}px;`)
    item.insertAdjacentElement("afterEnd", div)
    

    return false;
   }
   
        
    }
    

