// By destructuring sequelize we can only pull out the things we need: in this case, the model and the datatypes so we can define the Comment model
const { Model, DataTypes} = require('sequelize')

// connect to the database using sequelize.
const sequelize = require('../config/connection');

// The class extends Model is one of the ways in sequelize that models can be defined. This line of code allows us to use the init method a few lines later in the code and to define all the model attributes. 
class Comment extends Model{}

Comment.init(
    {
        // defining all the model attributes
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: 'post',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
        modelName: 'comment',
        }
)   

module.exports = Comment