// By destructuring sequelize we can only pull out the things we need: in this case, the model and the datatypes so we can define the User model
const { Model, DataTypes} = require('sequelize')

// bcrypt is used to ensure user passwords are safely encrypted via hashing.  
const bcrypt = require('bcrypt');

// connect to the database using sequelize. 
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
    }
}
  
User.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8],
        },
    },
  },
  {
    hooks: {
        beforeCreate: async (newUserData) => {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
});
  
module.exports = User;

