import { AppProps } from "next/app";
import '../styles/globals.css';
import '../styles/ArmPullDown.css';
import '../styles/BarbellCurl.css';
import '../styles/BarbellRow.css';
import '../styles/BenchPress.css';
import '../styles/Deadlift.css';
import '../styles/LegPress.css';
import '../styles/Squat.css';
import '../styles/index.css'

function App({Component, pageProps}:AppProps) {
  return <Component {...pageProps} />
}

export default App