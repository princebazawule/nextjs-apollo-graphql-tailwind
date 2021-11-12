import Link from 'next/link';
// import Image from '../../image';
import {sanitize} from '../../../utils/miscellaneous';

const Post = ( {post} ) => {

	return (
			<>
			<div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
				<span class="font-semibold title-font text-gray-700">CATEGORY</span>
				<span class="text-sm text-gray-500">12 Jun 2019</span>
			</div>
			
			<div class="md:flex-grow">
				<h2 class="text-2xl font-medium text-gray-900 title-font mb-2" dangerouslySetInnerHTML={{__html: sanitize( post?.title ?? '' )}}></h2>
				<p class="leading-relaxed" dangerouslySetInnerHTML={{__html: sanitize( post?.excerpt ?? '' )}}></p>
				<Link href={`/blog/${post?.slug}/`}>
					<a class="text-indigo-500 inline-flex items-center mt-4">Learn More
						<svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path d="M5 12h14"></path>
						<path d="M12 5l7 7-7 7"></path>
						</svg>
					</a>
					</Link>
			</div>
		</>
	);
};

export default Post;