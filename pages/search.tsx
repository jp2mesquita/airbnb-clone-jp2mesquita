import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { format } from 'date-fns'
import { GetServerSideProps } from "next";
import InfoCard from "../components/InfoCard";

export interface SearchProps{
  searchResults:{
    img: string,
    location: string,
    title: string,
    description: string,
    star: number,
    price: string,
    total: string,
    long: number,
    lat: number
  }[]
}

export default function Search({searchResults}: SearchProps){
  const router = useRouter()
  const {
    location, 
    startDate, 
    endDate, 
    numberOfGuests
  } = router.query

  const formattedStartDate = format(new Date(startDate as string), "dd'/'MMM'/'yy")
  const formattedEndDate = format(new Date(endDate as string), "dd'/'MMM'/'yy")

  const range = `${formattedStartDate} - ${formattedEndDate}`

  return(
    <div>
      <Header placeholder={`${location} | ${range} | ${numberOfGuests} guests`}/>

      <main className="flex">
      <section className="felx-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - {numberOfGuests} guests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 gap-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
          {searchResults.map( (item) => (
            <InfoCard
              key={item.img}
              img={item.img}
              location={item.location}
              title={item.title}
              description={item.description}
              star={item.star}
              price={item.price}
              total={item.total}
              long={item.long}
              lat={item.lat}
            />
          ))}
        </div>
        </section>



      </main>

   
      <Footer />
    </div>
  )
}

export const getServerSideProps:GetServerSideProps = async() => {
  const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS')
    .then((res) => res.json())

  return{
    props:{
      searchResults
    }
  }
}