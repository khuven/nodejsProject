const express = require("express");
const app = express();
app.set("view engine",ejs);


app.use('/assets', express.static('public'));

app.get('/contact', function (req,resp){}
    resp.render('contact');



);



