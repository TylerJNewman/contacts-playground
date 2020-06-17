import React, { useState } from "react";
import { isEmpty } from "./utils/helpers.js";

const ListContacts = ({ contacts, deleteContact }) => {
  const [query, setQuery] = useState("");

  const showingContacts = isEmpty(query)
    ? contacts
    : contacts.filter((contact) => {
        const regex = new RegExp(query, "gi");
        return contact.name.match(regex) || contact.handle.match(regex);
      });
  return (
    <div className="list-contacts">
      <div className="list-contacts-top">
        <input
          className="search-contacts"
          type="text"
          placeholder="Search Contacts"
          value={query}
          onChange={(q) => setQuery(q.target.value.trim())}
        />
        {/* <Link to="/create" className="add-contact">
          Add Contact
        </Link> */}
      </div>
      <ol className="contact-list">
        {showingContacts.map((contact) => (
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
    </div>
  );
};

export default ListContacts;
