const mongoose = require('mongoose');

const connectdb = () => {
    mongoose.connect(
        process.env.MONGODB,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }
    )
        .then(() => {
            console.log('Connected to DB');
        })
        .catch((err) => {
            console.error('Error connecting to DB:', err);
        });
}

module.exports = connectdb;