const studentController=require('./controllers/studentController')
const express=require('express')

var app =express()
const bodyParser=require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send('welcome to our app');
});



app.use('/api/students',studentController);






const port=process.env.PORT || 3000;
app.listen(port,
    console.log(`listening on port ${port}`)
);