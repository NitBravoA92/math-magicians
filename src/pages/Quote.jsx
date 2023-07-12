import Layout from './Layout';
import QuoteItem from '../components/QuoteItem';
import '../styles/Quote.css';

const Quote = () => (
  <Layout>
    <section id="quote">
      <div className="page-content">
        <QuoteItem />
      </div>
    </section>
  </Layout>
);

export default Quote;
