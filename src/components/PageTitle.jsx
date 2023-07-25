import React from 'react'

const PageTitle = ({ title }) => {
  return (
    
      <div className="relative py-20 sm:pb-24 sm:pt-36">
        
        <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className="max-w-2xl mx-auto lg:max-w-4xl lg:px-12">
            <h1 className="text-5xl font-bold tracking-tighter text-blue-600 font-display sm:text-7xl">
              <span className="sr-only">Ohio Devfest - </span>{title} test
            </h1>
            <div className="mt-6 space-y-6 text-2xl tracking-tight text-blue-900 font-display">
              <p>
                mt-6 space-y-6 text-2xl tracking-tight text-blue-900 font-display
              </p>
              
          </div>
        </div>
      </div>
    </div>
  )
}
export default PageTitle;
