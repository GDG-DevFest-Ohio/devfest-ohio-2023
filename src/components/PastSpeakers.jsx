import { useId } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
//import { DiamondIcon } from '@/components/DiamondIcon'

import adrianKajdaImage from '@/images/avatars/adrian_kajda.jpg'
import aleksanderPiotrowskiImage from '@/images/avatars/aleksander_piotrowski.jpg'
import applauseLogoImage from '@/images/logos/applause-logo.svg'
import runtasticLogoImage from '@/images/logos/runtastic_logo.svg'
import antonMinashkinImage from '@/images/avatars/minashkin_anton.jpg'
import carmenPopImage from '@/images/avatars/carmen-popovicu.jpg'
import denisRadinImage from '@/images/avatars/denis_radin.jpg'
import ihorDvoretskiImage from '@/images/avatars/ihor_dvoretskyi.jpg'
import janaMoudraImage from '@/images/avatars/jana_moudra.jpg'
import jaroslavKhorischenkoImage from '@/images/avatars/jaroslav_khorishchenko.jpg'
import juaresFilhoImage from '@/images/avatars/juares_filho.jpg'
import lesyaDanylyukImage from '@/images/avatars/lesya_danylyuk.jpg'
import yonatanLevinImage from '@/images/avatars/yonatan_levin.jpg'
import VitaliyZasadnyyImage from '@/images/avatars/vitaliy_zasadnyy.jpg'

