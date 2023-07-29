import Head from 'next/head'
import PageTitle from '@/components/PageTitle'
import { Container } from '@/components/Container'

// import { Newsletter } from '@/components/Newsletter'

const BecomeSponsorPage = () => {
  const pageTitle = 'How to become a sponsor'
  const description = 'Offerings and benefits for sponsors'
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
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <PageTitle title={pageTitle} description={description} />

          <div className="px-4 text-xl sm:px-6 lg:px-8">
            <h2 className="text-4xl">Who we are</h2>

            <p className="mt-6">
              <strong>
                GDG Cincinnati, GDG Cleveland, GDG Columbus, GDG Northwest Ohio,
                and GDG Toledo
              </strong>{' '}
              are once again joining forces to put on Ohio DevFest on November
              11-12, 2023 this year at the Bowen-Thompson Student Union (on the
              BGSU campus).
            </p>
            <p className="mt-6">
              <strong>
                Ohio DevFest 2023 will be a 100% community organized,{' '}
              </strong>
              multi-day, multi-track, developer conference with industry experts
              presenting on exciting topics including mobile, web, cloud,
              virtual reality, machine learning, and more!
            </p>
            <p className="mt-6">
              Ohio DevFest 2023 welcomes businesses that are looking to increase
              their presence in the Ohio regional tech communities by reaching
              local developers and technology focused individuals through event
              sponsorships.
            </p>
            <p className="mt-6">
              Event sponsors will be selected on a first-come, first-served
              basis and must have submitted funds by October 13, 2023, to allow
              time for signage printing. If you would like to inform the
              organizers that your business is interested in sponsoring the
              event or need more information about sponsorships, please contact
              the event organizers. Reach us at our general email address:
              contact@ohiodevfest.com.
            </p>
            <h2 className="mt-6 text-4xl">More to come</h2>
            <p className="mt-6">
              Levels of sponsorship and benefits to be published as information
              becomes available.
            </p>
          </div>
        </div>
      </Container>
      {/* <Newsletter /> */}
    </>
  )
}
export default BecomeSponsorPage
