import { useEffect, useState } from 'react';

const useQuote = (initialState) => {
  const [dataQuote, setDataQuote] = useState({
    loading: true,
    data: initialState,
    error: null,
  });

  const [renderState, setRenderState] = useState(false);

  const getQuote = async () => {
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

    if (!response.ok) {
      setDataQuote({
        loading: false,
        data: null,
        error: 'Error in the request for a Quote!',
      });
      return;
    }

    const [dataResp] = await response.json();
    const { quote, author } = dataResp;

    setDataQuote({
      loading: false,
      data: { quote, author },
      error: null,
    });
  };

  useEffect(() => {
    if (!renderState) {
      getQuote();
      setRenderState(!renderState);
    }
  }, [renderState]);

  return dataQuote;
};

export default useQuote;
