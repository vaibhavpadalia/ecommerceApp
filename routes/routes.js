var express = require('express');
var router = express.Router();
var controller = require('../controller/controller');


router.route('/v1/createUser')
    .post(controller.createUser);

router.route('/v1/getAllUsers')
      .get(controller.getAllUsers);

router.route('/v1/getUser/:email/:password')
    .get(controller.getUser);

router.route('/v1/getAllProducts')
    .get(controller.getAllProducts);

router.route('/v1/updateTotalCost/:email')
    .put(controller.updateTotalCost);

module.exports = router;
