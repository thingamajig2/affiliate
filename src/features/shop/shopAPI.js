// export async function fetchProduct() {
//     const asin = "B073JYC4XM"
//     // const data = await fetch(`https://api.rainforestapi.com/request?api_key=D8BCB9E2E53A48B7ADB9A9306C723715&amazon_domain=amazon.com&asin=${asin}&type=product`);
//     const result = await data.json();
//     console.log('hasnuma', result);
//     return result;
// }
import productData from '../../components/productData';

export async function fetchProduct() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productData);
        }, 100);
    });
}