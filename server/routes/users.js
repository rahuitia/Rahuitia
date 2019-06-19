const router = require('express').Router()
const {getUsers} = require('../db/users')
const {parseUsersData} = require ('./routeFunctions')

router.get('/', async (req, res) => {
    try{
        const users = await getUsers()
        res.json(parseUsersData(users))
    }
    catch{
        err => res.status(500).send({message: "Server Error"})
    }
})

module.exports = router

