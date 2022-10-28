import Image from "next/image";
import { 
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  UsersIcon
 } from '@heroicons/react/solid'
import { ChangeEvent, useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker, RangeKeyDict, Range } from 'react-date-range'



export default function Header(){

  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const selectionRange ={
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  }

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>){
    setSearchInput(event.target.value)
    
  }
  
  function handleSelect(ranges: RangeKeyDict){
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

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
          value={searchInput}
          onChange={handleChangeInput}
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

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-6">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleSelect}
          />


        </div>
      )}
      
    </header>
  )
}