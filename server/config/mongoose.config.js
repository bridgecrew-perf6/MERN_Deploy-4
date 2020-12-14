const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/pet_db", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
}).then( () => console.log("Succesfully connected to pet_db"))
  .catch(err => console.err(err));


