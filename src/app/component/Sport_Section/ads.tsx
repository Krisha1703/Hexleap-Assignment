/*Component for the ad container*/
import React from 'react';
import Image from "next/image";

/*The AdProps interface defines the structure of the props expected by the Ad component. */
interface AdsProps {
  src: string; // Source of the image
  alt: string; // Alternative text for the image
  caption: string; // Caption for the image/ Ad Title
  detail: string; // Details about the ad
  sectionId: string; // ID for the section
}

/*Ads function with the parameters from the AdsProps interface*/
function Ads({ src, alt, caption, detail,  sectionId }: AdsProps) {
  return (
    /*All the content of adverstisement is within this <section> tag*/
    <section id={sectionId} className="relative bg-white p-3 max-w-60">
      <figure>
        <Image 
          src={src} // Image source
          width={300} // Image width
          height={300} // Image height
          alt={alt} // Alternative text for the image
        />

        {/*Button for denoting the advertisement*/}
        <button className="absolute top-3 right-3 bg-black text-white px-5 py-1">Ad</button>
        {/*Advertisement Title*/}
        <figcaption className='relative font-semibold text-left px-2 py-3' >{caption}</figcaption>

      </figure>

      {/*Advertisement Detail*/}
      <article id='article' className='text-xs whitespace-normal pb-14 px-2 pr-3'>{detail}</article> 

      {/*Advertisement border surrounding the title and detail*/}
      <div id='ad_border'>
        <div className='absolute bottom-0 left-0 right-0 px-1'>
          <hr className='border border-solid w-45 h-1 ml-2 mr-2 mb-0 ' style={{borderColor: '#006555', borderBottom: '0px'}}/>
          <hr className='border border-solid w-45 h-40 ml-2 mr-2 mb-20 ad_border' style={{borderColor: '#006555', borderBottom: '0px', borderTop: '0px'}}/>
        </div>

        <div className='absolute bottom-0 left-0 right-0 px-1'>
          <hr className='border border-solid w-45 h-40 ml-2 mr-2 mb-2 ad_border' style={{borderColor: '#006555', borderTop: '0px'}}/>
        </div>
      </div>

    </section>
  );
}

export default Ads;
