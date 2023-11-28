import Link from 'next/link'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import  { HeaderBackground }  from '@/components/HeaderBackground'
// const CalendarButtonWithNoSSR = dynamic(
//   () => import('@/components/CalendarButton'),
//   { ssr: false },
// )

export function Header() {
  return (
    <>
      <header className="relative z-50 flex flex-none w-full h-72 md:h-60 lg:pt-11">
        <Container className="container flex md:grid">
          <div className="z-10 flex flex-wrap content-center justify-center flex-1 grid-rows-2 gap-4 md:grid md:grid-cols-3 md:grid-rows-1">
            <Link
              href="/"
              className="z-10 content-center col-start-1 justify-self-center "
            >
              <Logo className="z-10 w-auto h-32 text-red-700 transition duration-700 ease-in-out sm:h-24 header-lg hover:rotate-12 hover:text-blue-600 md:h-44" />
            </Link>
            <div className="z-10 grid content-center col-start-2 px-0 mx-auto justify-self-center sm:px-4 lg:px-8">
              <nav
                className="z-10 flex items-center justify-center mt-6"
                aria-label="Site"
              >
                <ul className="flex items-center justify-center gap-8 px-8 py-4 overflow-x-auto text-lg leading-tight text-center text-blue-900 bg-white border-4 border-red-700 border-solid z-2 border-blue-900/10 sm:-mx-6 sm:rounded-full lg:mx-0 lg:justify-start">
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
