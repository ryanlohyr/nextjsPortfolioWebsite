"use client";


import Image from "next/image";

import { ModeToggle } from "@/components/ui/darkModeToggleButton";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
	
	return (
		<div id="app">
  
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutMe></AboutMe> 
      <Experience></Experience>
      <Projects></Projects>
     
     
		</div>
	);
}
