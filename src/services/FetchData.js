const ENDPOINT = 'https://rickandmortyapi.com/api/character/';

const FetchData = () => fetch(ENDPOINT).then(response => response.json());

export default FetchData;