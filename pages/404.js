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

            <section className="text-gray-600 body-font">
                <div className="lg:w-1/2 flex flex-col lg:items-center lg:justify-center lg:min-h-screen">
                <div className="flex flex-col md:items-start md:text-left mb-16 lg:mb-0 items-center text-center mx-4 lg:mx-16">
                    <h1 className="title-font text-3xl sm:text-3xl md:text-5xl lg:text-7xl 2xl:text-8xl mb-8 xl:mb-20 text-gray-900 font-black">Oooops! not found</h1>
                    <h2 className='font-semibold text-3xl text-black mb-8'>that page cannot be found</h2>
                    <p>go back to the <Link href="/"><a className='text-xl hover:text-purple-600 hover:underline mb-4'>homepage</a></Link></p>
                </div>

                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1694&q=80"
                    alt=""
                    />
                     {/* <Image 
                        src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1694&q=80"
                        alt="page background"
                        width={1694}
                        height={1161}
                        layout="fixed"
                        quality={100}
                    /> */}
                </div>
                </div>
            </section>
        </>
     );
}
 
export default NotFound;