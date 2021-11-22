const express = require("express"); 
const app = express();
const db = require('./config/db');
const port = 8000
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
 });
app.set('port', process.env.PORT || port);

app.post('/Register', (req, res) =>{
    const usrId = req.body.usrId;
    const usrPw = req.body.usrPassword;

    db.query(`INSERT INTO management.user (id, password) VALUES ("${usrId}", "${usrPw}")`);
})

app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
    
})