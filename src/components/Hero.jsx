// import dynamic from 'next/dynamic'
//import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'
// const CalendarButtonWithNoSSR = dynamic(
//   () => import('@/components/CalendarButton'),
//   { ssr: false },
// )

export function Hero() {
  return (
    <div className="relative">
      {/* <BackgroundImage className="-bottom-14 -top-36" /> */}
      <Container className="relative">
        <div className="flex justify-center mb-16 sm:hidden">
          {/* <CalendarButtonWithNoSSR /> */}
        </div>
        <div className="max-w-2xl mx-auto mt-10 lg:max-w-4xl lg:px-12">
          <h1 className="text-5xl font-bold tracking-tighter text-center text-blue-600 font-display sm:text-7xl">
            <span className="text-5xl font-bold tracking-tighter text-blue-600 font-display sm:text-6xl">
              Join us in Ohio &hellip;
            </span>
            <br></br> <span>Google DevFest!</span>
          </h1>
          <div className="mt-6 space-y-6 text-2xl tracking-tight text-blue-900 font-display">
            <p>
              <span className="font-bold">Discover Ohio DevFest.</span> Hosted
              by Google Developer Groups from Ohio tech strongholds. Enjoy
              tracks like a team-oriented hackathon, Google technologies,
              workshops, and enhancing the user experience.
            </p>
            <p className="hidden sm:block">
              <strong>Our event covers the 🔥hottest topics.</strong> Connect
              with startup entrepreneurs, recruiters, plus don&rsquo;t forget
              the hallway track ... networking with attendees and our special
              guests.
            </p>
            <p className="hidden sm:block">
              <span className="font-bold">The Google DevFest</span> is a
              premiere event for designers and developers to learn about
              Google&rsquo;s latest technologies from Googlers, Google Developer
              Experts and industry professionals. In 2022, GDGs ran 550+
              DevFests, helping 320k+ developers.{' '}
              <span className="italic font-bold">
                Come to learn, share, and connect with your community.{' '}
              </span>
            </p>
          </div>

          {/* <dl className="grid grid-cols-2 mt-10 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Speakers', 'TBD'],
              ['People Attending', '300+'],
              ['Venue', 'BGSU Bowen-Thompson Student Union'],
              ['Location', 'Bowling Green, OH'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl> */}
        </div>
      </Container>
    </div>
  )
}
