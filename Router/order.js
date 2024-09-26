const express=require('express');
const { orderProduct,getOrders } = require('../controllers/orderController');
const router=express.Router();

router.route('/order').post(orderProduct);
router.route('/order-list').get(getOrders);

module.exports=router;