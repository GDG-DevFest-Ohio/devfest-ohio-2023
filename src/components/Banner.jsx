import CalendarButton  from '@/components/CalendarButton'

export default function Banner() {
  return (
    <div className="flex items-center justify-center gap-x-6 rounded-lg  px-4 py-2.5 text-center sm:px-3.5  sm:px-6 sm:hidden">
      <CalendarButton />
    </div>
  )
}
