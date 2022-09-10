const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');


// const routes = require('./controllers');

const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;




app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res)=>{ res.render('main');})

// app.use(routes);
app.get('login',(req,res)=>{

  
  console.log(req.body)});
app.get('register',(req,res)=>console.log(req.body));


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});



