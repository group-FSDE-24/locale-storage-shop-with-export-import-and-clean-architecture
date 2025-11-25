import printList from "./modules/index/printList.js"
import goods from "./modules/index/storage.js"

document.addEventListener('DOMContentLoaded', function () {
    let productsArray

    if (localStorage.getItem('products') && localStorage.getItem('bag')) {
        productsArray =  JSON.parse(localStorage.getItem('products'))
    } else {
        localStorage.setItem('products', JSON.stringify(goods))
        localStorage.setItem('bag', JSON.stringify([]))
    }

    productsArray = JSON.parse(localStorage.getItem('products'))

    productsArray.forEach(element => {
        printList(element)
    });
})




