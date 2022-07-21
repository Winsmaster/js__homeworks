const minus = document.querySelectorAll(".product__quantity-control_dec")
const plus = document.querySelectorAll(".product__quantity-control_inc")
const productAdd = document.querySelectorAll(".product__add")
const cart = document.querySelector(".cart__products")



for (let item of minus) {
    item.onclick = () => {
        let valueItem = item.nextElementSibling
        let value = +valueItem.textContent 
        value--
        (value < 1) ? value = 1 : valueItem.textContent = value     
    }
}

for (let item of plus) {
    item.onclick = () => {
        let valueItem = item.previousElementSibling
        let value = +valueItem.textContent 
        value++
        valueItem.textContent = value     
    }
}


for (let item of productAdd) {
    item.onclick = () => {
        let itemCart = document.querySelectorAll(".cart__product")

        let obj = item.previousElementSibling.firstElementChild.nextElementSibling
        let value = +obj.textContent

        let id = item.closest(".product").getAttributeNode("data-id").value
        let srcImg = item.closest(".product").firstElementChild.nextElementSibling.getAttributeNode("src").value

        if (itemCart.length > 0) {
            for (let item of itemCart) {
                if (item.getAttributeNode("data-id").value = id) {
                    console.log(item)
                }
        }
    }

        
        

        cart.innerHTML += `
        <div class="cart__product" data-id=${id}>
        <img class="cart__product-image" src=${srcImg}>
        <div class="cart__product-count">${value}</div>
        </div>`

        
    }



    
}