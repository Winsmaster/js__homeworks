const input = document.getElementById("editor");

let text = localStorage.getItem("saveText");
input.value = text;



input.onchange = () => {
    localStorage.setItem("saveText", input.value.trim())      

}
