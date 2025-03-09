const router = require("express").Router();
const { Event} = require("../models/event");


router.get("/event/:category", async (req, res) => {
	try {

        	const event = await Event.find({category:req.params.category})

        res.json({event:event});
		
	} catch (error) {
		console.log(error);
	}
});


module.exports = router;
