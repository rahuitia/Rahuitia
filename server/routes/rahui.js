const express = require("express");
const db = require("../db/rahui");
const router = express.Router();

router.get('/', (req, res) => {
  db.getRahuiInformation()
    .then(rahui => {
      let arr = []

      console.log(rahui.length)

      while (rahui.length) {
        let firstEntry = rahui.shift()

        firstEntry.iwi = JSON.parse(firstEntry.iwi)
        firstEntry.hapu = JSON.parse(firstEntry.hapu)
        firstEntry.region = JSON.parse(firstEntry.region)
        firstEntry.iwi_name = [firstEntry.iwi_name]
        firstEntry.hapu_name = [firstEntry.hapu_name]
        // firstEntry.region = [firstEntry.region]

        firstEntry.geo_ref = JSON.parse(firstEntry.geo_ref)

        let duplicates = rahui.filter(item => {
          return firstEntry.id === item.id
        })

        rahui = rahui.filter(item => {
          return firstEntry.id !== item.id
        })

        if (duplicates.length) {
          let iwiName = duplicates.map(item => item.iwi_name)
          iwiName.push(firstEntry.iwi_name[0])
          let hapuName = duplicates.map(item => item.hapu_name)
          hapuName.push(firstEntry.hapu_name[0])
          iwiName = [...new Set(iwiName)]
          hapuName = [...new Set(hapuName)]

          firstEntry.iwi_name = iwiName
          firstEntry.hapu_name = hapuName
        }

        arr.push(firstEntry)
      }
      res.json(arr)
    })
  })


  router.post('/', async (req, res) => {
    try{
        console.log("req.body:", req.body)
        const rahuiData = req.body;
        const userId = rahuiData.userId
        const iwi = rahuiData.iwi
        const hapu = rahuiData.hapu
        const description = rahuiData.description
        const korero = rahuiData.korero
        const geoRef = rahuiData.geoRef
        const datePlaced = rahuiData.datePlaced
        const dateLifted = rahuiData.dateLifted
        const authoriser = rahuiData.authoriser
        const contact = rahuiData.contact
        const region = rahuiData.region
        await db.writeRahui(userId, iwi, hapu, description, korero, geoRef, datePlaced, dateLifted, authoriser, contact, region);
    
        res.json({})
    }
    catch(err){
        err => res.status(500).json({message: "Server Error"})
    }
})


router.put('/:id', async (req, res) => {
  try{
      console.log("this is req.body:", req.body)
      const rahuiData = req.body;
      const region = rahuiData.region
      const rahuiId = rahuiData.id;
      const iwi = rahuiData.iwi
      const hapu = rahuiData.hapu
      const description = rahuiData.description
      const korero = rahuiData.korero
      const geoRef = rahuiData.geoRef
      const datePlaced = rahuiData.datePlaced
      const dateLifted = rahuiData.dateLifted
      const authoriser = rahuiData.authoriser
      const contact = rahuiData.contact
    
      await db.editRahui( rahuiId, region, iwi, hapu, description, korero, geoRef, datePlaced , dateLifted, authoriser, contact );

      res.json({})
  }
  catch(err){
      err => res.status(500).json({message: "Server Error"})
  }
})

router.post('/tautoko', async (req, res) => {
  try{
      console.log("req.body:", req.body)

      const tautokoData = req.body;
      const rahuiId = tautokoData.rahui_id;
      const userId = tautokoData.user_id

      const tautoko = { rahui_id: rahuiId, userId: userId }

      await db.writeTautoko( tautoko ); 
      res.json({})
  }
  catch(err){
      err => res.status(500).json({message: "Server Error"})
  }
})

module.exports = router