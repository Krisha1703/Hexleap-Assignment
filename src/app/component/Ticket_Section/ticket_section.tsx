/*Component for the ticket section*/

'use client'
import React, {useState,useEffect} from 'react';
import BookingContainer from "./booking_container"; /*Importing booking_container for each ticket*/

export default function Ticket_Section() {
  const [isFullWidth, setIsFullWidth] = useState(false);

    useEffect(() => {
        // Function to check if the width is full
        const checkWidth = () => {
            const windowWidth = window.innerWidth;
            setIsFullWidth(windowWidth >= 1024); // Adjust the breakpoint as needed
        };

        // Call the function when the component mounts and when the window is resized
        checkWidth();
        window.addEventListener('resize', checkWidth);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', checkWidth);
    }, []);


  return (
    <div>
      {/*Link to CSS icons*/}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      {/*All the content of ticket_section is within this <main> tags*/}
      <main id='main' className='pt-10 mt-20' style={{ backgroundImage: 'linear-gradient(180deg, #F9F8FF, #F3F9FF)' }}>
        {/*Heading of the ticket section*/}
        <header className='text-center font-bold text-5xl'>Collection Spotlight</header>
        {/*Introduction text of the ticket section*/}
        <p className='text-center w-10/12 mx-auto p-3'>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
        {/*All the ticket containers and buttons are within this <section> tags*/}
        <section className="flex justify-center m-9 mt-8 mx-auto items-center relative">

          {/*Left button or previous button*/}
          <button className="w-14 h-20 border border-solid flex justify-center items-center absolute left-10 top-50 mr-10" style={{borderColor: '#2C9CF0'}}>
            <i className="fa fa-angle-left" style={{fontSize:"3rem", color: '#2C9CF0'}}></i>
          </button>
        
        {/*Wraps all the ticket containers inside this <div> tag*/}
          <div className={`flex flex-wrap justify-center items-center ${isFullWidth ? 'w-full lg:flex' : ''}`} style={{ display: isFullWidth ? 'flex' : 'block' }}>
            
            {/*Changing the margin size and max-width of the ticket container based on the screen size for resposnive design*/}
            <div className='m-5' style={{ maxWidth: isFullWidth ? '20%' : '70%', margin: isFullWidth ? '' : 'auto' }}>
              {/*First ticket container*/}
              <BookingContainer
                src="/images/ticket-1.png"
                alt="Ticket Image"
                caption="Las Vegas Aviators"
                time="OCT 15 | SUN | 4:30 PM"
                detail="Las Vegas Ballpark, Las Vegas, Nevada"
                book="Take Flight Collection"
                sectionId='section6'
                L_spotlightId = 'L_spotlightId1'
                R_spotlightId = 'R_spotlightId1'
              />
            </div>

            {/*Changing the margin size and max-width of the ticket container based on the screen size for resposnive design*/}
            <div className='m-5' style={{ maxWidth: isFullWidth ? '20%' : '70%' , margin: isFullWidth ? '' : 'auto'}}>
              {/*Second ticket container*/}
              <BookingContainer
                src="/images/ticket-2.png"
                alt="Ticket Image"
                caption="Sacramento River Cats"
                time="OCT 15 | SUN | 4:30 PM"
                detail="Sutter Health Park, Sacramento, California"
                book="Orange Collection"
                sectionId='section7'
                L_spotlightId = 'L_spotlightId2'
                R_spotlightId = 'R_spotlightId2'
              />
            </div>

            {/*Changing the margin size and max-width of the ticket container based on the screen size for resposnive design*/}
            <div className='m-5' style={{ maxWidth: isFullWidth ? '20%' : '70%' , margin: isFullWidth ? '' : 'auto'}}>
              {/*Third ticket container*/}
              <BookingContainer
                src="/images/ticket-1.png"
                alt="Ticket Image"
                caption="Las Vegas Aviators"
                time="OCT 15 | SUN | 4:30 PM"
                detail="Las Vegas Ballpark, Las Vegas, Nevada"
                book="Take Flight Collection"
                sectionId='section8'
                L_spotlightId = 'L_spotlightId3'
                R_spotlightId = 'R_spotlightId3'
              />
            </div>

          </div>

         {/*Right button or previous button*/} 
          <button className="w-14 h-20 border border-solid flex justify-center items-center absolute right-10 top-50 ml-10" style={{borderColor: '#2C9CF0'}}>
            <i className="fa fa-angle-right" style={{fontSize:"3rem", color: '#2C9CF0' }}></i>
          </button>

        </section>
      </main>
    </div>
  );
}
