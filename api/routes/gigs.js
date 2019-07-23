const express = require('express');
const router = express.Router();
const gigsCtrl = require('../controllers/gigs');


router.get('/', gigsCtrl.index);
router.post('/create', gigsCtrl.create);
router.delete('/:id', gigsCtrl.gdelete)

module.exports = router;