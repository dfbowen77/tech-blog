const router = require('express').Router()

router.get('/', async (req, res) => {
    console.log('Testing!!!')
    res.render('login')
})

module.exports = router