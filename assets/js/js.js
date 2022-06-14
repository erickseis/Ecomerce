"use strict"

let cartIcon = document.querySelector(".cart")
let cartOverlay = document.querySelector(".shopping-cart-overlay")


cartIcon.addEventListener("click", () =>{
    cartOverlay.classList.add("mostrar")
})