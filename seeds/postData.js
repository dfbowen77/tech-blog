// import the user model for use within this program
const { Post } = require('../models')

// create an array to add user data
const postData = [
    {
        title: 'Blog Post 1',
        text: 'This is the text for Blog Post #1',
        user_id: 1,

    },
    {
        title: 'Blog Post 2',
        text: 'This is the text for Blog Post #2',
        user_id: 1,

    },
    {
        title: 'Blog Post 3',
        text: 'This is the text for Blog Post #3',
        user_id: 2,

    },
    {
        title: 'Blog Post 4',
        text: 'This is the text for Blog Post #4',
        user_id: 2,

    },
]

const seedPost = () => Post.bulkCreate(postData)

module.exports = seedPost
