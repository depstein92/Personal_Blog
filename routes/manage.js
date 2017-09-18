const express = require('express');
const router = express.Router();

Category = require('../models/category.js')

router.get('/articles', (req, res, next) => {
    res.render('manage_articles', {
        title: 'Manage Articles'
    });
});

router.get('/categories', (req, res, next) => {
    Category.getCategories((err, categories) => {
        if (err) {
            res.send(err);
        }

        res.render('manage_categories', {
            categories: categories
        });
    })
});

router.get('/articles/add', (req, res, next) => {
Category.getCategories((err, categories) => {
  if(err){
    res.send(err);
  }
  res.render('add_article', {
      title: 'Create Article',
      categories: categories
  });
})

});

router.get('/categories/add', (req, res, next) => {
  const categories = req.body.categories;
  console.log(categories);
    res.render('addCategory', {
        categories: categories
    });
});

router.get('/articles/edit/:id', (req, res, next) => {

});

router.get('/categories/edit/:id', (req, res, next) => {
  Category.getCategoryById(req.params.id, (err, category) => {
    console.log('THIS IS THE CATEGORY: ' + category)
    if(err){
      console.log(err);
      res.send(err);
    }

    res.render('editCategory', {
        title: 'Edit Article',
        category: category
    });
});
});

module.exports = router;
