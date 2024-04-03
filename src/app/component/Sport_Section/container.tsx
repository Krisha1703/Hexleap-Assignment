/*Component for each sport container*/
'use client'
import React from 'react';
import Image from "next/image";

/*The SportsProps interface defines the structure of the props expected by the Sports_Container component. */
interface SportsProps {
  src: string; // Source of the image
  alt: string; // Alternative text for the image
  caption: string; // Caption for the image
  totalEvents: number; //Displays total number of events
  sport: string; //Displays the name of the sport
  sectionId: string; // ID for the section
  sport_asideId: string; // ID for the aside tag
}

/*Sports_Container function with the parameters from the SportsProps interface*/
function Sports_Container({ src, alt, caption, totalEvents, sport, sectionId, sport_asideId }: SportsProps) {
  return (
    /*All the sports container are within this <section> tag*/
    <section id={sectionId} className="p-3 bg-white-500">
      <figure>
        <Image 
          src={src} // Image source
          width={200} // Image width
          height={200} // Image height
          alt={alt} // Alternative text for the image
        />
        {/*Title for the sport container*/}
        <figcaption  className='font-semibold text-left px-0 py-3'>{caption}</figcaption>
      </figure>

        {/*Sport details inside this <aside> tag*/}
        <aside id={sport_asideId} className='flex bg-gray-200 p-2 rounded-sm' style={{backgroundColor: '#F7F7F8'}}>

          <ul className='pr-8 text-left'> {/*Event details*/}
            <h5 className='text-xs' style={{color: '#525965'}}>Total Events</h5>
            <h4 className='font-semibold text-sm'>{totalEvents} Events</h4>
          </ul>

          <ul className='text-left'> {/*Sport details*/}
            <h5 className='text-xs' style={{color: '#525965'}}>Sport</h5>
            <h4 className='font-semibold text-sm'>{sport}</h4>
          </ul>

        </aside>
    </section>
  );
}

export default Sports_Container;
