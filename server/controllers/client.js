import Product from "../models/Product.js"
import ProductStat from "../models/ProductStat.js"

const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        const productsWithStats = await Promise.all(
           products.map(async ( product ) => {
            const stat = await ProductStat.find({
                productId: product._id
            })
              return { ...product._doc, stat } /*returns array of objects with the stats*/
           })
         )
        res.status(200).json(productsWithStats)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export default getProducts