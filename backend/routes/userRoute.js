const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.post('/users', (req, res) => {
    const user = req.body
    res.status(201).send(`user ${user.Name} created successfully!`)
    
})

module.exports = router;