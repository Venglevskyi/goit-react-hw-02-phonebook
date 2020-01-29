import React from "react";
import PropTypes from "prop-types";

import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(contact => (
      <ContactListItem
        key={contact.id}
        name={contact.name}
        number={contact.number}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  )
};

export default ContactList;
