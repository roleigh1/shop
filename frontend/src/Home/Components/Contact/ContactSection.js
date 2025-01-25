
import { apiConfig } from '../../../config';
import useSWR from "swr"; 
import React from 'react'

const fetcher = (url) => fetch(url).then((res) => res.json()); 
export default function ContactSection() {
    const {BASE_URL,endpoints} = apiConfig; 
    const { data, error } = useSWR(`${BASE_URL}${endpoints.imgContact}`, fetcher);
  
  
    if (error) return <div>Error loading images</div>;
  
  
    if (!data) return <div>Loading...</div>;
  
  
    
  
    const content= data.result || [];
    const firstImage = content.length > 0 ? content[0].img : null;
    const secondImage = content.length > 0 ? content[1].img : null;
  return (
    <div>
        <div className='flex flex-row gap-4 '>
        <div className='col flex flex-col max-w-[40rem] text-center'>
            <h2>Want to know More?</h2>
            <h3>Reach out to us</h3>
            <button>Contact Us</button>

        </div>
        <div className='col flex justify-center'></div>
        <img className=' rounded-full w-[14rem] h-[14rem]' src={firstImage}></img>
        <img className=' rounded-full w-[15rem] h-[15rem]' src={secondImage}></img>
        </div>
    </div>
  )
}
