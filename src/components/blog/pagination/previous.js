import {isEmpty} from 'lodash';
import Link from 'next/link';

const Previous = ( {currentPageNo, postName} ) => {

	if ( ! currentPageNo || isEmpty( postName ) ) {
		return null;
	}

	// If you are on the first page, dont show previous link.
	if ( 0 === currentPageNo - 1 ) {
		return null;
	}

	const paginationLink = `/${postName}/page/${currentPageNo - 1}/`;

	return (
		<Link href={paginationLink}>
			<a 
				className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
			>
				Previous
			</a>
		</Link>
	);
};

export default Previous;