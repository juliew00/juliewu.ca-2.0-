const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const userRouter = require('./routes/users');
const blogRouter = require('./routes/blogs');
const worksRouter = require('./routes/works');

app.use('/users', userRouter);
app.use('/blogs', blogRouter);
app.use('/works', worksRouter);

if (process.env.NODE_ENV === "production") {
    app.use(express.static('../juliewu-ca-2.0/build'));
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname + "../juliewu-ca-2.0/build/index.html"));
    });
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});