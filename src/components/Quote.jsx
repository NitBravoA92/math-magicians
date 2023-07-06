import useQuote from '../hooks/useQuote';

const Quote = () => {
  const { loading, data, error } = useQuote({});
  console.log('loading: ' + loading, 'data: ' + data?.quote, 'error: ' + error);
  return (
    <section id="quotes" className="page-content">
      <div className="container">
        <div id="display-quote">
          <p id='quote-text' className={`${JSON.stringify(data) === '{}' ? 'd-none' : ''}`}>
            <i>{`"${data.quote}",`}</i><b>{`${data.author}`}</b>
          </p>
          <p id='loading-message' className={`${!loading ? 'd-none' : ''}`}>{ loading ? 'Loading Quote...' : '' }</p>
          <p id='error-message' className={`${!error ? 'd-none' : ''}`}>{ error || '' }</p>
        </div>
      </div>
    </section>
  )
}

export default Quote;