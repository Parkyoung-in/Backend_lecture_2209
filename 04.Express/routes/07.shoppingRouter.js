const express = require('express');

const shoppingRouter = express.Router();

shoppingRouter.get('/list', (req, res) => {
    res.send('<h1>http://localhost:3000/shopping/list</h1>');
});
shoppingRouter.get('/cart', (req, res) => {
    res.send('<h1>http://localhost:3000/shopping/cart</h1>');
});

module.exports = shoppingRouter;  // 외부에서 볼 수있게 해주는것