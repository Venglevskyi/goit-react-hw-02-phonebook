import React from "react";
import PropTypes from "prop-types";

import ContactListItem from "../ContactListItem/ContactListItem";

import styles from "./filter.module.css";

const Filter = ({
  value,
  onChange,
  visibleSearchContacts,
  contacts,
  onRemoveContact
}) => (
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
        visibleSearchContacts.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            removeContact={() => onRemoveContact(id)}
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
  ),
  onRemoveContact: PropTypes.func.isRequired
};

export default Filter;
