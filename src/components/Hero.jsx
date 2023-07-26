import { Button } from '@/components/Button'
import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="max-w-2xl mx-auto lg:max-w-4xl lg:px-12">
          <h1 className="text-5xl font-bold tracking-tighter text-blue-600 font-display sm:text-7xl">
            <span className="sr-only">Ohio Devfest - </span>Welcome to the largest Ohio Google conference!
          </h1>
          <div className="mt-6 space-y-6 text-2xl tracking-tight text-blue-900 font-display">
            <p>
              Discover Ohio DevFest, hosted by Google Developer Groups from Ohio strongholds. Enjoy tracks like a team-oriented hackathon, Google technologies and workshops, and enhancing the user experience.  
            </p>
            <p>
              Our event covers the hottest topics from AI, Cloud, Android, to Design, and Accessibility. Connect with recruiters, and startup entrepreneurs. Plus the Hallway track ... networking with fellow attendees and guests.
            </p>
            <p>
              The <span className='italic font-bold'>DevFest</span> is a premiere event for developers to learn about Google's latest technologies from Googlers, Google Developer Experts and industry professionals. In 2022, GDGs ran 550+ DevFests, helping 320k+ developers. <span className='italic font-bold'>Come to learn, share, and connect with the community. </span>
            </p>
          </div>
          <div className="flex justify-center w-full mt-10 sm:justify-start sm:w-auto lg:grow lg:basis-0">
            <Button href="/get-tickets">Get your tickets</Button>
          </div>
          <dl className="grid grid-cols-2 mt-10 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
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
          </dl>
        </div>
      </Container>
    </div>
  )
}
