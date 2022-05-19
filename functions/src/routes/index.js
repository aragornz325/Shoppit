const useRouter = require('../users/user.routes')
const productRouter = require('../products/products.routes')
const faqRouter = require('../faqs/faqs.router.js')
const categoriesRouter = require('../categories/category.router')
const cartRouter = require('../carts/carts.routes')

function routerApi (app) {
    app.use('/users', useRouter );
    app.use('/products', productRouter);
    app.use('/faqs', faqRouter)
    app.use('/categories', categoriesRouter);
    app.use('/carts', cartRouter);
    

}

module.exports = routerApi

