import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    e.preventDefault();
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="filter"
        name="filter"
        onChange={handleFilter}
      />
    </label>
  );
};

export default Filter;
