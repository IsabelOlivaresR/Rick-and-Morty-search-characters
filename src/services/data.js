const getDataFromApi = () => {
  return fetch(``)
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
    });
};

export default getDataFromApi;
