const Thing = require("../models/Thing");

exports.createThing = (req, res, next) => {
    delete req.body._id;
    const thing = new Thing({
        ...req.body,
    });
    thing
        .save()
        .then(() => res.status(201).json({ message: "Objet enregistré !" }))
        .catch((error) => res.status(400).json({ error }));
};

exports.findAllThings = (req, res, next) => {
    Thing.find()
        .then((things) => res.status(200).json(things))
        .catch((error) => res.status(400).json({ things }));
};

exports.findAThing = (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
        .then((thing) => res.status(200).json(thing))
        .catch((error) => res.status(404).json({ error }));
};

exports.modifyAThing = (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params._id })
        .then(() => res.status(200).json({ message: "Objet Modifié !" }))
        .catch((error) => res.status(404).json({ error }));
};

exports.deleteAThing = (req, res, next) => {
    Thing.findOne({ _id: req.params.id }).then((thing) => {
        if (!thing) {
            res.status(404).json({
                error: new Error("No such Thing!"),
            });
        }
        if (thing.userId !== req.auth.userId) {
            res.status(400).json({
                error: new Error("Unauthorized request!"),
            });
        }
        Thing.deleteOne({ _id: req.params.id })
            .then(() => {
                res.status(200).json({
                    message: "Deleted!",
                });
            })
            .catch((error) => {
                res.status(400).json({
                    error: error,
                });
            });
    });
};
