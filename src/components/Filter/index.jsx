import css from './Filter.module.css';

export const Filter = ({ onFilter }) => {
  const handleFilterChange = e => {
    onFilter(e.target.value);
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
