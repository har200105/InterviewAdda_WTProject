const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(cors());
dotenv.config();
app.use(express.json());
const db = require('./database/db');
db();
app.use("/",require('./router/questions'));
app.use("/",require('./router/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("Server is Listening");
});
