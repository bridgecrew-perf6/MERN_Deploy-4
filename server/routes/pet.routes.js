const Pet = require("../controllers/pet.controller");


// TODO: api routes...

// this is the REST pattern
module.exports = app => {
    // restaurant REST routes
    app.get("/api/pet", Pet.getAll);
    app.get("/api/pet/:_id", Pet.getOne);
    app.post("/api/pet", Pet.create);
    app.put("/api/pet/:_id", Pet.update);
    app.delete("/api/pet/:_id", Pet.remove);

}