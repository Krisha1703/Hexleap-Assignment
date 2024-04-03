/* Main/Root component */

/*Importing all the necessary components*/
import React from 'react';
import TicketSection from './component/Ticket_Section/ticket_section';
import SportSection from './component/Sport_Section/sport_section';
import ToggleMode from './ToggleMode';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Hexleap Assignment - Krisha', /*Title of the webpage*/
  icons: [{ rel: 'icon', url: '/images/favicon.ico' }], /*Favicon of the webpage*/
};

export default function Home() {
  return (
    <div>
      {/*Header section of the webpage*/}
      <div className='flex'>
        <header className='font-bold ml-12 mr-0 mb-0 mt-10 text-3xl' id='header'>Sports</header>
        <ToggleMode />
      </div>

      <SportSection /> {/*Sports section of the webpage*/}
      <button className='p-3 pl-7 pr-7 mx-auto block rounded-md text-white' style={{backgroundColor:'#2C9CF0'}}>See More</button>

      <TicketSection />  {/*Ticket section of the webpage*/}
    </div>
  );
}
