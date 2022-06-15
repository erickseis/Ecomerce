"use strict"


const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'https://academlo-store.netlify.app/assets/img/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Sueteres',
      price: 24.00,
      image: 'https://academlo-store.netlify.app/assets/img/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'https://academlo-store.netlify.app/assets/img/featured3.png',
      category: 'sweatshirts',
      quantity: 20
    },
    {
      id: 4,
      name: 'Sweatshirts',
      price: 30.00,
      image: 'https://academlo-store.netlify.app/assets/img/featured3.png',
      category: 'sweatshirts',
      quantity: 10
    }]



let cartIcon = document.querySelector(".cart")
let cartOverlay = document.querySelector(".shopping-cart-overlay")
let cartClose = document.getElementById("cart-close")
let listProducts = document.querySelector(".products-list")
let cartContainer = document.querySelector(".cart-list")
let cartCount = document.querySelector("#cart-count")
let cart = []





document.addEventListener("DOMContentLoaded", () =>{
    mostrarProductos()
})


cartIcon.addEventListener("click", () =>{
    cartOverlay.classList.add("mostrar")
})

cartClose.addEventListener("click", () =>{
    cartOverlay.classList.remove("mostrar")
})

/*Scroll de la navegacion*/

let header = document.querySelector("header")

window.addEventListener("scroll", () =>{
    if( window.scrollY > 60 ){
        header.classList.add("scroll-header")
    }else{
        header.classList.remove("scroll-header")
    }
})


function mostrarProductos() {
    let fragmentHTML = ""

    items.forEach( (product) =>{
        fragmentHTML += `

    <div class="product-card">
    <h1>${product.name}</h1>
    <div class="product-image-container">
        <img src="${product.image}" alt="">
    </div>
    <p><strong>$${product.price}</strong></p>
    <span>Stock ${product.quantity}</span>
    <button data-id="${product.id}" class="product-button">
    <i class='bx bx-plus-circle bx-md'></i>
</button>
</div>
        `
    } )
    listProducts.innerHTML = fragmentHTML


    let productsButton = document.querySelectorAll(".product-button")
    console.log(productsButton)


    productsButton.forEach( (button) =>{
        button.addEventListener("click", (evento) =>{
            let id = parseInt( button.getAttribute("data-id") )
            let product = items.find( item =>{ 
                return item.id === id 

          })

          /*----------------------- falta codigo*/ 
           agregarProducto(product)
          //cart.push(product)
          //console.log((cart))
        })
    })
}

/*
[ 
    {
        id:2,
        quantitySelected: 1,

    },
]
*/
/*
verificar si ya existe en el carrito
    si exite
    -verificar el stock
     sumar 1 -- quantitySelected += 1
     si no existe
    creo la propiedad y asigno valor inicial 1

*/

function agregarProducto( producto ){

   let resultadoFind = cart.find(item=>item.id === producto.id)
   //resultadoFind = "actualizacion"
   if( resultadoFind ){
        let stock = cart[resultadoFind.index].quantity
        let quantitySelected = cart[resultadoFind.index].quantitySelected
        
    
    if( stock > quantitySelected ){
       cart[resultadoFind.index].quantitySelected += 1
    }else{
        alert("no tenemos suficiente inventario")
    }

    /*cart[resultadoFind.index].quantitySelected +=1*/
   }
else{
    producto.quantitySelected = 1
    producto.index = cart.length

    cart.push(producto)

}

console.log(cart)
mostrarProductosCart()
}


function mostrarProductosCart(){
let fragmentoHTML = ``
let suma = 0
let cantidadTotal = 0

cart.forEach(item => {

    fragmentoHTML += `
    <div class="cart-item">
    <img src=${item.image} alt="">
    <p>${item.name}</p> 
    <small>Cantidad:${item.quantitySelected}</small>
  </div> 
    `   


    let totalProducto = item.quantitySelected * item.price
    suma += totalProducto

    cantidadTotal += item.quantitySelected

})

fragmentoHTML += `
    <div >
    <br>
    <br>
        <p>Productos seleccionados = ${cantidadTotal}</p>
        <p>$${ suma }</p>
    </div>
    `
    cartContainer.innerHTML = fragmentoHTML
    cartCount.textContent = cantidadTotal
}