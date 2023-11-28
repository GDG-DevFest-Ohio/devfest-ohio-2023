//import dynamic from 'next/dynamic'
import { Container } from '@/components/Container'
import { Logo } from '@/components/LogoFooter'
// import CalendarButton from '@/components/CalendarButton'
// const CalendarButtonWithNoSSR = dynamic(
//   () => import('@/components/CalendarButton'),
//   { ssr: false },
// )

export function Footer() {
  return (
    <footer role="contentinfo" className="flex-none py-16">
      <div className="mb-12 flex items-center justify-center">
        {/* <CalendarButtonWithNoSSR /> */}
      </div>
      <Container className="flex flex-row">
        <div className="flex">
          <Logo className="h-20 w-auto text-red-700 transition duration-700 ease-in-out hover:rotate-12 hover:text-blue-600 md:h-44" />
        </div>

        <div className="mx-auto flex flex-row items-end text-center">
          <p className="mt-6 text-base text-slate-500 md:mt-0">
            Copyright &copy; {new Date().getFullYear()} Shrinkray Labs. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
