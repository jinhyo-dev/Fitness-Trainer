import { AppProps } from "next/app";
import '../styles/globals.css';
import '../styles/ArmPullDown.css';

function App({Component, pageProps}:AppProps) {
  return <Component {...pageProps} />
}

export default App