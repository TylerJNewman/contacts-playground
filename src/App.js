import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import ListContacts from "./ListContacts";
import CreateContact from "./CreateContact";
import * as ContactsAPI from "./utils/ContactsAPI";

// const CONTACTS = [
//   {
//     id: "karen",
//     name: "Karen Isgrigg",
//     handle: "@karen_isgrigg",
//     avatarURL: "http://localhost:5001/karen.jpg",
//   },
//   {
//     id: "richard",
//     name: "Richard Kalehoff",
//     handle: "@richardkalehoff",
//     avatarURL: "http://localhost:5001/richard.jpg",
//   },
//   {
//     id: "tyler",
//     name: "Tyler McGinnis",
//     handle: "@tylermcginnis",
//     avatarURL: "http://localhost:5001/tyler.jpg",
//   },
// ];

const App = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(
    () =>
      ContactsAPI.getAll().then((contacts) => {
        setContacts(contacts);
      }),
    []
  );
  const removeContact = (contact) => {
    setContacts(contacts.filter((c) => c.id !== contact.id));
    ContactsAPI.remove(contact);
  };
  const createContact = (contact) => {
    ContactsAPI.create(contact).then((contact) => {
      setContacts((currentState) => contacts.concat([contact]));
    });
  };
  return (
    <>
      <Route
        exact
        path="/"
        render={() => (
          <ListContacts
            contacts={contacts}
            onDeleteContact={removeContact}
          ></ListContacts>
        )}
      />
      <Route
        path="/create"
        render={({ history }) => (
          <CreateContact
            onCreateContact={(contact) => {
              createContact(contact);
              history.push("/");
            }}
          />
        )}
      />
    </>
  );
};

export default App;
