import Link from 'next/link'
import { useRouter } from 'next/router'

const menu = [
  { title: 'Clients', path: '/clients' },
  { title: 'Work', path: '/work' },
  { title: 'Connect', path: '/connect' },
  { title: 'Blog', path: '/blog' },
]

const Navbar = () => {

  const router = useRouter()

    return ( 
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">


          {menu.map((item, index) => {
            return (
              <Link key={index} href={item.path}>
                <a
                  data-cy="nav-item" 
                  className={`transition duration-300 mr-5 py-1 px-2 rounded font-semibold text-black cursor-pointer ${
                    router.pathname === item.path
                      ? 'text-indigo-600 bg-gray-100 cursor-not-allowed'
                      : 'hover:bg-gray-100 hover:text-indigo-600'
                  }`}
                >
                  {item.title}
                </a>
              </Link>
            )
          })}
        </nav>
     );
}
 
export default Navbar;