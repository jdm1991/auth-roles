const prisma = require('../utils/prisma')
const bcrypt = require('bcrypt')

const createUserDb = async (username, password, role) => await prisma.user.create({
  data: {
    username,
    passwordHash: await bcrypt.hash(password, 6)
  }
})

const getUserDb = async () => await prisma.user.findMany();

module.exports = {
  createUserDb, 
  getUserDb
}
