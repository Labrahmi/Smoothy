import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './App.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import image from './assets/imagox.webp'

function App() {
  const textRef = useRef(null);
  const sectionRef_1 = useRef(null);
  const sectionRef_2 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

    // Animation for the first section
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.5,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%', // Trigger animation when 80% of the section is visible
          end: 'bottom 20%', // Untrigger animation when 20% of the section is visible
          toggleActions: 'play none none reverse', // Animation plays when entering the viewport, reverses when leaving
          // markers: true // Uncomment to visualize ScrollTrigger markers for debugging
        }
      }
    );

    // Animation for the second section
    gsap.fromTo(
      sectionRef_1.current,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef_1.current,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animation for the third section
    gsap.fromTo(
      sectionRef_2.current,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef_2.current,
          start: 'top 90%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, []);


  return (
    <div className='font-roboto selection:bg-white selection:text-black'>
      <div ref={textRef} className='text-left pt-32 flex flex-col gap-6 text-zinc-200 font-semibold'>
        <h1 className='text-4xl md:text-5xl lg:text-8xl'>Software Engineer</h1>
        <h1 className='text-4xl md:text-5xl lg:text-8xl'>Full-Stack Web Developer</h1>
        <h1 className='text-4xl md:text-5xl lg:text-8xl'>Systems Architect</h1>
        <p className='font-light '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta illum ratione quibusdam quod rerum porro ullam quo nam nostrum impedit, iste dolore placeat architecto inventore neque, alias autem ex fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illo esse consectetur eius quia. Fugit, voluptates! In facere perspiciatis ullam totam magni atque, error quas illo vitae laborum ad assumenda.</p>
      </div>
      <div className='flex py-4'></div>
      <div  className='text-left'>
        <div className=''>
          <div ref={sectionRef_1} id='image-container' className='rounded-2xl overflow-hidden cursor-pointer border border-zinc-600'><img src={image} alt='imagex' className='flex grayscale opacity-9- hover:opacity-100 hover:grayscale-0 blur-[1px] hover:blur-0 hover:scale-[1.02] transition-all duration-700 ease-in-out'/></div>
          <div className='flex py-6'></div>
          <div ref={sectionRef_2} className='grid lg:grid-cols-3 gap-8 lg:gap-12'>
            <div className='bg-black bg-opacity-15 hover:bg-opacity-30 text-slate-100 flex gap-2 flex-col p-6 py-8 min-h-64 rounded-xl border border-zinc-600 transition-all ease-in-out duration-150'>
              <h1 className='text-3xl font-bold text-left text-zinc-300'>⌘ Peer Learning</h1>
              <div className='text-left font-light'>Peer learning is about collaborating with peers to learn collectively, sharing ideas, supporting each other, and problem-solving together. This interactive approach empowers students to control their learning.</div>
            </div>
            <div className='bg-black bg-opacity-15 hover:bg-opacity-30 text-slate-100 flex gap-2 flex-col p-6 py-8 min-h-64 rounded-xl border border-zinc-600 transition-all ease-in-out duration-150'>
              <h1 className='text-3xl font-bold text-left text-zinc-300'>⌘ Peer Assessment</h1>
              <div className='text-left font-light'>Peer assessment replaces traditional grading, where students evaluate each other's work through discussion for better understanding and early issue resolution. It allows sharing perspectives for a more reflective final grade.</div>
            </div>
            <div className='bg-black bg-opacity-15 hover:bg-opacity-30 text-slate-100 flex gap-2 flex-col p-6 py-8 min-h-64 rounded-xl border border-zinc-600 transition-all ease-in-out duration-150'>
              <h1 className='text-3xl font-bold text-left text-zinc-300'>⌘ Gamification</h1>
              <div className='text-left font-light'>Each student learns at their own speed at 1337, with teachings tailored to individual progress, ensuring nobody falls behind in the entirely personalized course.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
