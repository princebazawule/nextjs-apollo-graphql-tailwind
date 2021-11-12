// import { useState, useEffect } from 'react'
// import Head from 'next/head'
// import Image from 'next/image'
// import Link from 'next/link'
import client from '../../src/apollo/client'
// import {sanitize} from '../../src/utils/miscellaneous'
import { PER_PAGE_FIRST, totalPagesCount } from '../../src/utils/pagination';
import Pagination from '../../src/components/blog/pagination';
import Posts from '../../src/components/blog/posts';
import {handleRedirectsAndReturnData} from '../../src/utils/slug';
import {GET_POSTS} from '../../src/queries/posts/get-posts';

export const getStaticProps = async () => {
	const { data, errors } = await client.query( {
		query: GET_POSTS,
		variables: {
			uri: '/blog/',
			perPage: PER_PAGE_FIRST,
			offset: null,
		},
	} );

	const defaultProps = {
		props: {
			data: data || {}
		},
		revalidate: 1,
	};

	return handleRedirectsAndReturnData( defaultProps, data, errors, 'posts' );
}

const Blog = ({ data }) => {
    console.log('data ', data)
    // const posts = data?.posts?.edges
    const pagesCount = totalPagesCount( data?.posts?.pageInfo?.offsetPagination?.total ?? 0 );
    // console.log('pagesCount ', pagesCount)
    return (
		<>
			<Posts posts={data?.posts?.edges ?? []}/>
			<Pagination pagesCount={pagesCount} postName="blog" />
		</>
	);

    // return ( 
    //     <p>hello</p>
        // <>
        //     <Head>
        //         <link rel="canonical" href={`https://pixldinc.com/${sanitize(data?.post?.slug)}`} />

        //         <title>PixlD - Blog</title>
        //         <meta name="title" content="PixlD - Blog" />
        //         <meta name="description" content="Our latest web, design & tech musings" />
                
        //         {/* Open Graph / Facebook */}
        //         <meta name="og:title" content="PixlD - Blog" />
        //         <meta name="og:description" content="Our latest web, design & tech musings" />

        //         {/* Twitter */}
        //         <meta name="twitter:title" content="PixlD - Blog" />
        //         <meta name="twitter:description" content="Our latest web, design & tech musings" />
        //     </Head>
            
        //     <main className='min-w-full px-5'>
        //         <div className=''>
        //             <h1>latest articles</h1>
        //         </div>

        //         <div className='client-list'>
                    
        //             {!posts && <div>Loading...</div>}
        //             {posts && (posts.map(post => {
        //                 return (
        //                     <article
        //                         key={post?.node?.id}
        //                         className="blog-item">
        //                         <header>
        //                             <Link href={`/blog/${post?.node?.slug}`}>
        //                                 <a>
        //                                     <h2 dangerouslySetInnerHTML ={{__html: sanitize(post?.node?.title)}}></h2>
        //                                     {/* <div>
        //                                         <span dangerouslySetInnerHTML ={{__html: sanitize(post?.node?.author.node.firstName)}}></span> <span dangerouslySetInnerHTML ={{__html: sanitize(post?.node?.author.node.lastName)}}></span>
        //                                         <div>
        //                                             {(new Date(post?.node?.date)).getDate()+'/'+((new Date(post?.node?.date)).getMonth()+1)+'/'+(new Date(post?.node?.date)).getFullYear()}
        //                                         </div>
        //                                     </div> */}
        //                                 </a>
        //                             </Link>
        //                         </header>

        //                         <p className='text-gray-800 text-base' dangerouslySetInnerHTML ={{__html: sanitize(post?.node?.excerpt)}}></p>
        //                     </article>
        //                 )
        //             }))}
        //         </div>

        //         <Pagination 
        //             pagesCount={pagesCount} 
        //             postName="blog" 
        //         />
        //     </main>
        // </>
    //  );
}

export default Blog;