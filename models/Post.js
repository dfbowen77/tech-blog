// By destructuring sequelize we can only pull out the things we need: in this case, the model and the datatypes so we can define the Post model
const { Model, DataTypes} = require('sequelize')

// connect to the database using sequelize.
const sequelize = require('../config/connection');

// The class extends Model is one of the ways in sequelize that models can be defined. This line of code allows us to use the init method a few lines later in the code and to define all the model attributes. 
class Post extends Model{}

Post.init(
    {
        // defining all the model attributes
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,   
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'user',
                key: 'id'
            }
        },
    },
        {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
        }
)

module.exports = Post
