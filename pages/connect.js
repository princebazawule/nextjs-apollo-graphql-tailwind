import Head from 'next/head'
import client from '../src/apollo/client'
import {sanitize} from '../src/utils/miscellaneous'
import { GET_CONTENT } from '../src/queries/get-content'
import styles from '../src/styles/Connect.module.scss'
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

            <main className='min-w-full px-5'>
                <div className='connect-container'>
                        <div className="connect-heading">
                            <h1 className={styles.title}>connect</h1>
                        </div>
                        
                        <div className='connect-list'>
                            <div className='socials'>
                                <h3>socials</h3>

                                {info && (
                                    <ul>
                                        <li><a href={info.twitter} target='_blank' rel='noreferrer' onClick={() => sendLinkClickEvent('twitter')} title={'twitter'}>twitter</a></li>
                                        <li><a href={info.facebook} target='_blank' rel='noreferrer' onClick={() => sendLinkClickEvent('facebook')} title={'facebook'}>facebook</a></li>
                                        <li><a href={info.linkedin} target='_blank' rel='noreferrer' onClick={() => sendLinkClickEvent('linkedin')} title={'linkedin'}>linkedin</a></li>
                                    </ul>
                                )}
                            </div>

                            <div className='hello'>
                                <h3>say hello</h3>
                                
                                {info && (
                                    <ul>
                                        <li><a href={info.email} target='_blank' rel='noreferrer' onClick={() => sendLinkClickEvent('email')} title={'email'}>hello@pixldinc.com</a></li>
                                        <li><a href={info.skype} target='_blank' rel='noreferrer' onClick={() => sendLinkClickEvent('skype')} title={'skype'}>skype call</a></li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
            </main>
        </>
     );
}
 
export default Connect;