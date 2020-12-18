import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import s from './SearchForm.module.css';

function SearchForm({ onHandleSubmit }) {
  const [query, setQuery] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return toast.info('😱 Please enter a value for search city!');
    }
    onHandleSubmit(query);
    setQuery('');
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={onSubmit}>
        <input
          className={s.input}
          type="text"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search city..."
          onChange={({ target }) => setQuery(target.value)}
        />
        <button type="submit" className={s.btn}>
          <span className={s.label}>Search</span>
        </button>
      </form>
    </header>
  );
}

SearchForm.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
