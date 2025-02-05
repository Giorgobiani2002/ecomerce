import React from 'react';
import ContactUsS1 from '../__molecules/ContactUsS1';
import ContactUsS2 from '../__molecules/ContactUsS2';
import ContactUsS3 from '../__molecules/ContactUsS3';
import ContactUsS4 from '../__molecules/ContactUsS4';

export default function ContactUs() {
  return (
    <div className=' m-auto mt-[80px] px-[32px]'>
      <ContactUsS1 />
      <ContactUsS2 />
      <ContactUsS3 />
      <ContactUsS4 />
    </div>
  );
}
