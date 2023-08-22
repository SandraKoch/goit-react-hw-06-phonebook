import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { filterContacts } from 'redux/actions';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const query = e.target.value;
    dispatch(filterContacts(query));
  };

  return (
    <input
      className={css.input}
      type="text"
      onChange={handleFilterChange}
      placeholder="Search contacts by name..."
    />
  );
};
