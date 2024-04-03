/*Component for the sport section*/
import React from 'react';
import SportsContainer from "./container";
import Ads from "./ads";

export default function Sports_Section(){
    return(
      <div>
        {/*Solid blue underline under the header*/}
        <hr className="border-b-2 border-solid border-blue-500 w-1/12 ml-12 mt-2 my-4" />
        {/*Flex wraps all the sport containers insde for responsive design*/}
        <main className="flex flex-wrap justify-center items-center m-6 mt-8">

          {/*First sport container*/}
          <div className='m-2 max-w-50 max-h-100'>
            <SportsContainer  
              src="/images/first.png"
              alt="First Image"
              caption="Sacramento River Cats"
              totalEvents={48}
              sport="Baseball"
              sectionId='section1'
              sport_asideId='sport_aside1'
            />
          </div>

          {/*Second sport container*/}
          <div className='m-2 max-w-50 max-h-100'>
            <SportsContainer  
              src="/images/second.png"
              alt="Second Image"
              caption="Las Vegas Aviators"
              totalEvents={28}
              sport="Baseball"
              sectionId='section2'
              sport_asideId='sport_aside2'
            />
          </div>

          {/*Third sport container*/}
          <div className='m-2 max-w-50 max-h-100'>
            <SportsContainer  
              src="/images/3.png"
              alt="Third Image"
              caption="New Jersey Devils"
              totalEvents={15}
              sport="Ice Hockey"
              sectionId='section3'
              sport_asideId='sport_aside3'
            />
          </div>

          {/*Fourth sport container*/}
          <div className='m-2 max-w-50 max-h-100'>
            <SportsContainer 
              src="/images/second.png"
              alt="Fourth Image"
              caption="Las Vegas Aviators"
              totalEvents={28}
              sport="Baseball"
              sectionId='section4'
              sport_asideId='sport_aside4'
            />
          </div>

          {/*Ad container*/}
          <div className='m-1 max-w-50 max-h-100'>
            <Ads 
              src="/images/ads.png"
              alt="Ad Image"
              caption="Advertisement title"
              detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              sectionId='section5'
          />
          </div>
      
      </main>
    </div>
  );
}
