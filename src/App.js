import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
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
      <ToastContainer autoClose={3700} position="bottom-center" />
    </Container>
  );
}

export default App;
