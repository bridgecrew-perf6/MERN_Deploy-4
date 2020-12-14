const Pet = require("../models/pet.model");

class PetController {

    getAll(req, res) {
        // how we structure our res.json will be how it looks in the front-end
        Pet.find({})
            .then(Pet => res.json(Pet))
            .catch(err => res.json(err));
    }
    getOne(req, res) {
        Pet.findOne({_id: req.params._id})
            .then(Pet => res.json(Pet))
            .catch(err => res.json(err));
    }

    create(req, res) {
        // when creating the err object can contain validation errors!
        Pet.create(req.body)
            .then(Pet => res.json(Pet))
            .catch(err => res.json(err));
    }

    update(req, res) {
        Pet.findByIdAndUpdate({_id: req.params._id}, req.body, {runValidators: true , new : true , context : "query"})
            .then(() => res.json({msg: "ok"}))
            .catch(err => res.json(err));
    }

    remove(req, res) {
        Pet.deleteOne({_id: req.params._id})
            .then(() => res.json({msg: "ok"}))
            .catch(err => res.json(err));
    }
    
}

module.exports = new PetController();