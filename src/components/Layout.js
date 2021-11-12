import Head from 'next/head'
import Footer from "./Footer";
import Header from './Header';

const Layout = ({ children }) => {
    return ( 
        <div className=''>
            <Head>
                {/* Open Graph / Facebook */}
                <meta name="og:type" content="website" />
                <meta name="og:url" content="https://pixldinc.com/" />
                <meta name="og:image" content="https://pixldinc.link/pixldcms/assets/screenshot.png" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://pixldinc.com/" />
                <meta name="twitter:image" content="https://pixldinc.link/pixldcms/assets/screenshot.png" />
                
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header />
            <div className='min-h-screen'>
                { children }
            </div>
            <Footer />
        </div>
     );
}
 
export default Layout;