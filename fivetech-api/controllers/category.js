const Category = require('../models/category');

exports.createCategory = (req, res, next) => {
    const categoryObject = JSON.parse(req.body.category);
    const category = new Category({
        name: req.body.name
    });
    category.save()
        .then(() => res.status(201).json({message: 'Category created !'}))
        .catch(error => res.status(400).json({error}));
};

exports.modifyCategory = (req, res, next) => {
    if (!req.body) {
        return res.status(400).send({message: "Update data can not be empty !"});
    }

    Category.updateOne({_id: req.params.id }, {...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "Category updated !"}))
        .catch(error => res.status(400).json({error}));
};

exports.deleteCategory = (req, res, next) => {
    Category.findOne({ _id: req.params.id })
        .then(category => {
            Category.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: "Category deleted !" }))
            .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(404).json({ error }));
};

exports.getCategory = (req, res, next) => {
    Category.findOne({ _id: req.params.id })
        .then(category => res.status(200).json(category))
        .catch(error => res.status(404).json({ error }));
};

exports.getCategories = (req, res, next) => {
    Category.find()
        .then(categories => res.status(200).json(categories))
        .catch(error => res.status(404).json({ error }));
};
