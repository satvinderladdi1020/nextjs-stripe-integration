// pages/checkout.js
import Head from 'next/head';
import StripeContainer from '../components/StripeContainer';
import CheckoutForm from '../components/CheckoutForm';

const CheckoutPage = () => {
  return (
    <div>
      <Head>
        <title>Next.js Stripe Example</title>
        <meta name="description" content="Next.js Stripe Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Next.js Stripe Example</h1>
        <StripeContainer>
          <CheckoutForm />
        </StripeContainer>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Next.js Stripe Example</p>
      </footer>
    </div>
  );
};

export default CheckoutPage;
