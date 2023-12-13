const dotenv = require('dotenv')
const express = require('express');
const cors = require('cors');
const colors = require('colors')
const app = express();
const cloudinary = require('cloudinary');

dotenv.config({path : './config.env'})

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret:  process.env.CLOUD_API_SECRET
  });


  const corsOptions = {
    origin: '*', 
    credentials: true,
  };

app.use(express.json());
app.use(cors());
app.use(cors(corsOptions));
app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads'))



require('./DataBase/Connection')
app.use('/api' , require('./Router/Loginroute'));
app.use('/api' , require('./Router/Registerroute'));
app.use('/api' , require('./Router/Productroute'));


const PORT = process.env.PORT;

app.listen(PORT , (req , res) =>{
    console.log(`connect in the port ${PORT}`);
});
