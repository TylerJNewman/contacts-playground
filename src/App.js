import React, { useState } from "react";
import ListContacts from "./ListContacts";

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
  const deleteContact = (id) =>
    setContacts(contacts.filter((c) => c.id !== id));

  return (
    <>
      <ListContacts
        contacts={contacts}
        deleteContact={deleteContact}
      ></ListContacts>
    </>
  );
};

export default App;
