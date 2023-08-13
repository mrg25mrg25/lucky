import React from 'react'
import Image from 'next/image'
import viper from "../img/yo (4).jpg"
import av from "../img/av.jpg"
import Link from 'next/link'

export default function page() {
  return (
    <div>
      <div className="impact sm:flex">
        <div className="one  sm:w-2/5 bg-slate-400">
           <div className="the-color w-48 h-full bg-teal-400 mx-auto"></div>
         <div className="thesnake ">
         <div className="layer1 bg-slate-400 rounded-full mx-auto sm:p-2 ">
            <div className="layer2 bg-teal-400 rounded-full sm:p-2 ">
            <div className="img h-64 w-64 rounded-full">
               <Image src={viper} alt='viper' className='h-full w-full rounded-full'></Image>
            </div>
            </div>
           </div> 
           <div className="text px-2 text-teal-400 pb-5  sm:text-slate-600 uppercase text-center font-bold text-2xl tracking-wider pt-5">the red viper</div>
           <div className="more  mx-auto text-center text-white">
            <Link href="/impact">
              <div className="btn capitalize font-bold border w-24 mx-auto p-2
              border-slate-400 bg-slate-800 rounded">more info</div>
              </Link>
           </div>
         </div>
        </div>

        <div className="two bg-slate-400 sm:w-3/5">
           <div className="antivenom">
            <figure className='w-4/5 border-4 mx-auto' >
              <Image src={av} alt='ok' className='h-full w-full'></Image>
            </figure> 
           </div>
        </div>  

      </div>
    </div>
  )
}