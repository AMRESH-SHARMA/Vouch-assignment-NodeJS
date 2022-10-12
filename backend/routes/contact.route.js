const express = require("express");
const { createContact, createBulkContact, readContact, deleteContact, updateContact } = require('../controllers/contact.controller');
const { isAuthenticated } = require("../middlewares/auth");
const router = express.Router();

router.route("/contact")
  .post(isAuthenticated, createContact);

router.route("/contact/bulk")
  .post(isAuthenticated, createBulkContact);

router.route("/contact")
  .get(isAuthenticated, readContact)

router.route("/contact/:id")
  .put(isAuthenticated, updateContact)
  .delete(isAuthenticated, deleteContact)

module.exports = router;