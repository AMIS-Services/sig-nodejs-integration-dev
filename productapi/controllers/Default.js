'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.addProduct = function addProduct (req, res, next) {
  var product = req.swagger.params['Product'].value;
  Default.addProduct(product)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addSalesPerson = function addSalesPerson (req, res, next) {
  var salesPerson = req.swagger.params['SalesPerson'].value;
  Default.addSalesPerson(salesPerson)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProducts = function getProducts (req, res, next) {
  var productgroup = req.swagger.params['productgroup'].value;
  var brand = req.swagger.params['brand'].value;
  var name = req.swagger.params['name'].value;
  Default.getProducts(productgroup,brand,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
