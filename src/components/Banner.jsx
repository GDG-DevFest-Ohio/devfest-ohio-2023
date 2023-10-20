//import dynamic from 'next/dynamic'
// const CalendarButtonWithNoSSR = dynamic(
//   () => import('@/components/CalendarButton'),
//   { ssr: false },
// )

export default function Banner() {
  return (
    <div className="flex items-center justify-center gap-x-6 rounded-lg  px-4 py-2.5 text-center sm:hidden  sm:px-3.5 sm:px-6">
      {/* <CalendarButtonWithNoSSR /> */}
    </div>
  )
}
