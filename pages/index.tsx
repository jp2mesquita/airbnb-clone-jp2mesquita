import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

import { GetStaticProps } from 'next'
import SmallCard from '../components/SmallCard'

interface ExploreDataProps {
  exploreData:{
    img: string,
    location: string,
    distance: string
  }[]
}

// interface Props{
//   props:{
//     exploreData: ExploreDataProps,
// }

export default function Home<NextPage>  ( {exploreData} : ExploreDataProps )  {
  return (
    <div className="">
      <Head>
        <title>Airnbn - TheBrabus </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <Header />

      <Banner />



    </div>
  )
}



export const getStaticProps: GetStaticProps = async() => {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G")
    .then(res => res.json())

    
    return {
      props:{
        exploreData
      },
      revalidate: 60*60*2 //2 hours
    }
}