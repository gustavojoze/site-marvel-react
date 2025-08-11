
export const selectProductsCount = (rootReducer) => {
    return rootReducer.cart.products.reduce((total, product) => total + product.quantity, 0);
}

export const selectProductsTotalPrice = (rootReducer) => {
    return rootReducer.cart.products.reduce((total, product) => total + product.price * product.quantity, 0);
}