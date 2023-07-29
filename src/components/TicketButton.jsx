import { Button } from '@/components/Button'

export function TicketButton({ path, content }) {
  return (
    <div className="mt-10 flex w-full justify-center sm:w-auto sm:justify-start lg:grow lg:basis-0">
      <Button href={path}>{content}</Button>
    </div>
  )
}
