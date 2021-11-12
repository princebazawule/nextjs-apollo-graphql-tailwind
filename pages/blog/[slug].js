import Head from 'next/head'
import {FALLBACK, handleRedirectsAndReturnData} from '../../src/utils/slug'
import client from '../../src/apollo/client'
import {isEmpty} from 'lodash';
import {sanitize} from '../../src/utils/miscellaneous'
import {GET_POST} from '../../src/queries/posts/get-post'
import {GET_POST_SLUGS} from '../../src/queries/posts/get-posts'
import { useRouter } from 'next/router';

// import styles from '../../styles/Blog.module.scss'


export const getStaticPaths = async () => {
	const { data } = await client.query( {
		query: GET_POST_SLUGS
	} );

	const pathsData = [];

	data?.posts?.nodes && data?.posts?.nodes.map( post => {
		if ( !isEmpty( post?.slug ) ) {
			pathsData.push( {params: { slug: post?.slug }} );
		}
	} );

	return {
		paths: pathsData,
		fallback: FALLBACK
	};
}

export const getStaticProps = async ({ params }) => {
	const { data, errors } = await client.query( {
		query: GET_POST,
		variables: {
			uri: params?.slug ?? '/',
		},
	} );

	const defaultProps = {
		props: {
			data: data || {}
		},
		/**
         * Revalidate means that if a new request comes to server, then every 1 sec it will check
         * if the data is changed, if it is changed then it will update the
         * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
         */
		revalidate: 1,
	};

	return handleRedirectsAndReturnData( defaultProps, data, errors, 'post' );
}


const BlogDetails = ({ data }) => {
    const router = useRouter()

    if ( router.isFallback ) {
		return <div>Loading...</div>;
	}

    return (
		<>
		
		<Head>
				<link rel="canonical" href={`https://pixldinc.com/${sanitize(data?.post?.slug)}`} />

				<title>{`PixlD - ${sanitize(data?.post?.title)}`}</title>
                <meta name="title" content={`PixlD - ${sanitize(data?.post?.title)}`} />
                <meta name="description" content="Our latest web, design & tech musings" />
                
                {/* Open Graph / Facebook */}
                <meta name="og:title" content={`PixlD - ${sanitize(data?.post?.title)}`} />
                <meta name="og:description" content="Our latest web, design & tech musings" />

                {/* Twitter */}
                <meta name="twitter:title" content={`PixlD - ${sanitize(data?.post?.title)}`} />
                <meta name="twitter:description" content="Our latest web, design & tech musings" />
            </Head>

			<main className='min-w-full px-5'>
				<div className=''>
					<h1 dangerouslySetInnerHTML ={{__html: sanitize(data?.post?.title)}}></h1>
				</div>
				
				<div dangerouslySetInnerHTML ={{__html: sanitize(data?.post?.content)}}></div>
			</main>
		</>
    )
}
 
export default BlogDetails;