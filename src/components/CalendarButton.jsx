import React, { useEffect } from 'react';
import { AddToCalendarButton } from 'add-to-calendar-button-react'

function CalendarButton() {
    useEffect(() => {
        console.log('Component did mount!');

        // Optionally, you can return a cleanup function
        return () => {
            console.log('Component will unmount!');
        };
    }, []); // The empty array means this useEffect acts like componentDidMount and componentWillUnmount

  return (
        
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
        className="px-4 py-2 font-bold text-blue-600 bg-blue-600 rounded hover:bg-blue-700"
      ></AddToCalendarButton>
    
    );
}
export default CalendarButton;