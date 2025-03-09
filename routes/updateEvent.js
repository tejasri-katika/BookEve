const router = require("express").Router();
const { Event} = require("../models/event");

router.post("/event/:id", async (req, res) => {
	try {

        const eventName = req.body.eventName;
        const artist = req.body.artist;
        const category = req.body.category;
        const link = req.body.link;
        const venue = req.body.venue;
        const time = req.body.time;

        await Event.findByIdAndUpdate(req.params.id,{
            eventName:eventName,
            artist:artist,
            category:category,
            link:link,
            venue:venue,
            time:time
        });

        const event = await Event.findById(id)
        res.json({event:event});
		
	} catch (error) {
		console.log(error);
	}
});


module.exports = router;
