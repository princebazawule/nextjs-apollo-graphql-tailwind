import Link from 'next/link';
import PropTypes from 'prop-types';
import {useRouter} from 'next/router';
import {createPaginationLinks} from '../../../utils/pagination';
import cx from 'classnames';
import Previous from './previous';
import Next from './next';

const Pagination = ( {pagesCount, postName} ) => {
	if ( ! pagesCount || ! postName ) {
		return null;
	}

	const router = useRouter();
	const currentPageNo = parseInt( router?.query?.pageNo ) || 1;

	const paginationLinks = createPaginationLinks( currentPageNo, pagesCount );

	return (
		<div className='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
			<nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px mx-auto mt-8" aria-label="Pagination">

			<Previous currentPageNo={currentPageNo} postName={postName}/>

			{paginationLinks.map( ( pageNo, index ) => {

				const paginationLink = `/${postName}/page/${pageNo}/`;

				return (
					'number' === typeof pageNo ? (
						<Link key={`id-${index}`} href={paginationLink}>
							<a
								className={cx( 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium', {
									'is-active z-10 bg-indigo-50 border-indigo-500 text-indigo-600': pageNo === currentPageNo
								} )}
							>
								{pageNo}
							</a>
						</Link>
					) : (
						<span key={`id-${index}`} className="px-3 py-2">{pageNo}</span>
					)
				);
			} )}
			<Next currentPageNo={currentPageNo} pagesCount={pagesCount} postName={postName}/>
			</nav>
		</div>
	);
};

Pagination.propTypes = {
	pagesCount: PropTypes.number,
	postName: PropTypes.string,
};

Pagination.defaultProps = {
	pagesCount: 0,
	postName: 'blog',
};

export default Pagination;