import { ContactItem } from 'components/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  return (
    <div>
      <ul className={css.contactList}>
        {contacts
          //   .filter(item =>
          //     item.name.toLowerCase().includes(filter.toLowerCase())
          //   )
          .map(item => (
            <ContactItem
            // key={item.id} item={item}
            // deleteItem={id => deleteItem(id)}
            />
          ))}
      </ul>
    </div>
  );
};
