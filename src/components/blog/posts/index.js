import {isEmpty, isArray} from 'lodash';
import Post from '../post';
import PropTypes from 'prop-types';

const Posts = ( {posts} ) => {

	if ( isEmpty( posts ) && ! isArray( posts ) ) {
		return null;
	}

	return (
		<section className="text-gray-600 body-font overflow-hidden">
			<div className="container px-5 py-24 mx-auto">
				<div className="-my-8 divide-y-2 divide-gray-100">
				{
					posts.map( ( post, index ) => {
						return (
							<div key={`${post?.node?.id}-${index}` ?? ''} className="py-8 flex flex-wrap md:flex-nowrap">
								<Post post={post?.node}/>
							</div>
						);
					} )
				}
				</div>
			</div>
		</section>
	);
};

Posts.propTypes = {
	posts: PropTypes.array
};

Posts.defaultProps = {
	posts: []
};

export default Posts;