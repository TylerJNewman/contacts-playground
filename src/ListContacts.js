import React from "react";

const ListContacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>{contact.name}</li>
      ))}
    </ul>
  );
};

export default ListContacts;
