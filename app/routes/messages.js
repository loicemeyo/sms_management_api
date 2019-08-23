const router = require('express').Router()
const MessageController = require('../../controllers/messageController')

router.get('/', MessageController.getAll)
router.get('/:id', MessageController.getSmsById)
router.delete('/:id', MessageController.deleteSms)
router.post('/', MessageController.sendSms)

module.exports = router