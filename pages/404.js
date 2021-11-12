import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter()

    useEffect( () => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])
    return ( 

        <>
            <Head>
                <link rel="canonical" href={`https://pixldinc.com/404`} />

                <title>PixlD - not found</title>
                <meta name="title" content="PixlD - Page not found" />
                <meta name="description" content="We are a boutique, web design & development firm based in sunny Barbados" />

                {/* Open Graph / Facebook */}
                <meta name="og:title" content="PixlD - Page not found" />
                <meta name="og:description" content="We are a boutique, web design & development firm based in sunny Barbados" />

                {/* Twitter */}
                <meta name="twitter:title" content="PixlD - Page not found" />
                <meta name="twitter:description" content="We are a boutique, web design & development firm based in sunny Barbados" />
            </Head>
            
            <div className='min-w-full px-5'>
                <h1>Oooops! not found</h1>
                <h2>that page cannot be found</h2>
                <p>go back to the <Link href="/"><a>homepage</a></Link></p>
            </div>
        </>
     );
}
 
export default NotFound;