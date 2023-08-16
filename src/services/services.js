import axios from 'axios';

export const fetchAllProducts = async () => {
    let allProducts;
    try {
        allProducts = await axios.get('https://dummyjson.com/products').catch(err => console.error(err));
        return allProducts.data.products;
    } catch (error) {
        window.alert("Api Calling failed: " + error.message);
    }
    return allProducts
};

export const getOneProduct = async (pid) => {
    let singleProduct
    try {
        singleProduct = await axios.get(`https://dummyjson.com/products/${pid}`).catch(err => console.error(err));
        return singleProduct.data;
    } catch (error) {
        window.alert("Api Calling failed: " + error);
    }
    return singleProduct;
}