import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import Link from 'next/link'
import { Logo } from '@/components/Logo'
// import { TicketButton } from './TicketButton'

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Link href="/">
            <Logo className="h-24 w-auto text-blue-700 transition duration-700 ease-in-out hover:text-orange-600" />
          </Link>
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-blue-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              <time dateTime="2023-11-11">11</time>-
              <time dateTime="2023-11-12">12 of November 2023</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p>
              <span className="hidden sm:block">Bowling Green, OH</span>
              <span className="block sm:hidden">BGSU</span>
            </p>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          {/* <TicketButton path="/get-tickets" content="Get your tickets" /> */}
        </div>
      </Container>
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
    </header>
  )
}
