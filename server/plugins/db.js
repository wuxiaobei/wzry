module.exports = app => {
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://localhost/node-vue-moba', {
        useNewUrlParser: true
    })
  
    require('require-all')(__dirname + '/../models')
}