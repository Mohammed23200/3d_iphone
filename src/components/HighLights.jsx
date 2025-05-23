import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {rightImg, watchImg} from '../utils'

export const HighLights = () => {
  useGSAP(()=>{
    gsap.to("#title",{opacity:1,delay:1.5,y:0})
    gsap.to(".link",{opacity:1,duration:1,y:0,stagger:0.25})
  },[])
  return (
    <section id="highlights" className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className='screen-max-width'>
        <div className="mb-12 w-full items-end md:flex justify-between">
        <h1 id="title" className="section-heading">
          Get the Highlights 
        </h1>
        <div className='flex flex-wrap items-end gap-5'>
          <p className='link'>Watch the film
            <img src={watchImg} alt="watch" />
          </p>
          <p className='link'>Watch the event
            <img src={rightImg} alt="right" />
          </p>
        </div>
          </div>

      </div>
    </section>
  );
};
