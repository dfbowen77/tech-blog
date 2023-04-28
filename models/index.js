// import the various models to define their associations/relationships
const User = require('./User')
const BlogPost = require('./Blogpost')
const Comment = require('./Comment')

// Define the associations/relationships between the three models

User.hasMany(BlogPost, {
    foreignKey: 'user_id'
})

BlogPost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

BlogPost.hasMany(Comment, {
    foreignKey: 'blogpost_id',
})

Comment.belongsTo(BlogPost, {
    foreignKey: 'blogpost_id',
    onDelete: 'CASCADE'
})

User.hasMany(Comment, {
    foreignKey: 'user_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

// Export the defined relationships for use in other files. 
module.exports = { User, Comment, BlogPost }