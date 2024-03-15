const Product=require('../models/product')
module.exports.getAddProduct=(req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }
  module.exports.postAddProduct=(req, res, next) => {
    const p=new Product(req.body.title);
    p.save();
    res.redirect('/');
  }
 module.exports.getProducts= (req, res, next) => {
  Product.fetchAll(products=>{
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
  });
  //console.log(products);
   
   
  })
}