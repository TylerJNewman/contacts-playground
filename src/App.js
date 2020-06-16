import React, { useState } from "react";
import ListContacts from "./ListContacts";

const isEmpty = (obj) =>
  [Object, Array].includes((obj || {}).constructor) &&
  !Object.entries(obj || {}).length;

const CONTACTS = [
  {
    id: "karen",
    name: "Karen Isgrigg",
    handle: "@karen_isgrigg",
    avatarURL: "http://localhost:5001/karen.jpg",
  },
  {
    id: "richard",
    name: "Richard Kalehoff",
    handle: "@richardkalehoff",
    avatarURL: "http://localhost:5001/richard.jpg",
  },
  {
    id: "tyler",
    name: "Tyler McGinnis",
    handle: "@tylermcginnis",
    avatarURL: "http://localhost:5001/tyler.jpg",
  },
];

const App = () => {
  const [contacts, setContacts] = useState(CONTACTS);
  const [filteredContacts, setFilteredContacts] = useState(CONTACTS);
  const deleteContact = (id) =>
    setContacts(contacts.filter((c) => c.id !== id));

  const filterBy = (query) =>
    contacts.filter((contact) => {
      const regex = new RegExp(query, "gi");
      return contact.name.match(regex) || contact.handle.match(regex);
    });

  // const filterContacts = (query) => setContacts((query) => search(query));
  const filterContacts = (query) =>
    isEmpty(query)
      ? setFilteredContacts(contacts)
      : setFilteredContacts(filterBy(query.target.value));
  return (
    <>
      <ListContacts
        contacts={contacts}
        deleteContact={deleteContact}
        filterContacts={filterContacts}
        filteredContacts={filteredContacts}
      ></ListContacts>
    </>
  );
};

export default App;
