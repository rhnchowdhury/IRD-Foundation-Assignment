import { Inter } from '@next/font/google'
import NavBar from 'Components/NavBar'
import Details from 'Components/Details'
import PartTwo from 'Components/PartTwo'
import MiddlePart from 'Components/MiddlePart'
import LastPart from 'Components/LastPart'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sport-Healthy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div >
        <NavBar></NavBar>
        <Details></Details>
        <PartTwo></PartTwo>
        <MiddlePart></MiddlePart>
        <LastPart></LastPart>
      </div>

    </>
  )
}
