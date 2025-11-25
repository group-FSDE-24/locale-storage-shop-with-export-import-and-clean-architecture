import printBagItem from "./bagItem.js"
import calcBag from "./calcBag.js"
import getBagArray from "./getBag.js"

let listTag = document.querySelector('#productsList')

function deleteProduct(li, item) {
    let bag = getBagArray()
    let productIndex = bag.findIndex((el) => el.id === item.id)
    bag.splice(productIndex, 1)
    li.remove()
    localStorage.setItem('bag', JSON.stringify(bag))
    calcBag()
}

function plusCount(li, item) {
    let bag = getBagArray()
    let productIndex = bag.findIndex((el) => el.id === item.id)
    bag[productIndex].count = bag[productIndex].count + 1
    bag[productIndex].totalOfProduct = bag[productIndex].product_price * bag[productIndex].count
    li.querySelector('#countTag').innerText = `count: ${bag[productIndex].count}`
    li.querySelector('#totalSumTag').innerText = `total sum: ${bag[productIndex].totalOfProduct}`
    localStorage.setItem('bag', JSON.stringify(bag))
    calcBag()
}

function minusCount(li, item) {
    let bag = getBagArray()
    let productIndex = bag.findIndex((el) => el.id === item.id)
    bag[productIndex].count = bag[productIndex].count - 1
    bag[productIndex].totalOfProduct = bag[productIndex].product_price * bag[productIndex].count
    li.querySelector('#totalSumTag').innerText = `total sum: ${bag[productIndex].totalOfProduct}`
    li.querySelector('#countTag').innerText = `count: ${bag[productIndex].count}`
    if (bag[productIndex].count < 1) {
        bag.splice(productIndex, 1)
        li.remove()
    }
    localStorage.setItem('bag', JSON.stringify(bag))
    calcBag()
}

function printBagList(item) {
    let li = document.createElement('li')
    li.innerHTML = printBagItem(item)

    li.querySelector('#deleteProduct').addEventListener('click', () => deleteProduct(li, item))
    li.querySelector('#plusCount').addEventListener('click', () => plusCount(li, item))
    li.querySelector('#minusCount').addEventListener('click', () => minusCount(li, item))

    listTag.appendChild(li)
}

export default printBagList