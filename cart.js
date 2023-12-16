document.querySelector("#cart").addEventListener("click", ()=> {
    document.querySelector("#cart-products").classList.toggle("hide")
})

let cartProd = document.querySelector("#cart-products")

let cart = []
if(localStorage.getItem("cart")){
    cart =  JSON.parse(localStorage.getItem("cart"))
    drawCartProducts();
}

function addProductToCart(id){
   let product = productsArray.find(function(el){
        return el.id == id 
    })
    cart.push(product)
    console.log(cart)
    localStorage.setItem("cart", JSON.stringify(cart))
    drawCartProducts()
}

function drawCartProducts() {
    if(cart.length == 0) return (cartProd.innerHTML = "cart is empty")
    cartProd.innerHTML = ""
    cart.forEach((el)=>{
        cartProd.innerHTML += `
        <p>
        <img src="${el.img}">
        <span>${el.name}</span>
        <span>${el.price}</span>
        </p>
        `;
    })
    cartProd.innerHTML += `<button id="clearcart" onclick="clearCart()">Clear</button>`

}
 function clearCart(){
    cart = []
    localStorage.setItem("cart", "")
    drawCartProducts();
}