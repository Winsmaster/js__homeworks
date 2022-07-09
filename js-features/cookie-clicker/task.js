picture = document.getElementById("cookie")
counterClick = +document.getElementById("clicker__counter").textContent

const big = 300;
const small = 200;



picture.addEventListener("click", () => {
    document.getElementById("clicker__counter").textContent = counterClick++
    if (picture.width === big) {        
        picture.width = small;
    } else 
        picture.width = big;    
})

let speedClick;
let start = 0;
let finish = 0;
let countClick = 0;
picture.addEventListener("click", () => {
    countClick++
    if (countClick === 1) {
        let now = new Date();
        start = now.getTime();
    } else {
        let after = new Date();
        finish = after.getTime();
        speedClick = (1000/(finish - start)).toFixed(2);
        countClick = 1;
        document.getElementById("clicker__speed").textContent = speedClick;
        start = finish;       
    }   
})


