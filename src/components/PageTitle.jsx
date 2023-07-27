import React from 'react'

const PageTitle = ({ title, description }) => {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-6xl">
          <span className="sr-only">Ohio Devfest - </span>
          {title}
        </h1>
        <p className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
          {description}
        </p>
      </div>
    </div>
  )
}
export default PageTitle
