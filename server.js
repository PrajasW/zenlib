if(process.env.NODE_ENV !== 'production'){
    // to load the .env files and save to process.env
    require('dotenv').config()
}
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
})
const db = mongoose.connection
db.on('error',error => console.error(error))
db.once('open', () => console.log("connected to mongoose"))


// setting the router
const indexRouter = require("./routes/index.js")


app.set('view engine','ejs');
// setting the directories 
app.set('views',__dirname + '\\views')   // views directory  (will hold the views)
app.set('layout',__dirname + '\\layouts\\layout.ejs') // layouts directory (will hold the templates)

// setting middleware
app.use(expressLayouts) // for using express layouts
app.use(express.static('public'))   // for static files

// to set the app to link all the urls from / to indexRouter
app.use('/',indexRouter)

app.listen(process.env.PORT || 3000,()=>{
    console.log(`server started at http://127.0.0.1:${process.env.PORT || 3000}`);
})