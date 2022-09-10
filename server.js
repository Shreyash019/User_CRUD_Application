const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const connectDB = require('./database/connection');
const app = express();

dotenv.config( { path : 'config.env'} );
const PORT = process.env.PORT || 3000

app.use(morgan('tiny'));

connectDB();

app.use(bodyparser.urlencoded({ extended : true}));

app.set("view engine", "ejs");
app.use('/css', express.static(path.resolve(__dirname, "views/css")));
app.use('/img', express.static(path.resolve(__dirname, "views/img")));
app.use('/js', express.static(path.resolve(__dirname, "views/js")));
app.use('/', require('./routes/router'))

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});