const Products = require("./models/productSchema");
const ProductData = require('./constants/productsData');

const DefaultData = async () => {
    try {
        await Products.deleteMany({});
        const storeData = await Products.insertMany(ProductData);
        console.log("Data inserted successfully:", storeData);
    } catch (error) {
        
        console.error("Error inserting data:", error);
    }
};
module.exports= DefaultData;
