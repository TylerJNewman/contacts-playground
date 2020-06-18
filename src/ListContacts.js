import React, { useState } from "react";
import { isEmpty } from "./utils/helpers.js";
import { Link } from "react-router-dom";

const ListContacts = ({ contacts, onDeleteContact }) => {
  const [query, setQuery] = useState("");

  const showingContacts = isEmpty(query)
    ? contacts
    : contacts.filter((contact) => {
        const regex = new RegExp(query, "gi");
        return contact.name.match(regex) || contact.handle.match(regex);
      });

  const clearQuery = () => setQuery("");

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
        <Link to="/create" className="add-contact">
          Add Contact
        </Link>
      </div>

      {showingContacts.length !== contacts.length && (
        <div className="showing-contacts">
          <span>
            Now showing {showingContacts.length} of {contacts.length}
          </span>
          <button onClick={clearQuery}>Show all</button>
        </div>
      )}
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
              onClick={() => onDeleteContact(contact)}
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
