const router = require('express').Router()
const { Comment, User, Post } = require('../../models')
const withAuth = require('../../utils/auth')


router.get('/', async (req, res) => {
    try {
        const commentAll = await Comment.findAll({
            include: [{ model: User }]
        })

        const comments = commentAll.map((comment) => comment.get({ plain: true }));

        console.log(comments);
        
        res.render('post', {comments, loggedIn: req.session.loggedIn});
        res.status(200).json(commentAll)
    } catch (err) {
        res.status(500).json(err)
    }
  })

router.post('/', withAuth, async (req, res) => {
    try {
        const addComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        })
        res.status(200).json(addComment);
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router

