require('dotenv').config
const express = require ('express');
const connectDB = require('./config/db')
const cors = require ('cors');
const producRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')


connectDB ();

const app = express();  
const port = process.env.PORT  || 3001;

app.use (express.json());
app.use (cors());
app.use(express.urlencoded({extended: true}))
app.use('/api/products', producRoutes);
app.use('/api/users', userRoutes);



app.listen (port , ( ) => {
    console.log ('el servidor fue iniciado en el puerto' + port)
})

