
require('dotenv').config();
const express = require('express'); 
const cors = require('cors'); 
const router = require('./routes/apiRoutes');
const path = require('path');
const uploadsFolder = path.join(__dirname, "uploads"); 
const app = express();

app.use(express.static('C:\\Users\\Robin\\OneDrive\\Desktop\\react\\shop\\public')); 
app.use(cors());

app.use("/uploads", express.static(uploadsFolder)); 
app.use('/api', router); 
app.use(express.json());
app.listen(4242, () => console.log('Running on port 4242'))