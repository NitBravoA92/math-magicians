import { useEffect, useState } from 'react';
import apiRequest from '../logic/apiRequest';

const useQuote = (initialState) => {
  const [dataQuote, setDataQuote] = useState({
    loading: true,
    data: initialState,
    error: null,
  });

  const [renderState, setRenderState] = useState(false);

  const getQuote = async () => {
    try {
      const { quote, author } = await apiRequest();
      setDataQuote({
        loading: false,
        data: { quote, author },
        error: null,
      });
    } catch (error) {
      setDataQuote({
        loading: false,
        data: null,
        error: error.message,
      });
    }
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
