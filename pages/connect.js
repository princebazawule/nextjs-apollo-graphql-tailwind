import Head from 'next/head'
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
          info: data?.info?.edges || []
        }
      },
      revalidate: 1
    }
  }

const Connect = ({ data }) => {
    
    const router = useRouter
    const info = data.info[0].node.footerInfo

    const sendLinkClickEvent = (key) => {
        console.log(key)
        // ReactGA.event({
        //     category: 'Link Click',
        //     action: key
        // });
    }
    return ( 
        <>
            <Head>
                <link rel="canonical" href={`https://pixldinc.com/${router.pathname}`} />

                <title>PixlD - Connect</title>
                <meta name="title" content="PixlD - Connect" />
                <meta name="description" content="Boutique web design & development based in Barbados. Get in touch with us" />
            
                {/* Open Graph / Facebook */}
                <meta name="og:title" content="PixlD - Connect" />
                <meta name="og:description" content="Boutique web design & development based in Barbados. Get in touch with us" />

                {/* Twitter */}
                <meta name="twitter:title" content="PixlD - Connect" />
                <meta name="twitter:description" content="Boutique web design & development based in Barbados. Get in touch with us" />
            </Head>



            <section className="text-gray-600 body-font">
                <div className="lg:w-1/2 flex flex-col lg:items-center lg:justify-center lg:min-h-screen">
                <div className="flex flex-col md:items-start md:text-left mb-16 lg:mb-0 items-center text-center mx-4 lg:mx-16">
                    <h1 className="title-font text-3xl sm:text-3xl md:text-5xl lg:text-7xl 2xl:text-8xl text-gray-900 font-black mb-20">Connect</h1>
                    
                    <div className='connect-list'>
                        <div className='socials mb-16'>
                            <h3 className='font-semibold text-3xl text-black mb-8'>socials</h3>

                            {info && (
                                <ul>
                                    <li><a className='text-xl hover:text-purple-600 hover:underline mb-4' href={info.twitter} target='_blank' rel='noreferrer' onClick={() => sendLinkClickEvent('twitter')} title={'twitter'}>twitter</a></li>
                                    <li><a className='text-xl hover:text-purple-600 hover:underline mb-4' href={info.facebook} target='_blank' rel='noreferrer' onClick={() => sendLinkClickEvent('facebook')} title={'facebook'}>facebook</a></li>
                                    <li><a className='text-xl hover:text-purple-600 hover:underline mb-4' href={info.linkedin} target='_blank' rel='noreferrer' onClick={() => sendLinkClickEvent('linkedin')} title={'linkedin'}>linkedin</a></li>
                                </ul>
                            )}
                        </div>

                        <div className='hello mb-16'>
                            <h3 className='font-semibold text-3xl text-black mb-8'>say hello</h3>
                            
                            {info && (
                                <ul>
                                    <li><a className='text-xl hover:text-purple-600 hover:underline mb-4' href={info.email} target='_blank' rel='noreferrer' onClick={() => sendLinkClickEvent('email')} title={'email'}>hello@pixldinc.com</a></li>
                                    <li><a className='text-xl hover:text-purple-600 hover:underline mb-4' href={info.skype} target='_blank' rel='noreferrer' onClick={() => sendLinkClickEvent('skype')} title={'skype'}>skype call</a></li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>

                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                    src="https://images.unsplash.com/photo-1532154066703-3973764c81fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                    alt=""
                    />
                </div>
                </div>
            </section>
        </>
     );
}
 
export default Connect;