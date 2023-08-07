import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import CalendarButton from '@/components/CalendarButton'

export function Footer() {
  return (
    <footer role="contentinfo" className="flex-none py-16">
      <div className="flex items-center justify-center ">
        <CalendarButton />
      </div>
      <Container className="flex flex-row">
        <div className="flex">
          <Logo className="h-20 w-auto text-blue-600" />
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
