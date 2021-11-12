import Head from 'next/head'
import { Fragment } from 'react'
import Image from 'next/image'
import client from '../src/apollo/client'
import { GET_CONTENT } from '../src/queries/get-content'
import styles from '../src/styles/Work.module.scss'
import { useRouter } from 'next/router'

export const getStaticProps = async (context) => {
    const { data, loading, networkStatus } = await client.query({
      query: GET_CONTENT
    })

    return {
      props: {
        data: {
            projects: data?.work?.edges || []
        }
      },
      revalidate: 1
    }
}


const Work = ({ data }) => {
    const router = useRouter()
    const projects = data?.projects.filter(project => project?.node?.works?.display)

    return ( 
        <>
            <Head>
                <link rel="canonical" href={`https://pixldinc.com/${router.pathname}`} />

                <title>PixlD - Work</title>
                <meta name="title" content="PixlD - Work" />
                <meta name="description" content="Boutique web design & development based in Barbados. Here is some of our work" />
            
                {/* Open Graph / Facebook */}
                <meta name="og:title" content="PixlD - Work" />
                <meta name="og:description" content="Boutique web design & development based in Barbados. Here is some of our work" />

                {/* Twitter */}
                <meta name="twitter:title" content="PixlD - Work" />
                <meta name="twitter:description" content="Boutique web design & development based in Barbados. Here is some of our work" />
            </Head>

            <main className='min-w-full px-5'>
                <div className="work-container">
                    <>
                        <h1 className={styles.title}>selected work</h1>

                        <div className="projects">
                            <div className="project-wrap">

                                {!projects && <p>Loading...</p>}
                                {projects && (projects.map((project, index) => {
                                        return (
                                            <Fragment key={project?.node?.workId}>
                                                <div key={project?.node?.workId} className="section" onClick={() => showWorkDetail(index)}>
                                                    <div className='content'>
                                                        <p>{project?.node?.works?.client} <span>{project?.node?.works?.projectType}</span></p>
                                                    </div>
                                                    <div className="overlay"></div>
                                                    <Image 
                                                        src={project?.node?.works?.splash?.sourceUrl} 
                                                        alt={project?.node?.works?.client}
                                                        width={2400}
                                                        height={1598}
                                                        layout="responsive"
                                                        quality={65}
                                                    />
                                                </div>
                                                
                                                {/* {activeIndex !== null && activeIndex === index ? (<WorkGallery key={index} activeIndex={activeIndex} onClick={closeGallery} post={post} />) : ''} */}
                                            </Fragment>
                                        )
                                    }))}
                            </div>
                        </div>
                    </>
                </div>
            </main>
        </>
     );
}
 
export default Work;