const Contact = require("../models/contact.model");

exports.createContact = async (req, res) => {
  try {

    if (!req.body.number) {
      return res.status(406).json({ msg: "number is required" })
    }
    const found = await Contact.findOne({ name: (req.body.name) })

    if (found) {
      return res.status(406).json({ msg: "number already taken try another one" })
    }
    const newContactData = {
      name: req.body.name,
      number: req.body.number
    };
    const newContact = await Contact.create(newContactData);
    console.log("contact uploaded")
    res.send(newContact)
  } catch (error) {
    res.status(500).send(error.message);
  }
};


exports.createBulkContact = async (req, res) => {
  try {
    const newContacts = await Contact.collection.insert(req.body)
    console.log("Bulk contact uploaded")
    res.send(newContacts)
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.readContact = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const contact = await Contact.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    // get total documents in the contact collection 
    const count = await Contact.count();

    res.json({
      contact,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (error) {
    console.log("err in finding contact")
    res.send(error)
  }
}

exports.updateContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ msg: "contact not found", contact })
    }
    contact.name = req.body.name
    contact.number = req.body.number
    await contact.save();
    res.status(200).json({ msg: "contact updated", contact })
  } catch (err) {
    console.log(err)
    res.send("error updating contact")
  }
}

exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ msg: "contact not found" })
    }
    await contact.remove();
    res.status(200).json({ msg: "contact deleted", contact })
  } catch (error) {
    console.log("error in deleting contact")
    res.send(error)
  }
}