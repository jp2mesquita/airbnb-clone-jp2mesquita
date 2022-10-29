import {  StarIcon } from "@heroicons/react/solid"
import { HeartIcon } from "@heroicons/react/outline"
import Image from "next/image"


interface SearchProps{
  img: string,
  location: string,
  title: string,
  description: string,
  star: number,
  price: string,
  total: string,
  long: number,
  lat: number
}

export default function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  long,
  lat
} : SearchProps){


  return(
    <div className="flex py-7 px-2 pr-4 boder-b rounded-lg cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div 
        className="relative h-24 w-40 rounded-2xl overflow-hidden md:h-52 md:w-80 flex-shrink-0"
      >
        <Image
          src={img}
          alt=''
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className='flex justify-between'>
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer"/>
        </div>

        <h4 className="text-xl">{title}</h4>

        <div className="border-b w-10 pt-2"/>

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400"/>
            {star}
          </p>
          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2 ">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}