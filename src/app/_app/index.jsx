// src/pages/_app.js
import { GlobalProvider } from "@/context/GlobalContext";
import "../styles/globals.css";

function Home({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default Home;
