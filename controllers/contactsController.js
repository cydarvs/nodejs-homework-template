import { httpError } from "../helpers/httpError.js";
import { contactData } from "../models/contactData.js";
import { nanoid } from "nanoid";
// import fs from "fs/promises";
// import path from "path";



// const contactsPath = path.join("models", "contacts.json");

// const getAllContacts = async () => {
//   const contacts = await fs.readFile(contactsPath);
//   return JSON.parse(contacts);
// };

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
  const { name, email } = req.body;
  const newContact = { id: nanoid(), name, email, phone };
  contactData.push(newContact);
  res.status(201).json(newContact);
};

/*
const getContactsById = (req, res) => {
  const { contactId } = req.params;
  const contact = mockData.find(
    (contact) => contact.id === parseInt(contactId)
  );

  if (!contact) {
    throw httpError(404, "Contact ID Not Found");
  }

  res.json(contact);
};

const addContact = (req, res) => {
  const { name, email } = req.body;
  const newContact = { id: mockData.length + 1, name, email };
  mockData.push(newContact);
  res.status(201).json(newContact);
};

const deleteContact = (req, res) => {
  const { contactId } = req.params;
  mockData.filter((contact) => contact.id !== parseInt(contactId));
  res.json({ message: "Contact deleted" });
};

const updateContactById = (req, res) => {
  const { contactId } = req.params;
  const { name, email } = req.body;
  const index = mockData.findIndex(
    (contact) => contact.id === parseInt(contactId)
  );
  if (index === -1) {
    throw httpError(404, "Contact ID Not Found");
  }

  mockData[index] = { ...mockData[index], name, email };
  res.json(mockData[index]);
};
*/

// prettier-ignore
// getContactsById, addContact, deleteContact, updateContactById
export { getAllContacts, getContactsById, addContact };