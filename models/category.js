const mongoose = require('mongoose');

// Schema for Categorys
const categorySchema = mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  }
});

const Category = module.exports = mongoose.model('Category', categorySchema);

//get Category function

module.exports.getCategories = function(callback, limit){
  Category.find(callback).sort(limit).sort([['title', 'ascending']])
}
