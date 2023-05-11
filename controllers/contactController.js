const db = require('../models');
const Contact = db.Contact;

exports.getAll = (req, res) => {
    Contact.find({})
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving Foods.'
            });
        });
};

exports.getById = (req, res) => {
    const contactId = req.params.id;

    Contact.findById(contactId)
        .then((data) => {
            if (!data) {
                return res.status(404).send({ message: 'Contact not found' });
            }
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving contact.'
            });
        });
};
