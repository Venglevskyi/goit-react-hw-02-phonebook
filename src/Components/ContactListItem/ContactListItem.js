import React from "react";
import PropTypes from "prop-types";

import styles from "./contactList.module.css";

const ContactListItem = ({ name, number }) => (
  <li className={styles.contactsListItem}>
    <p>
      {name}: {number}
    </p>
    <button type="button" className={styles.deleteButton}>
      Delete
    </button>
  </li>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
