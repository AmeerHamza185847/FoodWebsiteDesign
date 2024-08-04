import React from 'react';
import { Address } from './ContactComponent/Address';
import { ContactForm } from './ContactComponent/ContactForm';
import './Contact.css';

export const Contact = () => {
  return (
    <div>
      <div className='conatctComponentWrapper'>
        <Address />
        <ContactForm />
      </div>
    </div>
  )
}
