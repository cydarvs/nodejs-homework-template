import express from "express";
import { ctrlWrapper } from "../../helpers/ctrlWrapper.js";
// prettier-ignore

import { getAllContacts, getContactsById, addContact, deleteContact, updateContactById } from "../../controllers/contactsController.js";

import { contactValidation } from "../../validations/validation.js";
import { httpError } from "../../helpers/httpError.js";

const router = express.Router();

// Get All Contacts
router.get("/", ctrlWrapper(getAllContacts));

// GEt Contact By ID
router.get("/:contactId", ctrlWrapper(getContactsById));

// Add Contact
router.post("/", ctrlWrapper(addContact));

// Delete Contact
router.delete("/:contactId", ctrlWrapper(deleteContact));

// Update Contact
router.put("/:contactId", ctrlWrapper(updateContactById));

// module.exports = router;
export { router };