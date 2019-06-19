const express = require('express')
const router = express.Router()
const iwi = require('../../data/tekahuimangai')

router.get('/', (req, res) => {
    firstLevel = Object.keys(iwi);
    fill = []

    for (i = 0; i < firstLevel.length; i++) {
        fill.push(iwi[firstLevel[i]])
    }
    res.json(fill)
})


module.exports = router