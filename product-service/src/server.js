const express = require("express");
const dotenv = require("dotenv");
const { urlencoded } = require("body-parser");

const connect = require("./db/connect");
const Product = require("./db/Product");

dotenv.config()
const app = express()

app.use(require("body-parser").json());
app.use(urlencoded({ extended: false }));

app.use("/api/v1/", require("./api/v1/productRouter"));

app.listen(process.env.PORT, () => {
    console.info("[INFO]: Application has started running at port: " + process.env.PORT)
    connect();
});