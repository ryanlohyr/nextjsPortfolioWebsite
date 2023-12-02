"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/projects/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<div id="app">
			<Navbar ></Navbar>
			<Hero></Hero>
			<div className="bg-black text-white">
				<AboutMe></AboutMe>
				<Experience></Experience>
				<Projects></Projects>
				<ContactMe></ContactMe>
				<Footer></Footer>
			</div>
		</div>
	);
}
