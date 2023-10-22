import Link from 'next/link'
// import dynamic from 'next/dynamic'
import { Container } from '@/components/Container'
//import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'
// const CalendarButtonWithNoSSR = dynamic(
//   () => import('@/components/CalendarButton'),
//   { ssr: false },
// )

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center ">
        <div className="mt-10 lg:mt-0 ">
          <Link href="/">
            <Logo className="h-24 w-auto text-blue-700 transition duration-700 ease-in-out hover:text-blue-600" />
          </Link>
        </div>

        <div className="mx-auto px-0 sm:px-4 lg:px-8">
          <nav
            className="mt-6 flex items-center justify-center"
            aria-label="Site"
          >
            <ul className="flex items-center justify-center gap-8 overflow-x-auto border-b border-blue-900/10 bg-blue-100 px-8 py-4 text-center text-lg leading-tight text-blue-900 sm:-mx-6 sm:rounded-full lg:mx-0 lg:justify-start">
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
      </Container>
    </header>
  )
}
