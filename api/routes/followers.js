const router = require('express').Router();

const {getFollowers, addFollowers} = require('../controllers/followers')

router.route('/:userId/followers').post(addFollowers).get(getFollowers)

module.exports = router;