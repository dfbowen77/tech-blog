const seedPost = require('./postData')
const seedComments = require('./commentData')
const seedUsers = require('./userData')

const sequelize = require('../config/connection')

const seedAll = async () => {
    await sequelize.sync({ force: true })
    console.log('\n---- DATABASE SYNCED ----\n')
    
    await seedUsers()
    console.log('\n---- USERS SEEDED ----\n')
    
    await seedPost()
    console.log('\n---- POSTS SEEDED ----\n')
    
    await seedComments()
    console.log('\n---- COMMENTS SEEDED ----\n')

    process.exit(0)

}

// calls the seedAll function 
seedAll()
