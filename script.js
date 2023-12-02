let productsGrid = document.querySelector(".product-grid")
let productsArray = [];
let xhr = new XMLHttpRequest()
let url = "https://my-json-server.typicode.com/anngols/marketplace2/db"

xhr.open("GET", url)
xhr.responseType = "json"
xhr.onload = ()=>{
    productsArray = xhr.response.products
    productsGrid.innerHTML = ""
    productsArray.forEach(p => {
        productsArray.push(p)
        let pElem = document.createElement("div")
        pElem.classList.add("product")
        pElem.innerHTML = `
        <img src="${p.img}" alt="">
                <h2 class="product-name">${p.name}</h2>
                <p class="product-desc">${p.description}</p>
                <a href="profile/profile.html?id=${p.author_id}">Seller product</a>
                <div class="price-bar">
                    <p class="product-price">${p.price}</p>
                    <button onclick="addProductToCart(${p.id})"><i class="da-solid fa-plus"></i></button>
                </div>`

                productsGrid.append(pElem)
    });
}
xhr.send()