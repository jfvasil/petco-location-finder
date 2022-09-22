const location = require('../models/locationModel')

module.exports = {
    getlocations: async (req,res)=>{
        try{
            const Location = await location.find()
            res.render('location.ejs', {location: Location,})
        }catch(err){
            console.log(err)
        }
    }
}    