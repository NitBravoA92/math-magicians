const apiRequest = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-Api-Key': 'suyXArl0QxwZhSpQnumKzQ==NWZw3xiMxfy6yrAb',
    },
  };

  const response = await fetch(
    'https://api.api-ninjas.com/v1/quotes?category=computers&limit=1',
    options,
  );

  const [dataResp] = await response.json();

  return dataResp;
};

export default apiRequest;
