import Head from 'next/head'

import { Hero } from '@/components/Hero'
// import { Newsletter } from '@/components/Newsletter'
// import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { PastSpeakers } from '@/components/PastSpeakers'
// import { Sponsors } from '@/components/Sponsors'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ohio DevFest Hackathon & Conference</title>
        <meta
          name="description"
          content="The 2023 Ohio DevFest is a local tech conference hosted by Ohio-based Google Developer Groups (GDGs). It features talks, hands-on demos, workshops, and codelabs on the latest Google tech, plus featured talks intended to broaden interest and appeal."
        />
      </Head>
      <Hero />
      <Speakers />
      <PastSpeakers />
      {/* <Schedule /> */}
      {/* <Sponsors /> */}
      {/* <Newsletter /> */}
    </>
  )
}
