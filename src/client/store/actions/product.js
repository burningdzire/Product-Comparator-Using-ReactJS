export const getProducts = () =>
  dispatch =>
    fetch(`products.json`)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: "FETCH_PRODUCTS_LIST",
          payload: response.products
        })
      })

export const compare = product => ({
  type: "COMPARE_PRODUCTS",
  product: product
})
