//Routes to add to router
//app.get for index page
//app.get for item page
//app.post for create item page
//app.put for update item page
//app.delete for delete item page

const express = require('express')
const router = express.Router()

const itemController = require('../controllers/itemController')

router.get('/', itemController.getIndex)
router.get('/item', itemController.getItems)
router.post('/item', itemController.createItem)
router.post('/item/update/:id', itemController.updateItem)
router.delete('/item/delete/:id', itemController.deleteItem)

module.exports = router;