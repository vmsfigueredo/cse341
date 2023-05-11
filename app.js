require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes/index');
const db = require('./models');

// Routes
app.use('/', routes);

db.mongoose.set('strictQuery', false);

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.listen(port, () => {
            console.log(`DB Connected and server running on ${port}.`);
        });
    })
    .catch((err) => {
        console.log('Cannot connect to the database!', err);
        process.exit();
    });


