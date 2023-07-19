const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("Mongo Connection open!")
})
.catch(err => {
    console.log("there was a Mongo connection error:")
    console.log(err)
})

// const p = new Product({
//     name: 'apple',
//     price: 1.20,
//     category: 'fruit'
// })
// p.save().then(p => {
//     console.log(p)
// })
// .catch(err => {
//     console.log(err)
// })

const seedProducts = [
    {
        name: 'farm fresh eggs',
        price: 6.00,
        category: 'dairy'
    },
    {
        name: 'celery',
        price: 2.00,
        category: 'vegetable'
    },
    {
        name: 'oranges',
        price: 1.20,
        category: 'fruit'
    },
    {
        name: 'cheese',
        price: 4.60,
        category: 'dairy'
    },
    {
        name: 'ruby grapefruit',
        price: 3.60,
        category: 'fruit'
    }
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })