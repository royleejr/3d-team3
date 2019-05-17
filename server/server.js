const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const functions = require("./functions");

const users = {};

//set up express
const app = express();
const port = 8080;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

// NOTE: Secret Keys should NEVER be included in source code. Better kept in
// environment variables provided on deployment. For demo purposes only.
const jsonSecretKey = "secret";

app.use((req, res, next) => {
  // Signup and login are public URLs that don't require a token
  const { url } = req;

  if (url === "/signup" || url === "/login" || url === "/ping") {
    next();
  } else {
    // Format of request is BEARER <token>. Splitting on ' ' will create an
    // array where the token is at index 1
    const token = functions.getToken(req);

    if (token) {
      console.log(token);
      if (jwt.verify(token, jsonSecretKey)) {
        // Decode the token to pass along to end-points that may need
        // access to data stored in the token.
        req.decode = jwt.decode(token);
        next();
      } else {
        res.status(403).json({ error: "Not Authorized." });
      }
    } else {
      res.status(403).json({ error: "No token. Unauthorized." });
    }
  }
});

app.post("/signup", (req, res) => {
  const { username, name, password } = req.body;
  users[username] = {
    name,
    password // NOTE: Passwords should NEVER be stored in the clear like this. Use a              // library like bcrypt to Hash the password. For demo purposes only.
  };
  res.json({ success: "true" });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users[username];
  if (user && user.password === password) {
    res.json({ token: jwt.sign({ name: user.name }, jsonSecretKey) });
  } else {
    res.json({
      token: "",
      error: {
        message: "Error logging in. Invalid username/password combination."
      }
    });
  }
});

app.get("/profile", (req, res) => {
  res.json(req.decode);
});

app.get("/ping", (req, res) => {
  res.json({ alive: true, dt: new Date().getTime() });
});

app.listen(port, () => {
  console.log(`Express server listening on ${port}`);
});
