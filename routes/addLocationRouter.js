const addLocationController = require("../controllers/addLocationController")

router.get('/', addLocationController.getaddLocation)

router.post('/createLocation', addLocationController.createLocation)

router.delete('/deleteLocation', addLocationController.deleteLocation)
