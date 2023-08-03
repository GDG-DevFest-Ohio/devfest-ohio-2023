import Head from 'next/head'
// import { Newsletter } from '@/components/Newsletter'
import PageTitle from '@/components/PageTitle'
import Banner from '@/components/Banner'
import { Container } from '@/components/Container'

const GetTicketsPage = () => {
  const pageTitle = 'Ticket Information'
  const description = 'Latest details about the 2023 Ohio DevFest tickets'
  return (
    <>
      <Head>
        <title>Ohio DevFest Hackathon & Conference</title>

        <meta
          name="description"
          content="The 2023 Ohio DevFest is a local tech conference hosted by Ohio-based Google Developer Groups (GDGs). It features talks, hands-on demos, workshops, and codelabs on the latest Google tech, plus featured talks intended to broaden interest and appeal."
        />
      </Head>
      <Container>
        <div className="mt-16">
          <Banner />
        </div>

        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <PageTitle title={pageTitle} description={description} />

          <div className="px-4 text-xl sm:px-6 lg:px-8">
            <p className="text-xl">
              It is early in our promtion of this event. While tickets are not
              yet available, rest assured we are working to bring you the latest
              information about our speakers, tracks, and activities around our
              2023 Ohio DevFest. Thank you for considering us and we encourage
              you to check back soon for updates.
            </p>
            <p className="mt-6">
              We can&apos;t wait to have you join us at the Ohio DevFest!
            </p>
          </div>
        </div>
      </Container>
      {/* <Newsletter /> */}
    </>
  )
}
export default GetTicketsPage
