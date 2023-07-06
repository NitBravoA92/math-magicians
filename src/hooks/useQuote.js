import { useState } from "react";

const useQuote = (initialState) => {
  const [dataQuote, setDataQuote] = useState({
    loading: true,
    data: initialState,
    error: null,
  });

  return dataQuote;
};

export default useQuote;
