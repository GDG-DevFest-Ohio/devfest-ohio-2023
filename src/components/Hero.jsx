import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="max-w-2xl mx-auto lg:max-w-4xl lg:px-12">
          <h1 className="text-5xl font-bold tracking-tighter text-blue-600 font-display sm:text-7xl">
            <span className="sr-only">Ohio Devfest - </span>The biggest Ohio Google conf crafted for you!
          </h1>
          <div className="mt-6 space-y-6 text-2xl tracking-tight text-blue-900 font-display">
            <p>
              The Ohio DevFest is hosted by Google Developer Groups (GDGs) around the Ohio. Join our hackathon, learn about AI, Cloud,
            Android, Web, & Accessibility from world experts. Or just come to
            network and have fun!
            </p>
            <p>
              DevFest is the premiere local event for developers to learn about Google’s latest technologies from Googlers, Google Developer Experts and speakers from the industry. In 2022, GDGs ran 550+ DevFests, helping 320k+ developers. Come to learn, share, and connect with the community.
            </p>
          </div>
          <Button href="#" className="w-full mt-10 sm:hidden">
            Get your tickets
          </Button>
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
