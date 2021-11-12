import Head from 'next/head'
import Image from 'next/image'
import client from '../src/apollo/client'
import { GET_CONTENT } from '../src/queries/get-content'
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



            <section className="text-gray-600 body-font">
                <div className="lg:w-1/2 flex flex-col lg:items-center lg:justify-center lg:min-h-screen">
                <div className="flex flex-col md:items-start md:text-left mb-16 lg:mb-0 items-center text-center mx-4 lg:mx-16">
                    <h1 className="title-font text-3xl sm:text-3xl md:text-5xl lg:text-7xl 2xl:text-8xl mb-8 xl:mb-20 text-gray-900 font-black">We&apos;ve worked with</h1>
                    
                    <div className='client-list flex flex-row flex-wrap'>
                        {!clients && <p>Loading...</p>}
                        {clients && (clients.map(client => {
                            return (
                                <div 
                                    key={client?.node?.clientId} 
                                    className='m-10'>
                                        <Image 
                                            src={client?.node?.clients?.logo?.sourceUrl} 
                                            alt={client?.node?.clients?.clientName}
                                            width={125}
                                            height={125}
                                            // layout="fill"
                                            quality={100}
                                        />
                                </div>
                            )
                        }))}
                    </div>
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
 
export default Clients;