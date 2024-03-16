"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/projects/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const floatUp = {
	hidden: { y: 50, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1, // duration in seconds
		},
	},
	
};

export default function Home() {
	const [aboutRef, aboutInView] = useInView({ triggerOnce: false });
	const [experienceRef, experienceInView] = useInView({ triggerOnce: false });
	const [projectsRef, projectsInView] = useInView({ triggerOnce: false });
	const [contactRef, contactInView] = useInView({ triggerOnce: false });
	return (
		<div id="app">
			<Navbar type="website" />
			<motion.div>
				<Hero />
			</motion.div>
			<div className="bg-black text-white">
				<motion.div variants={floatUp} ref={aboutRef} initial="hidden" animate={aboutInView ? "visible" : "hidden"} >
					<AboutMe />
				</motion.div>
				<motion.div variants={floatUp} ref={experienceRef} initial="hidden" animate={experienceInView ? "visible" : "hidden"} >
					<Experience />
				</motion.div>
				<motion.div variants={floatUp} ref={projectsRef} initial="hidden" animate={projectsInView ? "visible" : "hidden"} >
					<Projects />
				</motion.div>
				<motion.div variants={floatUp} ref={contactRef} initial="hidden" animate={contactInView ? "visible" : "hidden"} >
					<ContactMe />
				</motion.div>
				<Footer />
			</div>
		</div>
	);
}
