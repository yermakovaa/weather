import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './SearchForm.module.css';

function SearchForm({ onHandleSubmit }) {
  const [query, setQuery] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return alert('😱 Please enter a value for search images!');
    }
    onHandleSubmit(query);
    setQuery('');
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={onSubmit}>
        <button type="submit" className={s.btn}>
          <span className={s.label}>Search</span>
        </button>

        <input
          className={s.input}
          type="text"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Enter a city"
          onChange={({ target }) => setQuery(target.value)}
        />
      </form>
    </header>
  );
}

SearchForm.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
