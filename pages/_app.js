import '../styles/globals.css'
import '@splidejs/react-splide/css';
import Navbar from '../components/Navbar'
import { Barlow, Barlow_Condensed, Bellefair } from 'next/font/google'
const barlow = Barlow({ weight: "400", subsets: ['latin'], variable: '--font-barlow', })

const barlowCondensed = Barlow_Condensed({ weight: "400", subsets: ['latin'], variable: '--font-barlowCondensed', })

const bellefair = Bellefair({ weight: "400", subsets: ['latin'], variable: '--font-bellefair', })
function MyApp({ Component, pageProps }) {
  return <>
    <div className={`${barlow.variable} ${bellefair.variable} ${barlowCondensed.variable}`}>
      <Navbar />
      <Component {...pageProps} />
    </div >
  </>
}

export default MyApp
