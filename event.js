const  mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
    {
        eventName : String,
        artist : String,
        category : String,
        link     : String,
        venue   : String,
        time    : String,
    }
);

const Event = mongoose.model('eventSchema',eventSchema);



module.export = Event;