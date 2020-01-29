import React from "react";
import PropTypes from "prop-types";

import ContactListItem from "../ContactListItem/ContactListItem";

import styles from "./filter.module.css";

const Filter = ({ value, onChange, visibleSearchContacts, contacts }) => (
  <div className={styles.filterForm}>
    <label className={styles.FormLabel}>
      Find contacts by name
      <input
        className={styles.FormInput}
        type="name"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </label>
    <ul>
      {contacts.length > 2 &&
        visibleSearchContacts.map(contact => (
          <ContactListItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
    </ul>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  visibleSearchContacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ),
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  )
};

export default Filter;
