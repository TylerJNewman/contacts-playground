import React from "react";

const ListContacts = ({
  contacts,
  deleteContact,
  filteredContacts,
  setQuery,
  query,
}) => {
  return (
    <div className="list-contacts">
      <div className="list-contacts-top">
        <input
          className="search-contacts"
          type="text"
          placeholder="Search Contacts"
          value={query}
          onChange={(q) => setQuery(q.target.value)}
        />
        {/* <Link to="/create" className="add-contact">
          Add Contact
        </Link> */}
      </div>
      <ol className="contact-list">
        {filteredContacts.map((contact) => (
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
