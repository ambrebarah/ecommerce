const Product = require("../models/product");
const fs = require("fs");

exports.createProduct = (req, res, next) => {
  const productObject = JSON.parse(req.body.product);
  // const productObject = req.body.product;
  // console.log(req.file);
  const product = new Product({
    ...productObject,
    // ...req.body.product,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });

  product
    .save()
    .then(() =>
      res.status(201).json({ message: "Product created successfully !" })
    )
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyProduct = (req, res, next) => {
  const productObject = req.file
    ? {
        ...JSON.parse(req.body.product),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  Product.updateOne(
    { _id: req.params.id },
    { ...productObject, _id: req.params.id }
  )
    .then(() =>
      res.status(200).json({ message: "Product updated successfully !" })
    )
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteProduct = (req, res, next) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => {
      const filename = product.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Product.deleteOne({ _id: req.params.id })
          .then(() =>
            res.status(200).json({ message: "Product deleted successfully !" })
          )
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.getOneProduct = (req, res, next) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => res.status(200).json(product))
    .catch((error) => res.status(404).json({ error }));
};

exports.getAllProducts = (req, res, next) => {
  Product.findOne({ _id: req.params.id })
    .then((products) => res.status(200).json(products))
    .catch((error) => res.status(404).json({ error }));
};


exports.searchProduct = (req, res, next) => {
  const keyword = req.body.keyword;
  const priceMax = req.body.priceMax && req.body.priceMax !== '' ? req.body.priceMax : 999999999999999;
//   console.log(keyword);
  // find({ email: { $regex: 'gmail' } });
  // { $or: [{ name: "Rambo" }, { breed: "Pugg" }, { age: 2 }] },
  if (req.body.category && req.body.category !== null) {
    const category = req.body.category;
    // console.log(category)
    Product.find({
      $and: [
        { category: category },
        { price: { $lte: priceMax } },
        {
          $or: [
            { name: { $regex: keyword } },
            { description: { $regex: keyword } },
          ],
        },
      ],
    })
      // .then((res) => {
      //   // res = {...res};
      //   console.log(res);
      //   console.log(req.body)
      //   // return res
      // })
      .then((products) => res.status(200).send({ ...products }))
      .catch((error) => res.status(404).json({ error }));
  } else {
    // console.log(typeof priceMax)
    Product.find({
      $and: [
        { price: { $lte: priceMax } },
        {
          $or: [
            { name: { $regex: keyword, $options: "i" } },
            { description: { $regex: keyword, $options: "i" } },
          ],
        },
      ],
    })
      // .then(res => {
      //     // res = {...res};
      //     console.log(res)
      //     // return res
      // })
      .then((products) => res.status(200).send({ ...products }))
      .catch((error) => res.status(404).json({ error }));
  }
};
