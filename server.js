const express = require("express");
const app = express();
const personRoute = require("./routes/person");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static(__dirname + "/public"));
app.use("/persons", personRoute);

app.listen(3000, () => {
  console.log("Server is Running at port:3000");
});
