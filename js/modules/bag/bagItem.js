function printBagItem(item) {
    return `<p>${item.product_name}</p>
    <p>${item.product_description}</p>
    <p>${item.product_price}</p>
    <p>${item.store_address}</p>
    <p>${item.store_name}</p>
    <p id="countTag">count: ${item.count}</p>
    <p id="totalSumTag">total sum: ${item.totalOfProduct}</p>
    <button id="deleteProduct">DELETE</button>
    <button id="plusCount">+</button>
    <button id="minusCount">-</button>
    `
}

export default printBagItem