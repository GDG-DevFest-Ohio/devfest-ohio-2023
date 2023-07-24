import React, { useState } from 'react';

const OrderTickets = () => {
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [customerName, setCustomerName] = useState('');

  const handleTicketQuantityChange = (e) => {
    setTicketQuantity(parseInt(e.target.value));
  };

  const handleCustomerNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to submit the order here
    console.log(`Order submitted for ${ticketQuantity} ticket(s) by ${customerName}`);
  };

  return (
    // TODO: Add a form package to order tickets
    // TODO Form is a placeholder for now
  

    <div className='flex flex-col items-start justify-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:flex-nowrap'>
      <div className='flex flex-col items-start justify-center max-w-5xl mx-auto'>
        <h2 className='text-2xl'>Order Tickets</h2>

      <form onSubmit={handleSubmit} className='max-w-5xl'>
        <div className='flex'>
          <label htmlFor='ticketQuantity'  className="block text-sm font-medium leading-6 text-gray-900">
            Ticket Quantity:
            <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
            <input
              id='ticketQuantity'
              type="number"
              value={ticketQuantity}
              onChange={handleTicketQuantityChange}
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            /></div>
          </label>
        </div>
        <div>
          <label htmlFor='customerName'  className="block text-sm font-medium leading-6 text-gray-900">
            Customer Name:
            <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
            <input
              id='customerName'
              type="text"
              value={customerName}
              onChange={handleCustomerNameChange}
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            /></div>
          </label>
        </div>
        <button type="submit" className="px-3 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >Submit Order</button>
      </form>
      </div>
    </div>
  );
};

export default OrderTickets;
