const apiRequest = async () => {
  const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/?page=1');
  const response = await request.json();
  const { results } = response;
  return results;
};

export default apiRequest;
