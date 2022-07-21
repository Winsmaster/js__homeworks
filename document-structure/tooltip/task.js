let hints = document.querySelectorAll(".has-tooltip")


for (let item of hints) {
   item.onclick = () => {
    if (document.querySelector(".tooltip") !== null) document.querySelector(".tooltip").remove() 
   
    let text = item.title
    let div = document.createElement("div");
    div.classList.add("tooltip");
    
    div.classList.add("tooltip_active");
   

    div.textContent = text;
    div.setAttribute("data-position", "bottom") 
    item.insertAdjacentElement("afterEnd", div)
    

    return false;
   }
   
        
    }
    

