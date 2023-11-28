import Link from 'next/link'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { HeaderBackground } from '@/components/HeaderBackground'
// const CalendarButtonWithNoSSR = dynamic(
//   () => import('@/components/CalendarButton'),
//   { ssr: false },
// )

export function Header() {
  return (
    <>
      <header className="relative z-50 flex h-72 w-full flex-none md:h-60 lg:pt-11">
        <Container className="container flex md:grid">
          <div className="z-10 flex flex-1 grid-rows-2 flex-wrap content-center justify-center gap-4 md:grid md:grid-cols-3 md:grid-rows-1">
            <Link
              href="/"
              className="z-10 col-start-1 content-center justify-self-center "
            >
              <Logo className="header-lg z-10 h-32 w-auto text-red-700 transition duration-700 ease-in-out hover:rotate-12 hover:text-blue-600 sm:h-24 md:h-44" />
            </Link>
            <div className="z-10 col-start-2 mx-auto grid content-center justify-self-center px-0 sm:px-4 lg:px-8">
              <nav
                className="z-10 mt-6 flex items-center justify-center"
                aria-label="Site"
              >
                <ul className="z-2 flex items-center justify-center gap-8 overflow-x-auto border-4 border-solid border-blue-900/10 border-red-700 bg-white px-8 py-4 text-center text-lg leading-tight text-blue-900 sm:-mx-6 sm:rounded-full lg:mx-0 lg:justify-start">
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
          </div>

          <HeaderBackground className="z-0 w-full bg-no-repeat" />
        </Container>
      </header>
    </>
  )
}
