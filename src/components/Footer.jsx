import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="flex-none py-16">
      <Container className="flex flex-col items-center justify-between sm:items-start md:flex-row">
        <div className="flex flex-col justify-center">
          <Logo className="h-20 w-auto text-slate-900" />
          <p className="text">GDG Ohio Devfest 2023</p>
        </div>
        <div className="flex flex-col items-end justify-between md:flex-row">
          <p className="mt-6 text-base text-slate-500 md:mt-0">
            Copyright &copy; {new Date().getFullYear()} Shrinkray Labs. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
