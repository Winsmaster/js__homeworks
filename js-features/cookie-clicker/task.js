picture = document.getElementById("cookie")
counterClick = +document.getElementById("clicker__counter").textContent

const big = 300;
const small = 200;


picture.onclick = function() {
    document.getElementById("clicker__counter").textContent = counterClick++
    if (picture.width === big) {
        
        picture.width = small;
    } else 
        picture.width = big;
    
}

let speedClick;
let firstClick = 0;
let secondClick = 0;
let countClick = 0;
picture.click = function() {
    countClick++
    if (countClick === 1) {
        let now = new Date();
        firstClick = now.getTime();
    } else {
        let after = new Date();
        secondClick = after.getTime();
        speedClick = 1000/(secondClick - firstClick);
        countClick = 0;
        document.getElementById("clicker__speed").textContent = speedClick;        
    }}
