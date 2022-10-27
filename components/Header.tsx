import Image from "next/image";
import { 
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  UsersIcon
 } from '@heroicons/react/solid'



export default function Header(){
  return(
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image 
          src='https://links.papareact.com/qd3' 
          alt='Airbnb Logo' 
          fill
          className="object-contain object-left"
           
          
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full p-2 md:shadow-sm ">
        <input 
          type="text"
          placeholder="Start your search" 
          className=" bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder:-gray-400"
        />

        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer shrink-0"/>
      </div>

      <div className="flex items-center justify-end space-x-4  text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>

        <GlobeAltIcon 
          className="h-6 cursor-pointer"

        />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer"/>
        </div>
      </div>
    </header>
  )
}