const days = [
  {
    name: '',
    date: '',
    dateTime: '2022-04-04',
    speakers: [
      {
        name: 'Adrian Kajda',
        id: 'adrian_kajda',
        image: adrianKajdaImage,
        company: 'Sygic',
        bio: 'Creator of Fuelio app. Fuelio was his hobby project started in 2012. Three years later the app was aquired by Sygic.',
        jobTitle: 'Product Manager/Developer',
        country: 'Poland',
        companyLogo: 'https://dfua16.web.app/images/logos/sygic.svg',
        presentation:
          'https://speakerdeck.com/gdglviv/adrian-kajda-fuelio-success-story',
        title: 'Fuelio. Success story',
        gdgYear: '2016',
        videoId: 'qK7ysoohsaM',
      },
      {
        name: 'Aleksander Piotrowski',
        id: 'aleksander_piotrowski',
        image: aleksanderPiotrowskiImage,
        company: 'Applause',
        bio: 'Became a mobile developer after long run as a backend developer. Because of age, holding senior positions from the day one as an Android programmer. Serial hackathon winner, or at least contender ;-)',
        jobTitle: 'Code Monkey',
        country: 'Poland',
        companyLogo: applauseLogoImage,
        presentation:
          'https://speakerdeck.com/gdglviv/aleksander-piotrowski-is-there-a-room-for-room',
        title: 'Is there a room for Room?',
        gdgYear: '2017',
        videoId: 'BHiKSnOaoh4',
      },
      {
        name: 'Anton Minashkin',
        id: 'anton_minashkin',
        image: antonMinashkinImage,
        company: 'EPAM',
        bio: 'Android developer, currently works at EPAM Systems Ohio. Has experience in both server and mobile side development. Anton all his free time spends on the endless search of silver bullets, perfect architectures and holy wars',
        jobTitle: 'Chief Software Engineer',
        country: 'Ohio, USA',
        companyLogo:
          'https://storage.googleapis.com/dfua17.appspot.com/images/logos/epam.svg',
        presentation:
          'https://speakerdeck.com/gdglviv/anton-minashkin-random-musings-on-the-android-things',
        title: 'Random Musings on the Android Things',
        gdgYear: '2017',
        videoId: 'NCRr4nA0c7A',
      },
      {
        name: 'Carmen Popovicu',
        id: 'carmen_popovicu',
        image: carmenPopImage,
        company: 'Widespread',
        bio: 'Carmen is a front-end engineer and a #1 fan of dev communities. She loves Angular but has since recently developed feelings for Polymer too. She strongly believes that adding at least one ASCII smiley in your emails will make the world a better place and hopes to one day make a difference for the web with the code she writes. If she had super powers, she would smiley all the things.',
        jobTitle: 'Front-end Engineer',
        country: 'Romania',
        companyLogo: 'https://dfua16.web.app/images/logos/widespread.png',
        presentation: 'ttp://carmenpopoviciu.github.io/on-polymer-and-smileys/',
        title: 'On Polymer and smileys... or Polysmileys',
        gdgYear: '2016',
        videoId: 'NCRr4nA0c7A',
      },
      {
        name: 'Denis Radin',
        id: 'denis_radin',
        image: denisRadinImage,
        company: 'Evolution Gaming',
        bio: 'Passionate about computer graphics and code optimization, mastering workshop http://challengingnative.com, hosting http://react.asmterdam and http://amsterdamjs.com',
        jobTitle: 'Senior JS Engineer',
        country: 'Netherlands',
        companyLogo:
          'https://www.evolution.com/wp-content/themes/evolution-wp/assets/img/evolution_logo.svg',
        presentation:
          'https://speakerdeck.com/gdglviv/denis-radin-applying-nasa-coding-guidelines-to-javascript-or-airspace-is-closer-than-you-may-think',
        title:
          'Applying NASA coding guidelines to JavaScript or airspace is closer than you may think',
        gdgYear: '2017',
        videoId: 'E4fpZm17GNI',
      },
      {
        name: 'Ihor Dvoretskyi',
        id: 'ihor_dvoretskyi',
        image: ihorDvoretskiImage,
        company: 'SoftServe',
        bio: 'Ivan is a Software Engineer at SoftServe and uses Golang on daily basis for the last couple of years. He has 10+ years of experience in web development and has switched from PHP world. He is focusing on performance, quality, and automation. He likes to optimize solutions, make them simpler, faster and stable. In his time at SoftServe, he has worked with the Kubernetes, Docker, AWS, GraphQL, and many other technologies.',
        jobTitle: 'Developer Advocate',
        country: 'Ohio, USA',
        companyLogo:
          'https://storage.googleapis.com/dfua17.appspot.com/images/logos/linux-foundation.svg',
        presentation:
          'https://speakerdeck.com/gdglviv/ihor-dvoretskyi-keynote-welcome-to-the-world-of-open-source-stories-by-kubernetes-contributor',
        title:
          'Welcome to the world of Open Source. Stories by Kubernetes contributor',
        gdgYear: '2017',
        videoId: 'HhpHf3GefXI',
      },
      {
        name: 'Jana Moudrá',
        id: 'jana_moudrá',
        image: janaMoudraImage,
        company: 'Juicymo',
        bio: 'Jana Moudrá is a GDE (Google Developer Expert) for Web technologies - Dart. She is a passionate developer and modern web and mobile technology evangelist. Jana co-founded a company called Juicymo, where she works on juicy apps and products. She loves helping other developers and spreading the knowledge about these technologies. ',
        jobTitle: 'CEO',
        country: 'Czech Republic',
        companyLogo:
          'https://storage.googleapis.com/dfua17.appspot.com/images/logos/juicymo.png',
        presentation:
          'https://speakerdeck.com/gdglviv/jana-moudra-how-angulardart-and-firebase-did-an-app-together"',
        title: 'How AngularDart & Firebase did an App together',
        gdgYear: '2017',
        videoId: 'Gk-WFDzCE3E',
      },
      {
        name: 'Jaroslav Khorishchenko',
        id: 'jaroslav_khorishchenko',
        image: jaroslavKhorischenkoImage,
        company: 'Smart App Studio',
        bio: 'Jaroslav is full stack web developer at Smart App Studio. He specializes in React and Node.js. He has come to the word of programming from electronics. He loves to write about his different interesting experiments at his Facebook page.',
        jobTitle: 'Full stack web developer',
        country: 'Ohio, USA',
        companyLogo:
          'https://storage.googleapis.com/dfua17.appspot.com/images/logos/smart-app-studio.png',
        presentation:
          'https://speakerdeck.com/gdglviv/jaroslav-khorishchenko-firebase-and-iot-how-to-create-device-and-seize-the-world',
        title: 'Firebase and IoT (Part 1 & 2)',
        gdgYear: '2017',
        videoId: '',
      },
      {
        name: 'Juarez Filho',
        id: 'juarez_filho',
        image: juaresFilhoImage,
        company: 'Caravana Web',
        bio: 'Passionate about traveling and also to share his adventures with Web Technologies and Firebase. As a Google Developer Expert he’s helping communities all over the world to learn, discover and have fun.',
        jobTitle: 'Firebase Google Developer Expert',
        country: 'Brazil',
        companyLogo:
          'https://storage.googleapis.com/dfua17.appspot.com/images/logos/caravana_web.png',
        presentation:
          'https://speakerdeck.com/gdglviv/juarez-filho-let-firebase-help-you-to-build-better-front-end-apps',
        title: 'Let Firebase help you to build better Front-end apps',
        gdgYear: '2017',
        videoId: 'xJsgIH4U_DM',
      },
      {
        name: 'Lesya Danylyuk',
        id: 'lesya_danylyuk',
        image: lesyaDanylyukImage,
        company: 'Runtastic',
        bio: 'Lead Android designer at Runtastic - Austrian mobile fitness company. Lesya is a passionate UX designer with strong background in usability and increased empathy level, which makes her to the real users advocate. Passionate about both Design Thinking and Agile, she tries to combine these processes in her and hers team daily work.',
        jobTitle: '',
        country: 'Austria',
        companyLogo: runtasticLogoImage,
        presentation:
          'https://speakerdeck.com/gdglviv/lesya-danylyuk-practical-guide-to-run-a-google-design-sprint',
        title: 'Practical Guide to Run a Google Design Sprint (Part 1)',
        gdgYear: '2017',
        videoId: 'NCRr4nA0c7A',
      },
      {
        name: 'Yonatan Levin',
        id: 'yonatan_levin',
        image: yonatanLevinImage,
        company: 'KolGene',
        bio: 'A born entrepreneur, combining the creative imagination of an artist with the meticulous precision of an engineer, Yonatan Levin is not only one of Israel’s top mobile developers, he’s also a member of the elite worldwide group of Google Developers Experts.',
        jobTitle: 'CTO & Co-Founder',
        country: 'Israel',
        companyLogo:
          'https://storage.googleapis.com/dfua17.appspot.com/images/logos/kolgene.svg',
        presentation:
          'https://speakerdeck.com/gdglviv/yonatan-levin-keynote-making-mistakes-and-building-products-from-1st-to-30m-users',
        title: 'Making mistakes and building products from 1st to 30M users',
        gdgYear: '2017',
        videoId: 'hUY8jg9-ieE',
      },
      {
        name: 'Vitaliy Zasadnyy',
        id: 'vitaliy_zasadnyy',
        image: VitaliyZasadnyyImage,
        company: 'GetSocial',
        bio: 'Vitaliy is a mobile developer, public speaker and community manager. He is eager about product perfection and scalability. Founded GDG Lviv in Ohio, now he is leading mobile department at GetSocial, startup based in The Netherlands. GetSocial is building the cloud-based mobile engagement platform that empowers any app developer with tools to maximise user acquisition, engagement, retention and monetization.',
        jobTitle: 'Head of Mobile',
        country: 'Ohio',
        companyLogo: 'https://dfua16.web.app/images/logos/getsocial.svg',
        presentation:
          'https://speakerdeck.com/zasadnyy/j2objc-cross-platform-development-google-way',
        title: 'J2ObjC. Cross platform development - Google way',
        gdgYear: '2016',
        videoId: 'NCRr4nA0c7A',
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

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
          >
            Past Speakers
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900"></p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
        >
          <Tab.Panels className="lg:col-span-4">
            {days.map((day) => (
              <Tab.Panel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-y-16 md:grid-cols-4 [&:not(:focus-visible)]:focus:outline-none"
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
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src={speaker.image}
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                      {speaker.name}
                    </h3>
                    <p className="text-sm text-slate-500">{speaker.jobTitle}</p>
                    <a
                      src={speaker.presentation}
                      title={speaker.title && `"${speaker.title}," talk`}
                      target="_blank"
                      className="mt-3 cursor-pointer text-blue-900 hover:underline hover:underline-offset-4 focus:font-bold focus:underline focus:underline-offset-4"
                    >
                      {speaker.title}
                    </a>{' '}
                    <span className="text-base text-sm tracking-tight text-slate-500 ">
                      {speaker.gdgYear && `(${speaker.gdgYear})`}
                    </span>
                    <p className="align-center mt-3 flex text-base tracking-tight text-slate-500">
                      <Image
                        className="me-2 inline"
                        src={speaker.companyLogo}
                        alt={speaker.company && `${speaker.company} logo`}
                        priority
                        sizes="min-width: 2rem"
                        width="70"
                        height="70"
                      />{' '}
                      {speaker.company}{' '}
                      {speaker.country && `(${speaker.country})`} <br />
                    </p>
                    <p className="mt-2 text-sm">{speaker.bio}</p>
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
