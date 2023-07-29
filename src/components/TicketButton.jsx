import { Button } from '@/components/Button'

export function TicketButton({ path, content }) {
  return (
    <div className="flex justify-center w-full mt-10 sm:w-auto sm:justify-start lg:grow lg:basis-0">
      <Button href={ path }>{ content }</Button>
    </div>
  )
}
