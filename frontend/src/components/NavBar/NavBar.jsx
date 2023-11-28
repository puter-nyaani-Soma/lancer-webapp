import { useEffect,useState } from 'react'
import newRequest from "../../utils/newRequest";
import { Dialog, Disclosure, Popover } from '@headlessui/react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/trans-logo.png';
import {useNavigate} from 'react-router-dom'
import {

  Bars3Icon,
  BriefcaseIcon,
  DocumentPlusIcon,
  ShoppingCartIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ArrowLeftCircleIcon,
  ChevronDownIcon,
  XMarkIcon,
  StarIcon

} from '@heroicons/react/24/outline'
const seller = [
  { name: 'Gigs', description: 'Gigs you Posted', icon: BriefcaseIcon,Link:'/mygigs' },
  { name: 'Add new gig', description: 'Add a new Gig', icon: DocumentPlusIcon ,Link:'/add'},
  { name: 'Orders', description: "Orders recieved", icon: ShoppingCartIcon,Link:'/orders' },
  { name: 'Messages', description: 'Chat with your clients', icon: ChatBubbleOvalLeftEllipsisIcon ,Link:'/messages'},

]
const buyer =[
  { name: 'Orders', description: "Orders made", icon: ShoppingCartIcon,Link:'/orders' },
  { name: 'Messages', description: 'Chat with Sellers', icon: ChatBubbleOvalLeftEllipsisIcon ,Link:'/messages'},
]
import './NavBar.scss';
import UserFlyout from './UserFlyout'
const NavBar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [active, setActive] = useState(false)
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }
  const {pathname}=useLocation()
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log(currentUser)
  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", isActive)
    return () => {
      window.removeEventListener("scroll", isActive)

    }
  }, [])

  return (
    <header className={active || pathname!=='/'? "print:hidden z-99 transition-all duration-400 ease ctp-frappe sticky top-0 left-0 bg-gradient-to-b from-ctp-base to-ctp-crust active transition-all duration-2000 ease-in-out" : "ctp-frappe top-0 left-0 transition-all duration-2000 ease-in-out  sticky bg-gradient-to-b from-ctp-base to-ctp-crust "}>
      <nav className="mx-auto flex max-w-7xl  items-center justify-between lg:px-8 " aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to='/' >
            <span className="sr-only">Lancer</span>
            <img className="h-20 w-auto" src={logo} alt="" />
          </Link>
            {/* <p className=' h-20 w-auto'>
              &#128156;
              </p> */}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className=" inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />

          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end hidden lg:flex lg:flex-1 lg:justify-end items-center ctp-frappe">
          <Link to='/'  className="mr-4 text-sm font-semibold leading-6 text-white">
            Home
          </Link>
      
          
          
          
      
          {!currentUser &&
          <>
            
          </>
          }
          {
            currentUser ?
            (
              <UserFlyout currentUser={currentUser} />
            )
            :
            (
              <>
              <Link to='/login'  className=" mr-4 text-sm font-semibold leading-6 text-white">
              Log in
            </Link>
      
            <Link to='/register' className='border-2 border-ctp-pink transition duration-300 ease-in-out hover:bg-ctp-pink hover:border-ctp-pink text-white py-1 px-4 rounded '>join</Link>
              </>
            )
          }

        </div>
      </nav>
      <Dialog as="div" className="lg:hidden " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10 " />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-99 w-1/2 max-w-1/2  overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ctp-frappe bg-gradient-to-b from-ctp-base to-ctp-crust">
          <div className=" flex items-center justify-between">

            {
              currentUser &&
              (
                <>

                  <span className="sr-only">{currentUser.username}</span>
                  <img
                    className="h-8 w-auto"
                    src={currentUser.img ? currentUser.img :'./public/img/noavatar.jpg'}
                    alt="pfp"


                    />
                  <span className="h-8  w-auto text-white">
                    {currentUser.username}    <span className=' text-sm text-gray-300'>
                      {currentUser.isSeller? "seller" : "buyer"}
                    </span>
                  </span>
                  
                
                    </>


              )
            }


            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />


            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      {/* <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">


                      </Disclosure.Button> */}
                      <Disclosure.Panel className="mt-2 space-y-2">

                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {
                  !currentUser &&
                  <div className='-my-6 divide-y divide-gray-500/10'>
                    <div className="py-6">
                      <Link to="/register"

                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-gray-500"
                      >
                        <button>Join</button>
                      </Link>
                    </div>
                    <div className="py-6">
                      <Link to="/login"

                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-gray-500"
                      >
                        <button>Log in</button>
                      </Link>
                    </div>

                  </div>
                }
                {
                  currentUser && currentUser.isSeller &&
                   seller.map((item) => (
                <div key={item.name} className="group  relative flex gap-x-6 items-center rounded-lg p-4 hover:bg-gray-50">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div>
                    <Link to={item.Link} className="font-semibold text-white hover:text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </Link>
                   
                  </div>
                </div>
              ))}
                {
                  currentUser && !currentUser.isSeller &&
                   buyer.map((item) => (
                <div key={item.name} className="group  relative flex gap-x-6 items-center rounded-lg p-4 hover:bg-gray-50">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div>
                    <Link to={item.Link} className="font-semibold text-white hover:text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </Link>
                   
                  </div>
                </div>
              ))}
              {currentUser &&
              <div key='logout' className="group  relative flex gap-x-6 items-center rounded-lg p-4 mt-100 hover:bg-gray-50">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white group-hover:bg-white">
                    <ArrowLeftCircleIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div>
                  <Link onClick={handleLogout} className="font-semibold text-white hover:text-gray-900">
                      Logout
                      <span className="absolute inset-0" />
                    </Link>
                   
                  </div>
                </div>
}
             
                

              </div>
              
          
       
        
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      {/* <hr /> */}
      {/* <div className={(active || pathname !=='/' ) ? "md:flex lg:flex xl:flex sm:hidden xs:hidden transition-all duration-2000 ease-in-out bg-white text-gray-500 flex w-[100%] px-10 py-0 justify-between sm:flex-row  overflow-hidden " : " transition-all duration-2000 ease-in-out m-0  p-0 hidden"}>
        <span>
          <Link to='/gigs?search=design'>
            Graphics & Design
          </Link>
        </span>
        <span>
        <Link to='/gigs?search=web'>
          Web Development
          </Link>
        </span>
        <span>
        <Link to='/gigs?search=Data%20Entry'>
          Data Entry
          </Link>
        </span>
        <span>
        <Link to='/gigs?search=audio%20and%20video%20services'>
          Video Creation 
          </Link>
        </span>
        

      </div> */}
      <hr className='w-full border border-gray-400 border-t-0 border-l-0 border-r-0.5 border-b-0.5' />
    </header>
  )
}

export default NavBar;