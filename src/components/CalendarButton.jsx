import { AddToCalendarButton } from 'add-to-calendar-button-react'

export default function CalendarButton() {
  return (
    <div className="flex w-full justify-center sm:w-auto sm:justify-start lg:justify-center">
      <AddToCalendarButton
        name="Google DevFest 2023"
        description="The 2023 Ohio DevFest is a local tech conference & hackathon hosted by Ohio-based Google Developer Groups (GDGs). It features talks, hands-on demos, workshops, and codelabs on the latest Google tech, plus featured talks intended to broaden interest and appeal."
        startDate="2023-11-11"
        endDate="2023-11-12"
        timezpone="America/New_York"
        location="BGSU, Bowling Green, Ohio"
        availability="Busy"
        options={['Apple', 'Google', 'Yahoo', 'iCal']}
        buttonStyle="flat"
        trigger="click"
        lightMode="bodyScheme"
        className="rounded bg-blue-600 px-4 py-2 font-bold text-blue-600 hover:bg-blue-700"
      ></AddToCalendarButton>
    </div>
  )
}
