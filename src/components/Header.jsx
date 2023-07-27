import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import Link from 'next/link'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Link href="/">
            <Logo className="w-auto h-24 text-slate-900" />
          </Link>
        </div>
        <div className="flex flex-auto order-first py-4 -mx-4 overflow-x-auto font-mono text-sm text-blue-600 border-b basis-full whitespace-nowrap border-blue-600/10 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="flex items-center gap-4 px-4 mx-auto">
            <p>
              <time dateTime="2023-11-11">11</time>-
              <time dateTime="2023-11-12">12 of November 2023</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p><span className='hidden sm:block'>Bowling Green, OH</span><span className='block sm:hidden'>BGSU</span></p>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="#">Get your tickets</Button>
        </div>
      </Container>
      <div className='px-0 mx-auto sm:px-4 lg:px-8'>
        <nav className='flex items-center justify-center mt-6' mt-6 aria-label="Site">
          <ul className="flex items-center justify-center gap-8 px-8 py-4 overflow-x-auto text-lg leading-tight text-center text-blue-900 bg-blue-100 border-b sm:rounded-full border-blue-900/10 sm:-mx-6 lg:mx-0 lg:justify-start">
            <li><Link className='hover:underline hover:underline-offset-4 focus:font-bold focus:underline focus:underline-offset-4' href={'/'}>Home</Link></li>
            <li><Link className='hover:underline hover:underline-offset-4 focus:font-bold focus:underline focus:underline-offset-4' href={'/become-sponsor'}>Event sponsorship</Link></li>
            <li><Link className='hover:underline hover:underline-offset-4 focus:font-bold focus:underline focus:underline-offset-4' href={'/get-tickets'}>Get tickets</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
