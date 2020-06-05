const express = require('express')
const app = express()
const path = require('path')
const PORT= process.env.PORT || 5000;

app.use('/', require("./router/main"))

if(process.env.NODE_ENV === "production")
{
    app.use(express.static('date-red-master/build'));

    app.get('*',(req,res) =>res.sendFile(path.resolve(__dirname,'date-red-master','build','index.html')))
}
app.listen(PORT, () => {
    console.log('App listening on port 5000!');
});