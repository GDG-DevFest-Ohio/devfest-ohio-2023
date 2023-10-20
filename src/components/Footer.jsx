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
      <div className="flex items-center justify-center mb-12">
        {/* <CalendarButtonWithNoSSR /> */}
      </div>
      <Container className="flex flex-row">
        <div className="flex">
          <Logo className="w-auto h-20 text-blue-600" />
        </div>

        <div className="flex flex-row items-end mx-auto text-center">
          <p className="mt-6 text-base text-slate-500 md:mt-0">
            Copyright &copy; {new Date().getFullYear()} Shrinkray Labs. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
