import { useState } from 'react';
import Container from './components/Container';
import SearchForm from './components/SearchForm';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [query, setQuery] = useState('');

  const handleSubmit = newSearch => {
    setQuery(newSearch);
  };

  return (
    <Container>
      <SearchForm onHandleSubmit={handleSubmit} />
      <WeatherDisplay name={query} />
    </Container>
  );
}

export default App;
