const express = require('express');
const port = 4000

app = express()

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// use express router
app.use('/', require('./routes'));



app.listen(port, function(err){
    if(err){console.log('Somthing went wrong with port', err)}
    return console.log(`server is running on ${port}`);
});