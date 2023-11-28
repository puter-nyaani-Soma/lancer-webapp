import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import newRequest from '../../utils/newRequest'
import { useNavigate } from 'react-router-dom'
import {
 
  BriefcaseIcon,
  DocumentPlusIcon,
  ShoppingCartIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ArrowLeftCircleIcon,
  ChevronDownIcon
  
} from '@heroicons/react/24/outline'

import { Link } from 'react-router-dom'

const seller = [
  { name: 'Gigs', description: 'Gigs you Posted', icon: BriefcaseIcon,Link:'/mygigs' },
  { name: 'Add new gig', description: 'Add a new Gig', icon: DocumentPlusIcon ,Link:'/add'},
  { name: 'Orders', description: "Orders recieved", icon: ShoppingCartIcon,Link:'/orders' },
  { name: 'Messages', description: 'Chat with your clients', icon: ChatBubbleOvalLeftEllipsisIcon ,Link:'/messages'},

]
const buyer =[
  { name: 'Orders', description: "Orders made", icon: ShoppingCartIcon,Link:'/orders' },
  { name: 'Messages', description: 'Chat with your sellers', icon: ChatBubbleOvalLeftEllipsisIcon ,Link:'/messages'},
]
const callsToAction = [
  { name: 'Logout', icon: ArrowLeftCircleIcon },
]
const UserFlyout=({currentUser})=> {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        <span className="mr-4 text-sm font-semibold leading-6 text-white">{currentUser.username}
        </span>
        <img className="h-7 w-7 rounded-full " src={currentUser.img ? currentUser.img : './public/img/noavatar.jpg'} alt="" />
        <ChevronDownIcon className="h-3 w-3 mr-4 text-sm font-semibold leading-6 text-white" aria-hidden="true" />
      
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/5 z-10 mt-5 flex w-screen max-w-sm -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {currentUser.isSeller && seller.map((item) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div>
                    <Link to={item.Link} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </Link>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
              {!currentUser.isSeller && buyer.map((item) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div>
                    <Link to={item.Link} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </Link>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <Link
                  key={item.name}
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
export default UserFlyout;