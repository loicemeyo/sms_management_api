const router = require('express').Router()

const messageController = require('../../controllers/messageController')

router.get('/', messageController.getAll)
router.get('/:id', messageController.getMessageById)
router.delete('/:id', messageController.deleteMessage)
router.post('/', messageController.sendMessage)

module.exports = router