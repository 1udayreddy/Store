const productsArray = [
    {
        // basket: price_1MtsQwSE5cCrpebkunsTTtBR
// sunglass:price_1MtsTCSE5cCrpebkMaXA5jBo
// camera : price_1MtsTySE5cCrpebkWRwBtPiL
// Tshirts:price_1MtsUUSE5cCrpebkvWGdzEWG
// Furnitures:price_1MtsVCSE5cCrpebkv24ocxhM
// Mobiles: price_1MtsVqSE5cCrpebk2VBCZL39

        id:"price_1MtsQwSE5cCrpebkunsTTtBR",
       title:"Basketball",
       price: 4.99, 
       image:"./assets/basket.jpg"

    },
    {
        id:"price_1MtsTCSE5cCrpebkMaXA5jBo",
       title:"Sunglasses",
       price: 9.99,
       image:"./assets/glass.jpg"
    },

    {
        id:"price_1MtsTySE5cCrpebkWRwBtPiL",
       title:"Camera",
       price: 39.99,
       image:"./assets/camera.jpg"
    },

    {
        id:"price_1MtsUUSE5cCrpebkvWGdzEWG",
       title:"Tshirts",
       price: 8.99,
       image:"./assets/tshirt.jpg"
    },

    {
        id:"price_1MtsVCSE5cCrpebkv24ocxhM",
       title:"Furnitures",
       price: 40.25,
       image:"./assets/furniture.jpg"
    },

    {
        id:"price_1MtsVqSE5cCrpebk2VBCZL39",
       title:"Mobiles",
       price: 19.99,
       image:"./assets/mobile.jpg"
    }
]
function getProductData(id){
    let ProductData = productsArray.find(product => product.id === id);

    if(ProductData === undefined){
        console.log("product data does not exist", +id)
        return undefined
    }
    return ProductData
}
export {productsArray , getProductData}