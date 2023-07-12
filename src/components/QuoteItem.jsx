import useQuote from '../hooks/useQuote';

const QuoteItem = () => {
  const { loading, data, error } = useQuote({});

  return (
    <div id="display-quote">
      <p id="quote-text" className={`${(JSON.stringify(data) === '{}' || data === null) ? 'd-none' : ''}`}>
        <span id="quote">{data?.quote || ''}</span>
        <span id="author">
          {' — '}
          {data?.author || ''}
        </span>
      </p>
      <p id="loading-message" className={`${!loading ? 'd-none' : ''}`}>{ loading ? 'Loading Quote...' : '' }</p>
      <p id="error-message" className={`${!error ? 'd-none' : ''}`}>{ error || '' }</p>
    </div>
  );
};

export default QuoteItem;
