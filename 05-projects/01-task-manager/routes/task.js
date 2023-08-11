const express = require('express');
const { getAllItems, posAItem, getAItem, edtAItem, delAItem, delAllItems, updAItem } = require('../controllers/task');
const router = express.Router();

router.route('/').get(getAllItems).post(posAItem).delete(delAllItems);
router.route('/:id').get(getAItem).put(edtAItem).delete(delAItem).patch(updAItem);

module.exports = router;