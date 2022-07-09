let holes = document.querySelectorAll(".hole") 
let dead = document.getElementById("dead") 
let lost = document.getElementById("lost") 
 
console.log(holes)
 
    for (const hole of holes){ 
        hole.onclick = function() { 
                
        hole.classList.contains("hole_has-mole") ? 
        dead.textContent = +dead.textContent + 1 : 
        lost.textContent = +lost.textContent + 1; 
 
        lost.textContent == 5 ? +function() { 
            alert("Вы проиграли"); 
            lost.textContent = 0; 
            dead.textContent = 0; 
        }() : lost.textContent;
 
        dead.textContent == 10 ?  
        +function() { 
            alert("Вы выиграли"); 
            lost.textContent = 0;
            dead.textContent = 0;
        }() : dead.textContent;         
     
}         
}