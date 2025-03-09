const router = require("express").Router();
const Event = require("../models/event");



router.post("/note", async (req, res) => {
	try {
        console.log("Hello")
        const eventName = req.body.eventName;
        const artist = req.body.artist;
        const category = req.body.category;
        const link = req.body.link;
        const venue = req.body.venue;
        const time = req.body.time;

		const event = await Event.create({
            eventName:eventName,
            artist:artist,
            category:category,
            link:link,
            venue:venue,
            time:time
        });
        console.log("Event added and created")
        res.json({event:event});
		
	} catch (error) {
		console.log(error);
	}
});


module.exports = router;
