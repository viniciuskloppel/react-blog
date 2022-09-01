const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRouter = require("./routes/users");

dotenv.config();
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log("Connected to MongoDB."))
    .catch((e) => {
        console.log(e);
    });

app.use("/api/auth", authRoute);
app.use("/api/users", usersRouter);

const PORT = 3000;

app.use("/", (req, res) => {
    console.log("You joined the main page.");
});

app.listen(PORT, () => {
    console.log("Running.");
});
