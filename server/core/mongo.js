const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) {
        console.log('Successfully Conneted To MongoDB');
    } else {
        console.log('Error Connecting MongoDB' + JSON.stringify(err, undefined, 2));
    }
});

require('../models/user.model');