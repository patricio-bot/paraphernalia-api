require('dotenv').config()
const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
    .base('app863szkchKcxPsX')
    .table('products')

exports.handler = async (event, context) => {
    try {
        const { records } = await airtable.list()

        const products = records.map((product) => {

            const { id } = product
            const { name, images, price, colors, company, description, category, shipping, featured } = product.fields
            const image = images[0].url
            return { id, name, image, price, colors, company, description, category, shipping, featured }
        })
        return {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            statusCode: 200,
            body: JSON.stringify(products)
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: 'server error'
        }
    }

}