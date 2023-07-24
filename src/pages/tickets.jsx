import React from 'react';
import Head from 'next/head'
import OrderTickets from '@/components/OrderTickets'

export default function TicketsPage() {
   return (
     <>
          {/* TODO Remove or modify tickets button in header in banner after navigating to a tickets page  */}
      <Head>
        <title>Ohio DevFest Hackathon & Conference | Tickets</title>
        <meta
          name="description"
          content="The 2023 Ohio DevFest is a local tech conference hosted by Ohio-based Google Developer Groups (GDGs). It features talks, hands-on demos, workshops, and codelabs on the latest Google tech, plus featured talks intended to broaden interest and appeal."
        />
       </Head>
       
      <OrderTickets />

    </>
  )
}
TicketsPage.layoutProps = {
  // Add any props you want to pass to the Layout component for this page
};