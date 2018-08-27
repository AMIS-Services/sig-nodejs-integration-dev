'use strict';


/**
 * adds an new product
 * Adds an product to the system
 *
 * product Product Product to add to the catalog (optional)
 * no response value expected for this operation
 **/
exports.addProduct = function(product) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * adds an new salesperson
 * Adds an salesperson to the system
 *
 * salesPerson SalesPerson SalesPerson to add (optional)
 * no response value expected for this operation
 **/
exports.addSalesPerson = function(salesPerson) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get a list of products with their salesperson
 * Serach in the product catalogus and return a list of products
 *
 * productgroup String  (optional)
 * brand String  (optional)
 * name String  (optional)
 * returns Products
 **/
exports.getProducts = function(productgroup,brand,name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

