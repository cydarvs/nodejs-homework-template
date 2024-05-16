import { httpError } from "../helpers/httpError.js";
import { contactData } from "../models/contactData.js";
import { nanoid } from "nanoid";
// import fs from "fs/promises";
// import path from "path";

const getAllContacts = (_req, res) => {
  res.json(contactData);
};

const getContactsById = (req, res) => {
  const { contactId } = req.params;
  const contact = contactData.find(
    (contact) => contact.id === (contactId)
  );

  if (!contact) {
    throw httpError(404, "Contact ID Not Found");
  }

  res.json(contact);
};

const addContact = (req, res) => {
  const { name, email, phone } = req.body;
  const newContact = { id: nanoid(), name, email, phone };
  
  console.log(newContact);

  contactData.push(newContact);
  res.status(201).json(newContact);
};

const deleteContact = (req, res) => {
  const { contactId } = req.params;
  contactData.filter((contact) => contact.id !== (contactId));
  res.json({ message: "Contact deleted" });
};

const updateContactById = (req, res) => {
  const { contactId } = req.params;
  const { name, email, phone } = req.body;
  const index = contactData.findIndex(
    (contact) => contact.id === (contactId)
  );
  if (index === -1) {
    throw httpError(404, "Contact ID Not Found");
  }

  contactData[index] = { ...contactData[index], name, email, phone };
  res.json(contactData[index]);
};

// prettier-ignore
export { getAllContacts, getContactsById, addContact, deleteContact, updateContactById };