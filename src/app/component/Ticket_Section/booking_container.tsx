/*Component for handling each ticket container*/

import React from 'react';
import Image from "next/image";
import Dashed_Border from './dashed_border';

/*The BookingProps interface defines the structure of the props expected by the Booking_Container component. */
interface BookingProps {
  src: string; // Source of the image
  alt: string; // Alternative text for the image
  caption: string; // Caption for the image
  time: string; // Time information
  detail: string; // Details about the event
  book: string; // Text for the booking button
  sectionId: string; // ID for the section
  L_spotlightId: string; // ID for the left spotlight
  R_spotlightId: string; // ID for the right spotlight
}

/*Booking_Container function with the parameters from the BookingProps interface*/
function Booking_Container({ src, alt, caption, time, detail, book, sectionId,L_spotlightId, R_spotlightId }: BookingProps) {
  return (
    /*Container for each ticket*/
    <section id={sectionId} className="p-3 bg-white">
      <figure>
        <Image 
          src={src} // Image source
          width={300} // Image width
          height={300} // Image height
          alt={alt} // Alternative text for the image
        />
        
        {/*Ticket spolight*/}
        <aside className='flex justify-between mt-[-10px]'>
            <div id={L_spotlightId} className='w-5 h-5 rounded-full ml-[-20px]' style={{backgroundImage: 'linear-gradient(180deg, #F9F8FF, #F3F9FF)'}}></div>        
            <div id={R_spotlightId} className='w-5 h-5 rounded-full mr-[-20px]' style={{backgroundImage: 'linear-gradient(180deg, #F9F8FF, #F3F9FF)'}}></div>
        </aside>

        <Dashed_Border /> {/*Ticket dash border*/}

        {/*Ticket name for each container*/}
        <figcaption className='font-semibold text-lg text-center px-0 py-2'>{caption}</figcaption>
        {/*Ticket time for each container*/}
        <figcaption className='text-center font-medium text-sm px-0 py-2'>{time}</figcaption>
        {/*Ticket venue details for each container*/}
        <h2 className='text-center text-sm py-2' style={{color: "#525965"}}>{detail}</h2>
        {/*Ticket booking button for each container*/}
        <button className='text-center text-white text-sm p-3 pl-10 pr-10 w-full' style={{backgroundColor: "#1D1D1F"}}>{book}</button>
     
      </figure>
    </section>
  );
}

export default Booking_Container;
