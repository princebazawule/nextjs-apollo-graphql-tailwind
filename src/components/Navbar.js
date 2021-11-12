import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href="/clients">
            <a
              data-cy="nav-item" 
              className="mr-5 hover:text-gray-900">Clients</a>
          </Link>
          <Link
            href="/work">
            <a
              data-cy="nav-item" 
              className="mr-5 hover:text-gray-900">Work</a>
          </Link>
          <Link
            href="/connect">
            <a
              data-cy="nav-item" 
              className="mr-5 hover:text-gray-900">Connect</a>
          </Link>
          <Link
            href="/blog">
            <a
              data-cy="nav-item" 
              className="mr-5 hover:text-gray-900">Blog</a>
          </Link>
        </nav>
     );
}
 
export default Navbar;