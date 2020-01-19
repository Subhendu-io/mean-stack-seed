require('./core/config');
require('./core/mongo');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);
app.use((err, req, res, next) => {
    if(err.name === 'ValidationError') {
        var validationErrors = [];
        Object.keys(err.errors).forEach(key => validationErrors.push(err.errors[key].message));
        res.status(422).send(validationErrors);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
