
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const authRoute = require("./routes/auth");
const session = require("express-session"); // Use express-session instead of cookie-session
const passportStrategy = require("./passport");
const app = express();

app.use(
	session({
		secret: "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",
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false }
	})
);


app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);

app.use("/auth", authRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));