const Restaurants = require("../controllers/restaurant.controller");
const Reviews = require("../controllers/review.controller");


// TODO: api routes...

// this is the REST pattern
module.exports = app => {
    // restaurant REST routes
    app.get("/restaurants", Restaurants.getAll);
    app.get("/restaurants/:_id", Restaurants.getOne);
    app.post("/restaurants", Restaurants.create);
    app.put("/restaurants/:_id", Restaurants.update);
    app.delete("/restaurants/:_id", Restaurants.remove);

    // I'll put review routes here
    app.post("/restaurants/:_id/review", Reviews.create);
}