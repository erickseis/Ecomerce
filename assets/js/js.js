"use strict"

let cartIcon = document.querySelector(".cart")
let cartOverlay = document.querySelector(".shopping-cart-overlay")
let cartClose = document.getElementById("cart-close")


cartIcon.addEventListener("click", () =>{
    cartOverlay.classList.add("mostrar")
})

cartClose.addEventListener("click", () =>{
    cartOverlay.classList.remove("mostrar")
})