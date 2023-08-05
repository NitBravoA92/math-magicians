import Layout from './Layout';
import '../styles/Home.css';

const Home = () => (
  <Layout>
    <section id="home">
      <h1 className="page-title">Welcome to our page!</h1>
      <div className="page-content">
        <p className="home-info">
          Math Magicians is a web application aimed at lovers of mathematics and calculators.
          We can say that calculations are a fundamental part of our life.
          We experience them in every aspect of our lives; children, adults, or in our work.
          However, some calculations are easy but there may be some that are somewhat more
          complicated for us and we need the help of a tool that quickly solves them for us.
          That&apos;s where the beloved calculators come in.
        </p>
        <p className="home-info">
          Calculators are a fundamental part of our lives and most of us have to
          use them at one point or another.
          Those people who are highly dependent on calculators can reduce
          their dependency by switching to using an online
          calculator such as the one provided by this website.
        </p>
      </div>
    </section>
  </Layout>
);

export default Home;
