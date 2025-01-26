
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
        <div className='flex flex-row   sm:flex-col   rounded-lg
      
 h-[20rem]'>
  <br className='' /> 
        <div className='col flex flex-col  flex-wrap text-center justify-center'>
            <h2>Want to know More?</h2>
            <h3>Reach out to us</h3>
            <button>Contact Us</button>

        </div>
        <div className=' flex justify-start'>
        <img className=' rounded-lg w-[14rem] h-[14rem] relative left-24 top-8' src={firstImage}></img>
        <div className='w-[15rem] h-[15rem] rounded-full bg-green-50 mt-8'></div>
        <img className=' rounded-lg w-[14rem] h-[14rem] relative top-16 right-20' src={secondImage}></img>
        </div>
       
        </div>
    </div>
  )
}
