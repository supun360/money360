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
    const uid = req.body.uid
    const title = req.body.title;
    const nameCredentials = req.body.nameCredentials;
    const fullName = req.body.fullName;
    const addressNo = req.body.addressNo;
    const addressStreet = req.body.addressStreet;
    const city = req.body.city;
    const district = req.body.district;
    const country = req.body.country;
    const identyNo = req.body.identyNo;
    const dateOfIssue = req.body.dateOfIssue;
    const dateOfBirth = req.body.dateOfBirth;
    const gender = req.body.gender;
    const occupation = req.body.occupation;
    let values = [uid,title,nameCredentials,fullName,addressNo,addressStreet,city,district,country,identyNo,dateOfIssue,dateOfBirth,gender,occupation]
   
    pool.connect((err, db, done) =>{
        if(err){
            return console.log(err);
        }
        else{
            db.query('INSERT INTO public."cusTable"("userId", "title", "nameCredentials", "fullName", "addressNo", "addressStreet", "city", "district", "country","identyNo","dateOfIssue","dateOfBirth", "gender", "Occupation") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)',[...values], (err, table) => {
                done();
                if(err){
                    res.json({msg: false, data: err})
                    console.log(err)
                }
                else{
                    res.json({msg:true, table:table});
                    console.log(err)
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


app.post('/api/getVehicles', function(request, res){
    pool.connect(function(err, db, done){
        if (err) {
            return response.status(400).send(err);
        }else{
            try{
                db.query('SELECT * FROM public."vehicles"', function(err, table){
                    done();
                    if (err) {
                        res.json({status: false, data: err})
                        //return response.status(400).send(err);
                    } else {
                        res.json({status: true, data: table.rows})
                    }
                })
            }
            catch(Ex){

            }
            
        }
    })
});

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

app.delete('/api/remove/:customer_id', function(request, response) {
    var customer_id = request.params.customer_id;
    pool.connect(function(err, db, done){
        if(err) {
            console.log(err);
            return response.status(400).send(err)
        }else{
            db.query('DELETE FROM vehicles WHERE customer_id = $1', [String(customer_id)], function(err, result){
                done();
                if(err){
                    console.log(err);
                    return response.status(400).send(err)
                }
                else{
                    return response.status(201).send({ message: 'success in delete records' });
                }
            })
        }
    })
})

app.get('/api/edit/:customer_id', function(request, response) {
    var customer_id = request.params.customer_id;
    pool.connect(function(err, db){
        if (err) {
            return response.status(400).send(err);
        } else {
            db.query("SELECT * FROM vehicles WHERE customer_id = ?", [String(customer_id)], function (err, rows) {
                if (err) throw err;
                response.render('edit', { vehicledata: rows });
            });
        }
    })
});

app.post('/update/:customer_id', function(request, response) {
    
    var vehicle_no = request.body.vehicle_no;
    var chassis_no = request.body.chassis_no;
    var engine_no = request.body.engine_no;
    var model = request.body.model;
    var make = request.body.make;
    var color = request.body.color;
    var vehicle_img = request.body.vehicle_img;

    var updatecustomer_id = request.body.customer_id;

    db.query("UPDATE vehicles SET vehicle_no=?, chassis_no=?, engine_no=?, model=?, make=?, color=?, vehicle_img=? WHERE customer_id=?",
        [vehicle_no, chassis_no, engine_no, model, make, color, vehicle_img, updatecustomer_id], function (err, respond) {
            if (err) throw err;
            response.redirect('../../')
        });

});



app.post('/accountsearch', (req, res) => {
    const nic = req.body.nic;

    pool.connect((err, db, done) =>{
        if(err){
            return console.log(err);
        }
        else{
            try{
                db.query('SELECT * FROM public."accounts" WHERE "nicno" = $1',[nic], (err, table, fields) => {
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


//===================>

app.post('/savings/create', (req, res)=>{
    const accno = req.body.accno;
    const acctype = req.body.acctype;
    const nicno = req.body.nicno;
    const business = req.body.business;
    const taxno = req.body.taxno;
    const citizenship = req.body.citizenship;
    const perpose = req.body.perpose;
    const income = req.body.income;
    const funds = req.body.funds;
    const property1 = req.body.property1;
    const property2 = req.body.property2;
    //get the system date and send to databse

    pool.connect((err, db, done) =>{
        if(err){
            return console.log(err);
        }
        else{
            db.query('INSERT INTO public."accounts"("accno","acctype","business", "taxno", "citizenship", "perpose", "income", "funds", "property1", "property2", "nicno",) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',[accno,acctype,nicno,business,taxno,citizenship,perpose,income,funds,property1,property2], (err, table) => {
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


app.post('/api/add-vehicles', function(request, response){
    var vehicle_no = request.body.vehicle_no;
    var chassis_no = request.body.chassis_no;
    var engine_no = request.body.engine_no;
    var model = request.body.model;
    var make = request.body.make;
    var color = request.body.color;
    var vehicle_image = request.body.vehicle_image;
    var customer_id = request.body.customer_id;
    let values = [vehicle_no, chassis_no, engine_no, model, make, color, vehicle_image, customer_id];
    pool.connect((err, db, done) => {
        if (err) {
            return response.status(400).send(err);
        }
        else {
            db.query('INSERT INTO vehicles (vehicle_no, chassis_no, engine_no, model, make, color, vehicle_image, customer_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)', [...values], (err, table) => {
                done();
                if (err) {
                    console.log("Not")
                    return response.status(400).send(err);
                } else {
                    console.log('DATA INSERTED');
                    response.status(201).send({message: 'Data Inserted!'});
                }
            })
        }
    })
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true}));

app.use(morgan('dev'));

app.use(function(request, response, next){
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requesred-With, Content-Type, Accept");
    next();
});

app.listen(PORT, () => console.log('Listening on the '+PORT));