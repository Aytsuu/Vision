const express = require('express');
const cors = require("cors")
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(cors())
app.use(express.json({ limit: '10mb' }))
app.use(bodyParser.json({ limit: '10mb' }))

// MongoDB URI
const mongoURI = 'mongodb://localhost:27017/VisionDB';

// Connect to MongoDB
mongoose.connect(mongoURI)
    .then(() => {
    console.log('connected to db')
    })
    .catch((e) => {
        console.log(e)
    })

const schema = new mongoose.Schema({
    fname: String,
    lname: String,
    mname: String,
    dob: String,
    sex: String,
    pob: String,
    citizen: String,
    religion: String,
    marital: String,
    weight: String,
    height: String,
    address: String,
    zip: String,
    contact: String,
    occupation: String,
    Ffname: String,
    Flname: String,
    Fmname: String,
    Fdob: String,
    Fpob: String,
    Fcitizen: String,
    Fcontact: String,
    Foccupation: String,
    Mfname: String,
    Mlname: String,
    Mmname: String,
    Mdob: String,
    Mpob: String,
    Mcitizen: String,
    Mcontact: String,
    Moccupation: String,
    image: String,
});

const dataModel = mongoose.model('Profile', schema, 'profile');

// POST route for uploading image and metadata
app.post('/api/profile', async (req, res) => {
    console.log(req.body.capturedImage)
    console.log(req.body.data)
    try {

        // Store the data and the image in MongoDB
        const data = new dataModel({
            fname: req.body.data.fname,
            lname: req.body.data.lname,
            mname: req.body.data.mname,
            dob: req.body.data.dob,
            sex: req.body.data.sex,
            pob: req.body.data.pob,
            citizen: req.body.data.citizen,
            religion: req.body.data.religion,
            marital: req.body.data.marital,
            weight: req.body.data.weight,
            height: req.body.data.height,
            address: req.body.data.address,
            zip: req.body.data.zip,
            contact: req.body.data.contact,
            occupation: req.body.data.occupation,
            Ffname: req.body.data.Ffname,
            Flname: req.body.data.Flname,
            Fmname: req.body.data.Fmname,
            Fdob: req.body.data.Fdob,
            Fpob: req.body.data.Fpob,
            Fcitizen: req.body.data.Fcitizen,
            Fcontact: req.body.data.Fcontact,
            Foccupation: req.body.data.Foccupation,
            Mfname: req.body.data.Mfname,
            Mlname: req.body.data.Mlname,
            Mmname: req.body.data.Mmname,
            Mdob: req.body.data.Mdob,
            Mpob: req.body.data.Mpob,
            Mcitizen: req.body.data.Mcitizen,
            Mcontact: req.body.data.Mcontact,
            Moccupation: req.body.data.Moccupation,
            image: req.body.capturedImage,
        });

        await data.save();
        res.status(200).json({
            message: 'Image and metadata uploaded successfully',
            data: data,
        });
    } catch (err) {
    res.status(500).json({ message: 'Error saving data to MongoDB', error: err });
    }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});