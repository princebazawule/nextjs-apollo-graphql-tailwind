import {isEmpty} from 'lodash';
import Link from 'next/link';
const Next = ( {currentPageNo, pagesCount, postName} ) => {

	if ( ! currentPageNo || ! pagesCount || isEmpty( postName ) ) {
		return null;
	}

	// If you are on the last page, dont show next link.
	if ( pagesCount < currentPageNo + 1 ) {
		return null;
	}

	const paginationLink = `/${postName}/page/${currentPageNo + 1}/`;

	return (
		<Link href={paginationLink}>
			<a 
				className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
			>
				Next
			</a>
		</Link>
	);
};

export default Next;