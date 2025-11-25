function printItem(item) {
    return `<p>${item.product_name}</p>
    <p>${item.product_description}</p>
    <p>${item.product_price}</p>
    <p>${item.store_address}</p>
    <p>${item.store_name}</p>
    <button>ADD TO BAG</button>
    `
}

export default printItem