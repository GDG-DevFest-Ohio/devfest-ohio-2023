import { AddToCalendarButton } from 'add-to-calendar-button-react'

export default function Banner() {
  return (
    <div className="flex items-center justify-center gap-x-6 rounded-lg  px-4 py-2.5 text-center sm:px-3.5  sm:px-6 ">
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
      ></AddToCalendarButton>
    </div>
  )
}
