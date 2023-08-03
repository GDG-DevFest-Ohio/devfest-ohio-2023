import { StarIcon, CalendarDaysIcon } from '@heroicons/react/20/solid'

export default function Banner() {
  return (
    <div className="flex items-center justify-center gap-x-6 rounded-lg bg-blue-600 px-4 py-2.5 text-center sm:px-3.5  sm:px-6 ">
      <p className="text-lg leading-6 text-white">
        <StarIcon
          className="mx-1 mb-2 inline h-4 w-4 fill-current"
          aria-hidden="true"
        />
        <strong className="font-semibold sm:text-2xl">Google DevFest</strong>
        <StarIcon
          className="whitespace-wrap mx-1 mb-2 inline h-4 w-4 fill-current"
          aria-hidden="true"
        />
        <strong className="whitespace whitespace-nowrap sm:text-lg">
          <span className="">Join us in</span> Bowling&nbsp;Green
        </strong>
        <strong className="sm:text-lg">
          <CalendarDaysIcon
            className="mx-1 mb-2 me-1 ms-4 inline h-6 w-6 whitespace-nowrap fill-current sm:ms-2"
            aria-hidden="true"
          />
          November 11 – 12{' '}
        </strong>
      </p>
    </div>
  )
}
