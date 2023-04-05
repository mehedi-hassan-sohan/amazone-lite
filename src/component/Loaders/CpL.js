import { getShoppingCart } from "../../../utilities/fakedb"

const CpL = async () => {

    const loadProduct = await fetch('products.json')
    const products = await loadProduct.json()

    let savedCart = []

    const storeCart = getShoppingCart()
    for (const id in storeCart) {
        const addProduct = products.find(pd => pd.id === id)
        if (addProduct) {
            const quantity = storeCart[id];
            addProduct.quantity = quantity;
            savedCart.push(addProduct);
        }
    }
    return savedCart
}

export default CpL
