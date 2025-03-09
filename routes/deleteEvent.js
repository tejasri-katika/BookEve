const router = require("express").Router();
const { Event} = require("../models/event");


router.get("/event/:id", async (req, res) => {
	try {

        	const event = await Event.deleteOne({id:req.params.id})

        res.json({success:"Event Removed"});
		
	} catch (error) {
		console.log(error);
	}
});


module.exports = router;
