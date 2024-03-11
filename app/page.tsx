import "../styles/globals.css";
import Header from "./component/Header/Header";
import Footer from "./component/footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
