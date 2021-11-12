import Head from 'next/head'
import Image from 'next/image'
import {sanitize} from '../src/utils/miscellaneous'
import client from '../src/apollo/client'
import { GET_CONTENT } from '../src/queries/get-content'
import styles from '../src/styles/Clients.module.scss'
import { useRouter } from 'next/router'

export const getStaticProps = async (context) => {
    const { data, loading, networkStatus } = await client.query({
      query: GET_CONTENT
    })

    return {
      props: {
        data: {
          clients: data?.clients?.edges || []
        }
      },
      revalidate: 1
    }
}

const Clients = ({ data }) => {
    
    const router = useRouter()
    const clients = data?.clients.filter(client => client?.node?.clients?.display)
    console.log(router)

    return ( 
        <>
            <Head>
                <link rel="canonical" href={`https://pixldinc.com/${router.pathname}`} />

                <title>PixlD - Clients</title>
                <meta name="title" content="PixlD - Clients" />
                <meta name="description" content="Boutique web design & development based in Barbados. Here are some clients we've worked with" />
                
                {/* Open Graph / Facebook */}
                <meta name="og:title" content="PixlD - Clients" />
                <meta name="og:description" content="Boutique web design & development based in Barbados. Here are some clients we've worked with" />

                {/* Twitter */}
                <meta name="twitter:title" content="PixlD - Clients" />
                <meta name="twitter:description" content="Boutique web design & development based in Barbados. Here are some clients we've worked with" />
            </Head>
            
            <main className='min-w-full px-5'>
                <div className={styles.title}>
                    <h1>we&apos;ve worked with</h1>
                </div>

                <div className='client-list'>
                    {!clients && <p>Loading...</p>}
                    {clients && (clients.map(client => {
                        return (
                            <div 
                                key={client?.node?.clientId} 
                                className=''>
                                    <Image 
                                        src={client?.node?.clients?.logo?.sourceUrl} 
                                        alt={client?.node?.clients?.clientName}
                                        width={2400}
                                        height={1598}
                                        layout="responsive"
                                        quality={65}
                                    />
                            </div>
                        )
                    }))}
                </div>
            </main>
        </>
     );
}
 
export default Clients;