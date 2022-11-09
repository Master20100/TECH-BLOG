const path = require("path");
const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const session = require("express-session");
const handlebars = require("express-handlebars");
const { User, BlogTemplate } = require("./models/index");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = require("./config/connection");
const withAuth = require("./utils/auth");

//here we set the engine that is called handlebars string to handlebars engine(const { engine } = require ('express-handlebars');)
app.engine("handlebars", engine());
//after that view engine tells express to use this value that is called handlebars string
//then express will look for it up to find it equal to engine.
app.set("view engine", "handlebars");

app.use(express.static("public"));

const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.get("/", (req, res) => {
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  res.render("main", { layout: "index" });
});


const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Login
app.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.logUsername,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.logPassword);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    // Once the user successfully logs in, set up the sessions variable 'loggedIn'

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.logged_in = true;

      res.json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});



app.post("/register", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.regUsername,
      password: req.body.regPassword,
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
});

app.get("/login", (req, res) => {
  res.render("login", { layout: "index" });
});

app.get("/register", (req, res) => {
  res.render("register", { layout: "index" });
});

app.get("/profile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      //To be fixed
      include: [{ model: BlogTemplate }],
    });

    const user = userData.get({ plain: true });
  
    // res.render('profile', {
    //   ...user,
    //   logged_in: true
    // });

    res.render("profile", { ...user, layout: "index" });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.get("/createPost", (req, res) => {
  res.render("blogUnit", { layout: "index" });
});

app.post("/projects", withAuth, async (req, res) => {
  try {
    const blogContent = await BlogTemplate.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.json(blogContent);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

app.delete('/profile/:id', async (req, res) => {
  try {
    const blogContent = await BlogTemplate.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!BlogTemplate) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(blogContent);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});


app.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});

