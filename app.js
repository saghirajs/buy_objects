const mongoose = require('mongoose');
const express = require('express');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const auth = require('./middlewares/auth');

mongoose.connect('mongodb+srv://saghirsaghir:saghirsaghir@cluster0.mvhef.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


const app = express();
app.use(express.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  

// registering stuff routes into the app

   app.use('/api/stuff', stuffRoutes);

  


// registering user routes into the app
  app.use('/api/auth', userRoutes);

module.exports = app;