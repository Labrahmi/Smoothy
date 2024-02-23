import React, { useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReactDOM from "react-dom/client";
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import '../App.css';
import 'boxicons';
import Header from '../components/header.jsx'
import back from '../assets/back-04.png'
import HeroSection from '../components/HeroSection.jsx'
import LatestProject from '../components/LatestProject.jsx'
import TeamSection from '../components/TeamSection.jsx'
import ClubValues from '../components/ClubValues.jsx'

function RHub() {
    // 
    const Projects = ["Libft", "ft_printf", "Born2beroot", "get_next_line", "so_long", "FdF", "fract-ol", "push_swap", "minitalk", "pipex", "Philosophers", "minishell", "NetPractice", "cub3d", "miniRT", "CPP Module 0-4", "CPP Module 5-9", "webserv", "ft_irc", "Inception", "ft_transcendence"];
    const Languages = ["C++", "C", "Javascript", "Python", "Java", "Ruby", "Shell", "Makefile", "MySQL", "PostgreSQL", "MongoDB", "AWS", "Azure", "Docker", "Kubernetes", "Jenkins"];
    const Posts = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    // 
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin
        const PostsDOM = document.querySelectorAll('.post');
        PostsDOM.forEach(element => {
            gsap.fromTo(
                element,
                { opacity: 0, y: 60 },
                {
                    duration: 1.3, opacity: 1, y: 0, stagger: 0.5, delay: 0.3,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: element,
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
    }, []);
    return (
        <div className='font-roboto selection:bg-white selection:text-black'>
            <Header />
            <main className="max-w-full flex flex-col items-center">
                <Link to='/r-hub' className='flex py-8 my-8 w-full text-zinc-50 justify-center bg-rhub-hero uppercase bg-contain font-black select-none rounded-xl transition-all duration-150 ease-in-out cursor-pointer shadow-xl hover:shadow-2xl'>
                    <div className='text-2xl md:text-3xl'><span className='text-3xl md:text-4xl p-2 bg-zinc-500 bg-opacity-10 text-zinc-50 rounded-lg mx-2'>R-Hub</span>, Resources and more</div>
                </Link>
                <div className='flex py-8'></div>
                <div className="">
                    <form method="GET" action="/search" className="text-gray-50 text-xl w-full flex justify-between items-center border border-zinc-600 rounded overflow-hidden divide-x divide-zinc-600 space-x-2 font-light bg-zinc-900">
                        <input name="prompt" className="bg-transparent p-2 px-4 focus:outline-none w-full md:w-1/2" placeholder="Type your keyword, ex: c++, c, Algorithms..." type="text" />
                        <select defaultValue={'Project'} className="bg-transparent hidden md:flex p-4 w-1/3 focus:outline-none cursor-pointer" name="project" id="project">
                            <option disabled value="Project">Project</option>
                            {Projects.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                        <select defaultValue={'Language'} className="bg-transparent hidden md:flex p-4 w-1/3 focus:outline-none cursor-pointer" name="language" id="language">
                            <option disabled value="Language">Language</option>
                            {Languages.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                        <button type="submit" className="flex px-3 h-full py-4 hover:bg-zinc-950 hover:fill-zinc-50 fill-zinc-400 transition-all duration-200 ease-in-out"><box-icon name='search'></box-icon></button>
                    </form>
                    <div className='flex py-2'></div><div className='opacity-0'><hr /></div><div className='flex py-2'></div>
                    <div className="w-full flex justify-between py-2 bg-transparent">
                        <div className="m-1 font-light text-xl flex justify-center items-center space-x-1">
                            <div className="flex fill-zinc-300"><box-icon name='world'></box-icon></div>
                            <div>resourse_type</div>
                        </div>
                    </div>
                    <div className='flex py-1'></div><div className='opacity-0'><hr /></div><div className='flex py-1'></div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Posts.map((post, index) => (
                            <div key={index} className="w-full flex flex-col justify-between items-center rounded shadow-xl border border-zinc-600 bg-zinc-800 overflow-hidden cursor-pointer hover:brightness-110 hover:shadow-2xl post" >
                                <img className='select-none border-b border-zinc-600 h-56 w-full object-cover' src='https://fireship.io/courses/nextjs/img/featured.webp' alt="" />
                                <div className='p-4'>
                                    <div className="w-full text-left">
                                        <a href="/r-hub/post/1024/" className="text-lg font-medium hover:underline transition-all duration-150 ease-in-out">
                                            React Supabase Full Course
                                        </a>
                                        <p className="font-thin m-1">
                                            ue iusto ab? Totam inventore fugit consectetur accusamus delectus dolore blanditiis natus temporibus? Vel quod perspiciatis architecto recusandae non! enim quae necessitatibus dolores? Consequuntur, rem..
                                        </p>
                                        <div className="flex flex-row space-x-2 pt-2 select-none">
                                            <a href="/tags?value=tag" className="w-fit p-1 px-3 rounded-lg border hover:bg-white hover:bg-opacity-10 transition-all duration-150 ease-in-out">#tag</a>
                                            <a href="/tags?value=tag" className="w-fit p-1 px-3 rounded-lg border hover:bg-white hover:bg-opacity-10 transition-all duration-150 ease-in-out">#tag</a>
                                            <a href="/tags?value=tag" className="w-fit p-1 px-3 rounded-lg border hover:bg-white hover:bg-opacity-10 transition-all duration-150 ease-in-out">#tag</a>
                                        </div>
                                        <div className='flex py-2'></div>
                                        <div className="flex space-x-2 rounded-lg select-none p-2 w-full justify-between">
                                            <button className="flex space-x-1 justify-center items-center fill-white">
                                                <box-icon name='like'></box-icon>
                                                <div className="text-sm text-center">17</div>
                                            </button>
                                            <button className="flex space-x-1 justify-center items-center fill-white">
                                                <box-icon name='dislike'></box-icon>
                                                <div className="text-sm text-center">0</div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main >
            <div className='flex py-4'></div><div className='opacity-50'><hr /></div><div className='flex py-4'></div>
            <footer className='font-thin'>
                Made with 🖤 in c2r6p8
            </footer>
        </div >
    )
}

export default RHub
