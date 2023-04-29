const router = require('express').Router()
const { User, Post, Comment} = require('../../models')
const withAuth = require('../../utils/auth')

router.get('/', async (req, res) => {
    try {
        const postAll = await Post.findAll({
            include: [{ model: User, attributes: ['name'] }]
        })
        res.status(200).json(postAll)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id, {
            include: [
                { model: User, attributes: ['name']},
                { model: Comment, 
                    include: [{ model: User, attributes: ['name']}]
                }
            ]
        })
        if (!post) {
            res.status(404).json({ message: `No record exists of a post with an id of ${req.params.id}`})
        }
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }
})

// POST
// UPDATE
// DELETE

module.exports = router