import Head from 'next/head'
import { Newsletter } from '@/components/Newsletter'
import  PageTitle  from '@/components/PageTitle'

const GetTicketsPage = () => {
  const pageTitle = 'Get Tickets'
  const description = 'A simple introduction to the tickets page with details to follow'
  return (
    <>
      <Head>
        <title>Ohio DevFest Hackathon & Conference</title>
        
        <meta
          name="description"
          content="The 2023 Ohio DevFest is a local tech conference hosted by Ohio-based Google Developer Groups (GDGs). It features talks, hands-on demos, workshops, and codelabs on the latest Google tech, plus featured talks intended to broaden interest and appeal."
        />
      </Head>

      <PageTitle title={pageTitle} description={description} />
      <Newsletter />
    </>
  )
}
export default GetTicketsPage;
