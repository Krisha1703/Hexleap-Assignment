/*Component for handling toggle switch between light and dark themes*/

'use client'
import React, { useState } from 'react';

export default function ToggleMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleMode = () => {
        setIsDarkMode(prevMode => !prevMode);
        
        // Changing background color of the entire webpage
        document.body.style.backgroundColor = isDarkMode ? '#F7F7F8' : '#292B32';
       
        // Changing color of <header> tags
        const headerTags = document.getElementsByTagName('header');
        Array.from(headerTags).forEach(tag => {
            tag.style.color = isDarkMode ? 'black' : 'white';
        });

        // Changing color of <p> tags
        const pTag = document.getElementsByTagName('p');
        Array.from(pTag).forEach(tag => {
            tag.style.color = isDarkMode ? 'black' : 'white';
        });
        
        // Changing the styles of the mode button when clicked on
        const modeButton = document.querySelector('.mode') as HTMLElement;
        if (modeButton) {
            modeButton.style.backgroundImage = isDarkMode ? "url('/images/night.png')" : "url('/images/day.png')" ;
            modeButton.style.backgroundColor = isDarkMode ? "blue" : "rgb(0, 221, 255)" ;
            modeButton.style.backgroundPosition = isDarkMode ? "left" : "right" ;
        }

        // Changing background color of the id: sectionId, where Id is the value ranging from 1 to 8
        for (let i = 1; i <= 8; i++) { 
            const sectionId = `section${i}`;
            const section = document.getElementById(sectionId) as HTMLElement;
            if (section) {
                section.style.backgroundColor = isDarkMode ? 'white' : '#3B3E47';
            }
        }

        // Changing background color of the id: sport_asideId, where Id is the value ranging from 1 to 4
        for (let i = 1; i <= 4; i++) {  // Refers to <aside> tags used for the sport_section
            const sport_asideId = `sport_aside${i}`;
            const sport_aside = document.getElementById(sport_asideId) as HTMLElement;
            if (sport_aside) {
                sport_aside.style.backgroundColor = isDarkMode ? '#F7F7F8' : '#292B32';
            }
        }
       
         // Changing color of <h4> tags
        const h4Tags = document.getElementsByTagName('h4');
        Array.from(h4Tags).forEach(tag => {
            tag.style.color = isDarkMode ? 'black' : 'white';
        });

        // Changing color of <h5> tags
        const h5Tags = document.getElementsByTagName('h5');
        Array.from(h5Tags).forEach(tag => {
            tag.style.color = isDarkMode ? '#525965' : '#DFDFDF';
        });

        // Changing color of <h2> tags
        const h2Tags = document.getElementsByTagName('h2');
        Array.from(h2Tags).forEach(tag => {
            tag.style.color = isDarkMode ? 'black' : 'white';
        });

        // Changing color of <figcaption> tags
        const captionTags = document.getElementsByTagName('figcaption');
        Array.from(captionTags).forEach(tag => {
            tag.style.color = isDarkMode ? 'black' : 'white';
        });

        // Changing color of <article> tags
        const ad_article = document.getElementById('article') as HTMLElement;
        ad_article.style.color = isDarkMode ? 'black' : 'white';

        // Changing the display of the ad border when dark theme is switched on
        const ad_border= document.getElementById('ad_border') as HTMLElement;
        ad_border.style.display = isDarkMode ? 'block' : 'none';

        // Changing background image of ticket_section
        const main = document.getElementById('main') as HTMLElement;
        main.style.backgroundImage = isDarkMode 
        ? 'linear-gradient(180deg, #F9F8FF, #F3F9FF)'
        : 'linear-gradient(180deg, #18282A, #221A2C)' 

        // Changing spotlight styles based on light and dark themes
        for (let i = 1; i <= 3; i++) {
            const L_spotlightId = `L_spotlightId${i}`;
            const R_spotlightId = `R_spotlightId${i}`;
            const L_spotlight = document.getElementById(L_spotlightId) as HTMLElement;
            const R_spotlight = document.getElementById(R_spotlightId) as HTMLElement;
            if (L_spotlight) {
                L_spotlight.style.backgroundImage = isDarkMode 
                ? 'linear-gradient(180deg, #F9F8FF, #F3F9FF)'
                : 'linear-gradient(180deg, #18282A, #221A2C)' 
            }
            if (R_spotlight) {
                R_spotlight.style.backgroundImage = isDarkMode 
                ? 'linear-gradient(180deg, #F9F8FF, #F3F9FF)'
                : 'linear-gradient(180deg, #18282A, #221A2C)' 
            }
        }

        // Changing background color of the dashed border in tickets
        const dash_border = document.getElementById('dash_border') as HTMLElement;
        dash_border.style.backgroundColor = isDarkMode ? 'white' : '#3B3E47';   
      };

  return (
    <div >
       {/*Mode button to switch between light and dark themes*/}
      <button className='mode' onClick={toggleMode}></button>
    </div>
  );
}

