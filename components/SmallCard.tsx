import Image from "next/image"

interface SmallCardProps{
  img: string,
  location: string,
  distance: string
}

export default function SmallCard({img, location, distance} : SmallCardProps ){
  return(
    <div className="m-2 mt-5 flex items-center space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-200 ease-out">
      <div className="relative h-16 w-16 ">
       <Image 
        src={img} 
        alt='' 
        fill
        className="rounded-lg"
      /> 
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">
          {distance}
        </h3>
      </div>
    </div>
  )
}