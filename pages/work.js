import Head from 'next/head'
import { Fragment } from 'react'
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


            <section className="text-gray-600 body-font">
                <div className="lg:w-1/2 flex flex-col lg:items-center lg:justify-center lg:min-h-screen">
                <div className="flex flex-col md:items-start md:text-left mb-16 lg:mb-0 items-center text-center mx-4 lg:mx-16">
                    <h1 className="title-font text-3xl sm:text-3xl md:text-5xl lg:text-7xl 2xl:text-8xl mb-8 xl:mb-20 text-gray-900 font-black">Selected work</h1>
                    
                    <div className="projects">
                        <div className="project-wrap flex flex-row flex-wrap">

                            {!projects && <p>Loading...</p>}
                            {projects && (projects.map((project, index) => {
                                    return (
                                        <Fragment key={project?.node?.workId}>
                                            <div 
                                                key={project?.node?.workId} 
                                                className="section m-8" 
                                                // onClick={() => showWorkDetail(index)}
                                            >
                                                <div className='content'>
                                                    <p className='font-semibold mb-4 text-black text-'>{project?.node?.works?.client} <span>{project?.node?.works?.projectType}</span></p>
                                                </div>
                                                <div className="overlay"></div>
                                                <Image 
                                                    src={project?.node?.works?.splash?.sourceUrl} 
                                                    alt={project?.node?.works?.client}
                                                    width={400}
                                                    height={250}
                                                    // layout="responsive"
                                                    quality={100}
                                                />
                                            </div>
                                            
                                            {/* {activeIndex !== null && activeIndex === index ? (<WorkGallery key={index} activeIndex={activeIndex} onClick={closeGallery} post={post} />) : ''} */}
                                        </Fragment>
                                    )
                                }))}
                        </div>
                    </div>
                </div>

                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    alt=""
                    />
                </div>
                </div>
            </section>
        </>
     );
}
 
export default Work;