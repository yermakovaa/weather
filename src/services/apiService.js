const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'b3338f4f3ebc93b38a8127120d682051';

function apiService(name) {
  return fetch(
    `${BASE_URL}?q=${name}&lang=en&units=metric&appid=${API_KEY}`,
  ).then(res => res.json());
}

export default apiService;
