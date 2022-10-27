import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

import { GetStaticProps } from 'next'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'


interface ExploreDataProps {
  img: string,
  location: string,
  distance: string
}

interface CardsDataProps {
  img: string,
  title: string
}

interface PageProps{
  exploreData: ExploreDataProps[],
  cardsData: CardsDataProps[]
}

export default function Home({exploreData, cardsData}: PageProps)  {

  return (
    <div className="">
      <Head>
        <title>Airnbn - TheBrabus </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <Header />

      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>
            Explore Nearby
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>

            {exploreData?.map( (item) => (
              <SmallCard 
              key={item.img}
              distance={item.distance}
              img={item.img}
              location={item.location}
              />
            ))}
            
          </div>
        </section>

        <section >
          <h2 className='text-4xl font-semi-bold py-8'> 
            Live Anywhere
          </h2>

          
          <div className='flex space-x-3 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full p-3 '>

            {cardsData?.map( (item) => (
              <MediumCard
              key={item.img}
              img={item.img}
              title={item.title}
              />
            ))}
          </div>
        </section>

        <LargeCard 
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlists created by Airbnb'
          buttonText='Get Inspired'
        />


      </main>

      <Footer />

    </div>
  )
}



export const getStaticProps: GetStaticProps = async() => {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G")
    .then(res => res.json())

  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT')
    .then(res => res.json())

    
    return {
      props:{
        exploreData,
        cardsData,
      },
      revalidate: 60*60*2 //2 hours
    }
}