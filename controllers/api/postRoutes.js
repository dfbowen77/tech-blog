const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

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
      console.log("Error", err)
      res.status(500).json(err)
  }
})

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const updatePost = await Post.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updatePost) {
      res.status(404).json({ message: `No record exists of a post with an id of ${req.params.id}` });
      return;
    }
    res.status(200).json(updatePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deletePost = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!deletePost) {
      res.status(404).json({ message: `No record exists of a post with an id of ${req.params.id}` });
      return;
    }

    res.status(200).json(deletePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
