import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import client from '../src/apollo/client'
import { GET_CONTENT } from '../src/queries/get-content'
import { sanitize } from '../src/utils/miscellaneous'

export const getStaticProps = async (context) => {
  const { data, loading, networkStatus } = await client.query({
    query: GET_CONTENT
  })

  return {
    props: {
      data: {
        info: data?.info?.edges || []
      }
    },
    revalidate: 1
  }
}

export default function Home({ data }) {
  const router = useRouter
  const info = data?.info[0]?.node?.footerInfo

  return (
    <>
      <Head>
        <link rel="canonical" href={`https://pixldinc.com/${router.pathname}`} />

        <title>PixlD - We build beautiful websites</title>
        <meta name="title" content="PixlD - We build beautiful websites" />
        <meta name="description" content="We are a boutique, web design & development firm based in sunny Barbados" />
      
        {/* Open Graph / Facebook */}
        <meta name="og:title" content="PixlD - We build beautiful websites" />
        <meta name="og:description" content="We are a boutique, web design & development firm based in sunny Barbados" />

        {/* Twitter */}
        <meta name="twitter:title" content="PixlD - We build beautiful websites" />
        <meta name="twitter:description" content="We are a boutique, web design & development firm based in sunny Barbados" />
      </Head>

      <section className="text-gray-700 body-font">
        <div className="lg:w-1/2 flex flex-col lg:items-center lg:justify-center lg:min-h-screen">
          <div className="flex flex-col md:items-start md:text-left mb-16 lg:mb-0 items-center text-center mx-4 lg:mx-16">
            <h1 className="title-font text-3xl sm:text-3xl md:text-5xl lg:text-7xl 2xl:text-8xl mb-8 text-gray-900 font-black">Who&apos;s PixlD?</h1>
            
            {!info && <p>Loading...</p>}
            {info && ( 
              <>
                <div 
                  className="mb-8 leading-relaxed text-lg lg:text-2xl xl:text-2xl 2xl:text-2xl mini-profile"
                  dangerouslySetInnerHTML={{ __html: sanitize(info?.miniProfile)}} ></div>
                
                <div className="get-in-touch flex justify-center">
                  <Link href="/connect">
                    <a>
                      <button className="inline-flex text-white bg-indigo-500 border-0 py-4 px-8 focus:outline-none hover:bg-indigo-600 rounded text-3xl capitalize">get in touch</button>
                    </a>
                  </Link>
                </div>
              </>
            )}
          </div>

          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  )
}
