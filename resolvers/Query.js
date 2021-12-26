exports.Query = {
    hello: (parent, args, context) => {
        return 'Hello World!'
    },
    products: (parent, args, { products }) => {
        return products
    },
    product: (parent, args, { products }) => {
        const productId = args.id;

        return products.find(product => product.id === productId);

    },
    categories: (parent, args, { categories }) => {
        return categories
    },
    category: (parent, args, { categories }) => {
        const categoryId = args.id;

        return categories.find(category => category.id === categoryId);
    },
}