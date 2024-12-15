const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT;
const app = express();

app.listen(port, () => {
    console.log("Server started at port: " + port);
});
