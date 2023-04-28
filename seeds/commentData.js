// import the user model for use within this program
const { Comment } = require('../models')

// create an array to add user data
const commentData = [
    {
       text: 'User 1 commenting on blogpost 3',
       post_id: 3,
       user_id: 1 
    },
    {
        text: 'User 2 commenting on blogpost 3',
        post_id: 3,
        user_id: 2 
     },
     {
        text: 'User 1 commenting on blogpost 2',
        post_id: 2,
        user_id: 1 
     },
     {
        text: 'User 2 commenting on blogpost 1',
        post_id: 1,
        user_id: 2 
     },
     {
        text: 'User 1 commenting on blogpost 4',
        post_id: 4,
        user_id: 1 
     },
]

const seedComments = () => Comment.bulkCreate(commentData)

module.exports = seedComments