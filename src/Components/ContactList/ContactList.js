import React from "react";
import PropTypes from "prop-types";

import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul>
    {contacts.map(({id, name, number}) => (
      <ContactListItem
        key={id}
        name={name}
        number={number}
        removeContact={() => onRemoveContact(id)}
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
  ),
  onRemoveContact: PropTypes.func.isRequired
};

export default ContactList;
