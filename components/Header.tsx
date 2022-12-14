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
import { DateRangePicker, RangeKeyDict} from 'react-date-range'
import { useRouter } from "next/router";

interface HeaderProps{
  placeholder?: string
}

export default function Header({placeholder}: HeaderProps){

  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [numberOfGuests, setNumberOfGuests] = useState(1)

  const router = useRouter()

  const selectionRange ={
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  }

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>){
    setSearchInput(event.target.value)
    
  }
  
  function handleSelect(ranges: RangeKeyDict){
    setStartDate(ranges.selection.startDate as Date)
    setEndDate(ranges.selection.endDate as Date)
  }

  function handleChangeNumberOfGuests(event: ChangeEvent<HTMLInputElement>){
    const inputAsNumber = Number(event.target.value)
    setNumberOfGuests(inputAsNumber)
  }

  function handleCancelSearch(){
    setSearchInput('')
  }

  function handleNewSearch(){
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests,

      }
    })
  }
  return(
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10" >
      <div 
        onClick={() => router.push('/')} 
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
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
          placeholder={placeholder || "Start your search"}
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


          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>

            <UsersIcon className="h-5"/>
            <input
              value={numberOfGuests}
              onChange={handleChangeNumberOfGuests}
              type='number'
              min={1}
              className="w-12 pl-2 outline-none text-red-400"
            />
          </div>

          <div className="flex">
            <button 
              className="flex-grow text-gray-500"
              onClick={handleCancelSearch}
            >
              Cancel
              </button>
            <button
              onClick={handleNewSearch} 
              className="flex-grow text-red-400"
            >
              Search
            </button>
          </div>

        </div>
      )}
      
    </header>
  )
}