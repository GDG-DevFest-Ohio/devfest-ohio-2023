import Head from 'next/head'
import  PageTitle  from '@/components/PageTitle'
import { Newsletter } from '@/components/Newsletter'

const BecomeSponsorPage = () => {
  const pageTitle = 'How to Become a sponsor'
  const description = 'A bit of info introducing the sponsorship page'
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
export default BecomeSponsorPage;
