const path = require('path');
const express = require('express');
const app = express();
const { engine } = require ('express-handlebars');
const session = require('express-session');
const handlebars = require('express-handlebars');
const {User,BlogTemplate} = require('./models/index');
//here we set the engine that is called handlebars string to handlebars engine(const { engine } = require ('express-handlebars');)
app.engine('handlebars', engine());
//after that view engine tells express to use this value that is called handlebars string
//then express will look for it up to find it equal to engine.
app.set('view engine', 'handlebars');


app.use(express.static('public'))

app.get('/', (req, res) => {
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  res.render('main', {layout : 'index'});
  });

// const routes = require('./controllers');

const sequelize = require('./config/connection');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(routes);
app.post("*",(req,res)=>{
  console.log("qqqq");
})
// Login
app.post('/login', async (req, res) => {
  console.log("aaaa");
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }
    else{
      res.send("hello");
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

  // Once the user successfully logs in, set up the sessions variable 'loggedIn'
  req.session.save(() => {
    req.session.loggedIn = true;

    res
      .status(200)
      .json({ user: dbUserData, message: 'You are now logged in!' });
  });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

// app.post('/login',async (req,res)=>{
//   console.log("login1");
//   const user = await User.findOne({
//     where: {
//       username: req.body.username
//     }
//   })
//   if(!user){
//     console.log("user not found");
//     res.status('500').send("user not found"); return;};

//   //user.password
//   //req.body.password

// res.send(req.body);
//   // console.log(req.body);
//     // res.render("login", {layout : 'index'});
// });
  
  
app.post('/register',async(req,res)=>{
    try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    // Set up sessions with a 'loggedIn' variable set to `true`
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);  
    }
  })


app.get('/login',(req,res)=>{
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



// router.post('/', async (req, res) => {
//   try {
//     const dbUserData = await User.create({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password,
//     });

//     // Set up sessions with a 'loggedIn' variable set to `true`
//     req.session.save(() => {
//       req.session.loggedIn = true;

//       res.status(200).json(dbUserData);
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });