import '../styles/globals.css'
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        
      </Head> */}
      <Component {...pageProps} />
    </>
  )
}

// export default appWithTranslation(App, nextI18NextConfig)
