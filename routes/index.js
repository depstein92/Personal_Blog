const express = require('express');
const router = express.Router();

/*=============ARTICLES==============================
=====================================================*/
router.get('/', (req, res, next) => {
  res.render('index', {title: 'index'});
})
router.get('/articles/add', (req, res, next) => {
res.render('addArticle', {title: 'Create Article'})
})
/*=============CATEGORYS==============================
=====================================================*/
router.get('/categories', (req, res, next) => {
  res.render('categories', {title: 'categories'})
})
/*=============MANAGE==============================
=====================================================*/
router.get('/manage', (req, res, next) => {
  res.render('manage', {title: 'manage'})
})

router.get('/categories/add', (req, res, next) => {
res.render('addCategory', {title: 'Create Category'})
})


module.exports = router;
