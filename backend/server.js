const express = require('express');
const dotenv = require('dotenv');
const cloudinary = require('cloudinary');
const cors = require('cors');

const app = express();
dotenv.config();
const port = 5000;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.post('/imgupload', async (req, res) => {
    const { avatar } = req.body;

    try {
        const myCloud = await cloudinary.v2.uploader.upload(avatar, {
            folder: 'avatars',
            crop: 'scale'
        });
        res.json(myCloud);
    } catch (error) {
        console.log(error);
    }
});

app.get('/', (req, res) => {
    res.send({ name: 'hello world' });
});

app.listen(port, () => {
    console.log(`listen on port${port}`);
});
