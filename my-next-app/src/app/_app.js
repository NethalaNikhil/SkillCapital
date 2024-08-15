import Layout from '../components/layout';
import '../styles/globals.css'; 

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />  // This renders the active page
    </Layout>
  );
}

export default MyApp;
