import React, { useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReactDOM from "react-dom/client";
import gsap from 'gsap';
import '../App.css';
import 'boxicons';
import Header from '../components/header.jsx'
import HeroSection from '../components/HeroSection.jsx'
import LatestProject from '../components/LatestProject.jsx'
import TeamSection from '../components/TeamSection.jsx'
import ClubValues from '../components/ClubValues.jsx'

function Home() {
    // const textRef = useRef(null);
    const sectionRef_0 = useRef(null);
    const sectionRef_1 = useRef(null);
    const sectionRef_2 = useRef(null);
    const sectionRef_3 = useRef(null);
    const sectionRef_4 = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin
        let sections = [sectionRef_0, sectionRef_1, sectionRef_2, sectionRef_3, sectionRef_4];
        sections.forEach((sectionRef, index) => {
            gsap.fromTo(
                sectionRef.current,
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
                        trigger: sectionRef.current,
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

    }, []);
    return (
        <div className='font-roboto selection:bg-white selection:text-black'>
            <Header />
            <main className='' >
                <div ref={sectionRef_0}>
                    <HeroSection />
                </div>
                <div className='z-10' ref={sectionRef_1}>
                    <LatestProject />
                </div>
                <div ref={sectionRef_2}>
                    <ClubValues />
                </div>
                <div ref={sectionRef_3}>
                    <TeamSection />
                </div>
                {/* add discord join link */}
                <footer ref={sectionRef_4} className='font-thin'>
                    Made with 🖤 in c2r6p8
                </footer>
            </main>
        </div>
    )
}

export default Home
