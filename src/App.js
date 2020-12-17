import { Component } from 'react';
import Container from './components/Container';
import SearchForm from './components/SearchForm';
import WeatherDisplay from './components/WeatherDisplay';

class App extends Component {
  state = {
    query: '',
  };

  handleSubmit = newSearch => {
    this.setState({ query: newSearch });
  };

  render() {
    const { query } = this.state;
    return (
      <Container>
        <SearchForm onHandleSubmit={this.handleSubmit} />
        {query && <WeatherDisplay name={query} />}
      </Container>
    );
  }
}

export default App;
