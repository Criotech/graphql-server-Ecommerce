const { categories, products } = require('../db')

exports.Query = {
    hello: (parent, args, context) => {
        return 'Hello World!'
    },
    products: (parent, args, context) => {
        return products
    },
    product: (parent, args, context) => {
        const productId = args.id;

        return products.find(product => product.id === productId);

    },
    categories: (parent, args, context) => {
        return categories
    },
    category: (parent, args, context) => {
        const categoryId = args.id;

        return categories.find(category => category.id === categoryId);

    },
}