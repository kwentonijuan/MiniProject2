//import
const express = require('express');
const app = express();
const homeRouter = require('./routes/home');

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//static files
app.use(express.static('public'));

//engine templates
app.set('views', './views');
app.set('view engine', 'ejs');

//routes
app.use('/', homeRouter);

//checking server
const port = 8000;
app.listen(port,()=>{
    console.log(`The server is running in port ${port}`);
});