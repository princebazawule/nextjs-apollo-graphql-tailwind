import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import client from '../src/apollo/client'
import { GET_CONTENT } from '../src/queries/get-content'
import styles from '../src/styles/Home.module.scss'
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
      
      <main className='px-5'>
        <div className="flex info-center justify-center h-screen">
      
          <div className="text-gray-900 p-10">
            <h1 className='font-bold text-8xl mb-8'>who&apos;s PixlD?</h1>
            {!info && <p>Loading...</p>}
            {info && ( 
              <>
                <div 
                  className={styles.profile}
                  dangerouslySetInnerHTML={{ __html: sanitize(info?.miniProfile)}} ></div>
                
                <div className="get-in-touch">
                  <Link href="/connect">
                    <a>
                      <button>get in touch</button>
                    </a>
                  </Link>
                </div>
              </>
            )}
          </div>
        
        </div>
      </main>
    </>
  )
}
