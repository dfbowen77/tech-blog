// import the user model for use within this program
const { User } = require('../models')

// create an array to add user data
const userData = [
    {
       name: 'Daniel Bowen',
       email: 'danielbowen@email.com',
       password: 'password1234' 
    },
    {
        name: 'Jennifer Bowen',
        email: 'jenniebowen@email.com',
        password: 'password1234' 
     },

]

console.log(userData)

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers
