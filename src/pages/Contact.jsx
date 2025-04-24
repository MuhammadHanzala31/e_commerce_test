import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import emailjs from '@emailjs/browser';

import ContactInput from '../components/ContactInput'

function Contact() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [message, setMessage] = useState("");
 

    const sendEmail = (e) => {
        e.preventDefault();
      
        const templateParams = {
          user_name: name,
          user_email: email,
          user_phone: phone,
          message,
        };
      
        emailjs.send(
          'service_8c9jl9c',       // Service ID
          'template_i8o2ffj',      // Template ID
          templateParams,
          'A8FANYUjEk5HVDcdm'      // Public Key
        ).then(
          (result) => {
            console.log('SUCCESS!', result.text);
            alert('Email sent successfully!');
            // Reset form fields
            setname('');
            setemail('');
            setphone('');
            setMessage('');
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert('Email failed to send.');
          }
        );
      };
  
    return (
        <div>
            <Navbar />
            <section className='py-[100px] w-[90%] mx-auto'>
                <span className='text-[#00000096] text-[16px] font-normal'>Home / <span className='text-black'>Contact</span></span>
                <div className='flex gap-[30px]'>
                    <div className='w-[30%] bg-white shadow-lg rounded p-[35px]'>
                        <div className='flex gap-[10px] items-center'>
                            <div className='h-[40px] w-[40px] flex justify-center items-center rounded-full text-white bg-blue-950'>
                                <i className="ri-phone-line text-[22px]"></i>
                            </div>
                            <span className='text-[16px] text-black font-semibold font-inter'>Call To Us</span>
                        </div>
                        <p className='mt-[10px] text-[#000000] font-normal font-inter'>We are available 24/7, 7 days a week.</p>
                        <p className='mt-[10px] text-[#000000] font-normal font-inter pb-[20px] border-b-2 border-gray-400'>Phone: +8801611112222</p>
                        <div className='flex gap-[10px] items-center mt-[20px]'>
                            <div className='h-[40px] w-[40px] flex justify-center items-center rounded-full text-white bg-blue-950'>
                                <i className="ri-mail-line text-[22px]"></i>
                            </div>
                            <span className='text-[16px] text-black font-semibold font-inter'>Write To US</span>
                        </div>
                        <p className='mt-[10px] text-[#000000] font-normal font-inter'>Fill out our form and we will contact you within 24 hours.</p>
                        <p className='mt-[10px] text-[#000000] font-normal font-inter'>Emails: customer@exclusive.com</p>
                        <p className='mt-[10px] text-[#000000] font-normal font-inter'>Emails: customer@exclusive.com</p>
                    </div>
                    <div className='bg-white shadow-lg p-[35px] rounded'>
                        <div className='flex gap-[16px] items-center'>
                            <ContactInput placeholder={'Your Name *'} classes={'w-[32%]'}  value={name} change={(e)=>setname(e.target.value)}/>
                            <ContactInput placeholder={'Your Email *'} classes={'w-[32%]'} value={email} change={(e)=>setemail(e.target.value)} />
                            <ContactInput  placeholder={'Your Phone *'} classes={'w-[32%]'} value={phone}  change={(e)=>setphone(e.target.value)}/>
                        </div>
                        <textarea value={message} onChange={(e)=>setMessage(e.target.value)} className={`mt-[16px] bg-[#F5F5F5] h-[200px] resize-none w-full py-[12px] focus:outline-none px-[16px] rounded placeholder:text-[16px] placeholder:text-[#0000007a] placeholder:font-normal text-[#0000007a] text-[16px] font-normal`}
                        placeholder='Your Message'
                        >

                        </textarea>
                        <div className='flex justify-end mt-[16px]'>
                            <button onClick={(e)=>sendEmail(e)} className='bg-blue-950 text-white font-medium text-[16px] py-[16px] px-[48px] rounded' >Send Message</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Contact
