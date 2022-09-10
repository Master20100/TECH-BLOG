const path = require('path');
const express = require('express');
const app = express();
const { engine } = require ('express-handlebars');
const session = require('express-session');
const handlebars = require('express-handlebars');

app.engine('handlebars', engine());

app.set('view engine', 'handlebars');
app.use(express.static('public'))

app.get('/', (req, res) => {
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  res.render('main', {layout : 'index'});
  });

// const routes = require('./controllers');

const sequelize = require('./config/connection');
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(routes);
app.post('/login',(req,res)=>{
  console.log("login");
  // console.log(req.body);
    res.render("login", {layout : 'index'});
});
  
  
app.post('/register',(req,res)=>{
  console.log("register");
  console.log(req.body)});

app.get('/login',(req,res)=>{
    console.log("login");
    // console.log(req.body);
      res.render("login", {layout : 'index'});
  });


  app.get('/register',(req,res)=>{
    console.log("register");
    // console.log(req.body);
      res.render("register", {layout : 'index'});
  });


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});



