import getBagArray from "../bag/getBag.js"
import printItem from "./printItem.js"

let listTag = document.querySelector('#productsList')

function addInBag(item) {
    let bag = getBagArray()
    let product = { ...item, count: 1 }
    product.totalOfProduct = product.product_price * product.count
    if (bag.some((el) => el.id === product.id)) {
        let elIndex = bag.findIndex((el) => el.id === product.id)
        bag[elIndex].count = bag[elIndex].count + 1
        bag[elIndex].totalOfProduct = bag[elIndex].product_price * bag[elIndex].count
    } else {
        bag.push(product)
    }
    localStorage.setItem('bag', JSON.stringify(bag))
}

function printList(item) {
    let li = document.createElement('li')
    li.innerHTML = printItem(item)

    li.querySelector('button').addEventListener('click', () => addInBag(item))
    
    listTag.appendChild(li)
}


export default printList
