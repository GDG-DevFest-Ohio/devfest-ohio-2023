import Link from 'next/link'
// import dynamic from 'next/dynamic'
import { Container } from '@/components/Container'
//import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'
// import { HeaderBackground } from './HeaderBackground'
import  { HeaderBackground }  from '@/components/HeaderBackground'
// const CalendarButtonWithNoSSR = dynamic(
//   () => import('@/components/CalendarButton'),
//   { ssr: false },
// )

export function Header() {
  return (
    <>
      <header className="relative flex h-60">
        <Container className="z-10 flex flex-wrap items-center justify-center">
          <div className="z-10 mt-10 lg:mt-0">
            <Link href="/">
              <Logo className="z-10 w-auto h-24 text-blue-700 transition duration-700 ease-in-out hover:text-blue-600" />
            </Link>
          </div>

          <div className="z-10 px-0 mx-auto align-middle sm:px-4 lg:px-8">
            <nav
              className="z-10 flex items-center justify-center mt-6"
              aria-label="Site"
            >
              <ul className="flex items-center justify-center gap-8 px-8 py-4 overflow-x-auto text-lg leading-tight text-center text-blue-900 bg-blue-100 border-b z-2 border-blue-900/10 sm:-mx-6 sm:rounded-full lg:mx-0 lg:justify-start">
                <li>
                  <Link
                    className="hover:underline hover:underline-offset-4 focus:font-bold focus:underline focus:underline-offset-4"
                    href={'/'}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline hover:underline-offset-4 focus:font-bold focus:underline focus:underline-offset-4"
                    href={'/become-sponsor'}
                  >
                    Event sponsorship
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline hover:underline-offset-4 focus:font-bold focus:underline focus:underline-offset-4"
                    href={'/get-tickets'}
                  >
                    Ticket Info
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <HeaderBackground className="z-0" />
        </Container>
      </header>
    </>
  )
}
