import PropTypes from 'prop-types';
import { ContactItemButton, ContactItemWrp } from './ContactItem.styled';

const ContactItem = ({ name, number, onDeleteContact }) => {
  return (
    <ContactItemWrp>
      <p>
        {name}: <span>{number}</span>
      </p>
      <ContactItemButton onClick={onDeleteContact}>delete</ContactItemButton>
    </ContactItemWrp>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
