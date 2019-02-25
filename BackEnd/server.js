const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const pg = require('pg');
const cors = require('cors');
const PORT = 8080;

let app = express();

let pool = new pg.Pool({
    port: 5432,
    database: 'postgres',
    password: '1234',
    max: 10,
    host: 'localhost',
    user: 'postgres'
});

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.post('/add', (req, res)=>{
    const cfName = req.body.firstName;
    const clName = req.body.lastName;
    const caddress = req.body.address;
    const cphone = req.body.phone;
    const ccountry = req.body.country;
    const ccity = req.body.city;
    const postal = req.body.postal;
    const email = req.body.email;
    const nic = req.body.nic;

    pool.connect((err, db, done) =>{
        if(err){
            return console.log(err);
        }
        else{
            db.query('INSERT INTO public."cusTable"("cusFName", "cusAddress", "cusTel", "cusNic", "cusCountry", "cusCity", "cusPostalCode", "cusEmail", "cusLName") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',[cfName,caddress,cphone,nic,ccountry,ccity,postal,email,clName], (err, table) => {
                done();
                if(err){
                    res.json({msg: false, data: err})
                }
                else{
                    res.json({msg:true, table:table});
                }
            });
        }
    })
})

app.post('/search', (req, res) => {
    const nic = req.body.nic;

    pool.connect((err, db, done) =>{
        if(err){
            return console.log(err);
        }
        else{
            try{
                db.query('SELECT * FROM public."cusTable" WHERE "cusNic" = $1',[nic], (err, table, fields) => {
                    done();
                    if(err){
                        res.json({status: false, data: err})
                    }
                    else{
                        res.json({status: true, data: table.rows})
                    }
                });
            }catch(Ex){

            }
                
        }
    })
})

app.post('/delete', (req, res) => {
    const nic = req.body.nic;

    pool.connect((err, db, done) =>{
        if(err){
            return console.log(err);
        }
        else{
            try{
                db.query('DELETE FROM public."cusTable"WHERE "cusNic" = $1',[nic], (err, table, fields) => {
                    done();
                    if(err){
                        res.json({status: false, data: err})
                    }
                    else{
                        res.json({status: true, data: table.rows})
                    }
                });
            }catch(Ex){

            }
                
        }
    })
})

app.post('/update', (req, res)=>{
    const cfName = req.body.firstName;
    const clName = req.body.lastName;
    const caddress = req.body.address;
    const cphone = req.body.phone;
    const ccountry = req.body.country;
    const ccity = req.body.city;
    const postal = req.body.postal;
    const email = req.body.email;
    const nic = req.body.nic;

    pool.connect((err, db, done) =>{
        if(err){
            return console.log(err);
        }
        else{
            db.query('UPDATE public."cusTable" SET "cusFName"=$1, "cusAddress"=$2, "cusTel"=$3, "cusCountry"=$4, "cusCity"=$5, "cusPostalCode"=$6, "cusEmail"=$7, "cusLName"=$8 WHERE "cusNic"=$9',[cfName,caddress,cphone,ccountry,ccity,postal,email,clName,nic], (err, table) => {
                done();
                if(err){
                    return console.log(err)
                }
                else{
                    res.json({msg:true, data: table.rows});
                }
            });
        }
    })
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true}));

app.use(morgan('dev'));

app.use(function(request, response, next){
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requesred-With, Content-Type, Accept");
    next();
});

app.listen(PORT, () => console.log('Listening on the '+PORT));