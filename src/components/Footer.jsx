import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer role="contentinfo" className="flex-none py-16">
      <Container className="flex flex-row">
        <div className="flex">
          <Logo className="w-auto h-20 text-slate-900" />
          
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
