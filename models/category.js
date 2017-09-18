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

const Category = module.exports = mongoose.model('categories', categorySchema);

//get Category function

module.exports.getCategories = function(callback, limit){
  Category.find(callback).sort(limit).sort([['title', 'ascending']])
}

module.exports.addCategory = function(category, callback){
  Category.create(category, callback);
}

module.exports.getCategoryById = function(id, callback){
 Category.findById(id, callback);
}

// Update Category
module.exports.updateCategory = function(query, update, options, callback){
 Category.findOneAndUpdate(query, update, options, callback);
}

// Remove Category
module.exports.removeCategory = function(query, callback){
 Category.remove(query, callback);
}

module.exports.updateCategory = function(query, update, options, callback){
  Category.findOneAndUpdate(query, update, options, callback);

}
