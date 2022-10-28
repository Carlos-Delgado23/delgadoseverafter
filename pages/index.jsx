import Head from 'next/head'
// Sections
import Landing from '@sections/Landing'
import RSVP from '@sections/RSVP'
import Registry from '@sections/Registry'
import Details from '@sections/Details'
import Answers from '@sections/Answers'
import Photos from '@sections/Photos'
import Meta from '@parts/Meta'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Carlos & Seanna</title>
      </Head>

      <Meta />
      <main>
        <Landing />
        <Answers num={'01'} />
        <Details num={'02'} />
        <Registry num={'03'} />
//         <RSVP num={'04'} />
        <Photos />
      </main>
    </div>
  )
}
