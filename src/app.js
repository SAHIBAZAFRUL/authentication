const express = require("express");

const authRoutes = require("./routes/auth.routes");
const postRoutes = require("./routes/post.routes");

const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

//jo bhi api router ke help se create kre hai uske liye prefix lagana padega to access api

app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
    res.send("Server Running");
});

module.exports = app;



