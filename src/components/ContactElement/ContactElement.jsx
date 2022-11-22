import React from 'react';
import PropTypes from "prop-types";


const ContactElement = ({ name, number, id, deleteContact }) => {
    return (
        <li key={id}>{name}: {number}<button value={id} onClick={deleteContact}>Delete</button></li>
    )
}

ContactElement.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
};

export default ContactElement;

