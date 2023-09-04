import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
//import { DiamondIcon } from '@/components/DiamondIcon'

import adrianKajdaImage from '@/images/avatars/adrian_kajda.jpg'

const days = [
  {
    name: '',
    date: '',
    dateTime: '2022-04-04',
    speakers: [
      {
        name: 'Adrian Kajda',
        role: 'Sygic',
        company: 'Sygic',
        bio: 'Creator of Fuelio app. Fuelio was his hobby project started in 2012. Three years later the app was aquired by Sygic.',
        country: 'Poland',
        companyLogo: 'https://dfua16.web.app/images/logos/sygic.svg',
        id: 'adrian_kajda',
        presentation: 'https://speakerdeck.com/gdglviv/adrian-kajda-fuelio-success-story',
        title: 'Fuelio. Success story',
        videoId: 'qK7ysoohsaM',
        image: adrianKajdaImage,
        gdgYear: '2016',
      },
    ],
  },

]

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function PastSpeakers() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2
            id="speakers-title"
            className="text-4xl font-medium tracking-tighter text-blue-600 font-display sm:text-5xl"
          >
            Past Speakers
          </h2>
          <p className="mt-4 text-2xl tracking-tight text-blue-900 font-display">
            
          </p>
        </div>
        <Tab.Group
          as="div"
          className="grid items-start grid-cols-1 mt-14 gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-5"
          horizontial={tabOrientation === 'horizontial'}
        >
          
          <Tab.Panels className="lg:col-span-5">
            {days.map((day) => (
              <Tab.Panel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-4 sm:gap-y-16 md:grid-cols-5 [&:not(:focus-visible)]:focus:outline-none"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                      <div
                        className={clsx(
                          'absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                          [
                            'border-blue-300',
                            'border-indigo-300',
                            'border-sky-300',
                          ][speakerIndex % 3],
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-indigo-50"
                        style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                      >
                        <Image
                          className="absolute inset-0 object-cover w-full h-full transition duration-300 group-hover:scale-110"
                          src={speaker.image}
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 text-xl font-bold tracking-tight font-display text-slate-900">
                      {speaker.name}
                    </h3>
                    <a
                      src={speaker.presentation}
                      title={speaker.title && `"${speaker.title}," talk`}
                      target='_blank'
                      className='text-blue-900 cursor-pointer hover:underline hover:underline-offset-4 focus:font-bold focus:underline focus:underline-offset-4'>
                      {speaker.title}
                    </a> <span className='text-sm text-base tracking-tight text-slate-500 '>{speaker.gdgYear && `(${speaker.gdgYear})`}</span>
                    
                    <p className="flex mt-3 text-base tracking-tight text-slate-500 align-center">
                      <Image
                        className='inline me-2'
                        src={speaker.companyLogo}
                        alt={speaker.company && `${speaker.company} logo`}
                        priority
                        sizes='min-width: 2rem'
                        width='70' height='70' /> {speaker.company} {speaker.country && `(${speaker.country})`} <br />
                      
                    </p>
                    <p className='mt-2 text-sm'>{speaker.bio}</p>
                    
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  )
}
