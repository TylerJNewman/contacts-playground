import React from "react";

const ListContacts = ({ contacts, deleteContact }) => {
  return (
    <ol>
      {contacts.map((contact) => (
        <li key={contact.id} className="contact-list-item">
          <div
            className="contact-avatar"
            style={{ backgroundImage: `url(${contact.avatarURL})` }}
          ></div>
          <div className="contact-details">
            <p>{contact.name}</p>
            <p>{contact.handle}</p>
          </div>
          <div
            className="contact-remove"
            onClick={() => deleteContact(contact.id)}
          >
            Remove
          </div>
        </li>
      ))}
    </ol>
  );
};

export default ListContacts;
