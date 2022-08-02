const closeBtn = document.querySelector(".modal__close")
const popup = document.querySelector(".modal")

document.cookie = "closePopup=" + "true"
console.log(document.cookie)

if (document.cookie.includes("true")) {
    document.cookie
} else {
    popup.classList.add("modal_active")}



closeBtn.addEventListener("click", () => {
    document.cookie = "closePopup=" + "true"
    popup.classList.remove("modal_active")
    
})