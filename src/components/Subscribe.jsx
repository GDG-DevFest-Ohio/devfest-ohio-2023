import React, { useRef, useState } from 'react'
import { Button } from '@/components/Button'

function ArrowRightIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null)
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('')

  const subscribe = async (e) => {
    e.preventDefault()

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error)

      return
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = ''
    setMessage('Success!! 🎉 🥳')
  }

  return (
    <div className="">
      <div className="">
        <form onSubmit={subscribe}>
          <h3 className="text-lg font-semibold tracking-tight text-blue-900">
            Sign up to our newsletter <span aria-hidden="true">&darr;</span>
          </h3>
          <div className="mt-5 flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
            <input
              id="email-input"
              name="email"
              type="email"
              ref={inputEl}
              required
              placeholder="Email address"
              aria-label="Email address"
              className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
            <Button type="submit">
              <span className="sr-only sm:not-sr-only">Sign up today</span>
              <span className="sm:hidden">
                <ArrowRightIcon className="w-6 h-6" />
              </span>
            </Button>
          </div>
        </form>
        <p>
          {message ? message : `Free candy at the back of the van. Hop in.`}
        </p>
      </div>
    </div>
  )
}
