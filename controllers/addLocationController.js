const location = require('../models/locationModel')

module.exports = {
    getaddLocation: async (req,res)=>{
        try{
            const Location = await location.find()
            res.render('addLocation.ejs', {location: Location})
        }catch(err){
            console.log(err)
        }
    },
    createLocation: async (req, res)=>{
        try{
            await location.create({broadLocation: req.body.broad, specificLocation: req.body.specific, POG: req.body.POGname })
            console.log('Location information has been added!')
            res.redirect('/addLocation')
        }catch(err){
            console.log(err)
        }
    },
    deleteLocation: async (req, res)=>{
        try{
            await location.findOneAndDelete({_id:req.body.idFromLocation})
            console.log('Deleted Information')
            res.json('Deleted Information')
        }catch(err){
            console.log(err)
        }
    }
}    