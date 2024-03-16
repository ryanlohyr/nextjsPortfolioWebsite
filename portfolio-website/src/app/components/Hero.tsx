"use client"

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { particlesCursor } from "threejs-toys";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

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

const Hero = () => {
	const [showNotification, setShowNotification] = useState(false);
	const [slideOut, setSlideOut] = useState(false);

	const [index, setIndex] = useState(0);
	const [subIndex, setSubIndex] = useState(0);
	const [reverse, setReverse] = useState(false);
	const words = ["making things people want.", "Machine Learning", "Entrepreneurship", "Software Engineering"];
	const speed = 100; // Speed of typing, in milliseconds
	const delay = 1500; // Delay before untyping, in milliseconds

	useEffect(() => {
		if (subIndex === words[index].length + 1 && !reverse) {
			setTimeout(() => setReverse(true), delay);
			return;
		}

		if (subIndex === 0 && reverse) {
			setReverse(false);
			setIndex((index + 1) % words.length);
			return;
		}

		const timeout = setTimeout(() => {
			setSubIndex(currentSubIndex => currentSubIndex + (reverse ? -1 : 1));
		}, speed);

		return () => clearTimeout(timeout);
	}, [subIndex, index, reverse]);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const pc = particlesCursor({
				el: document.getElementById("hero"),
				gpgpuSize: 512,
				colors: [0x00ff00, 0x0000ff],
				color: 0xff0000,
				coordScale: 0.5,
				noiseIntensity: 0.00001,
				noiseTimeCoef: 0.0001,
				pointSize: 0.005,
				pointDecay: 0.0025,
				sleepRadiusX: 50,
				sleepRadiusY: 50,
				sleepTimeCoefX: 0.001,
				sleepTimeCoefY: 0.002,
			});

			pc.uniforms.uColor.value.set(Math.random() * 0xffffff);
			pc.uniforms.uCoordScale.value = 0.001 + Math.random() * 2;
			pc.uniforms.uNoiseIntensity.value = 0.0001 + Math.random() * 0.001;
			pc.uniforms.uPointSize.value = 1 + Math.random() * 3;

			document.body.addEventListener("click", function (event) {
				pc.uniforms.uColor.value.set(Math.random() * 0xffffff);
				pc.uniforms.uCoordScale.value = 0.001 + Math.random() * 2;
				pc.uniforms.uNoiseIntensity.value = 0.0001 + Math.random() * 0.001;
				pc.uniforms.uPointSize.value = 1 + Math.random() * 3;
			});

			return () => {
				// Clean up: remove event listener, etc.
			};
		}
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setShowNotification(true);
		  }, 1500);

		const timer = setTimeout(() => {
			setSlideOut(true);
		}, 4500); // Start slide out animation before hiding notification

		const removeNotificationTimer = setTimeout(() => {
			setShowNotification(false);
		}, 5000); // Hide notification after slide out

		return () => {
			clearTimeout(timer);
			clearTimeout(removeNotificationTimer);
		};
	}, []);

	const moveDown = () => {
		var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

		// Scroll the page by one viewport height
		// window.scrollTo({
		//     top: viewportHeight, // Scroll down by the height of the viewport
		//     behavior: 'smooth' // Smooth scroll
		// });
		const element = document.getElementById("about");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="relative flex items-center justify-center" id="hero">
			<div
				className="text-white absolute right-[5vw] bottom-10 flex bouncing-chevron button"
				onClick={() => {
					moveDown();
				}}
			>
				<ChevronDown></ChevronDown>
				<p className="select-none">Scroll Down</p>
			</div>
			{showNotification && (
				<div className={`notification ${slideOut ? "slide-out" : ""}`}>
					Drag/tap your mouse/finger on the homepage and see the effects!
				</div>
			)}
			<motion.div variants={floatUp} initial="hidden" animate="visible" >
				<h1 className="select-none w-auto h-auto leading-none my-auto mx-auto text-[60px]">
					Hi
					<br />
					I&lsquo;m Ryan
				</h1>

				<h3 className="select-none">An aspiring software engineer in NUS</h3>
				<h4 className="select-none">Interested in {words[index].substring(0, subIndex)}</h4>
				<div className="flex items-center justify-center">
					<div className="flex justify-between w-32">
						<a target="_blank" href="https://github.com/ryanlohyr">
							<Github className="icon" />
						</a>
						<a target="_blank" href="https://www.linkedin.com/in/ryanlohyr/">
							<Linkedin className="icon" />
						</a>
						<a target="_blank" href="mailto:ryanloh29@gmail.com">
							<Mail className="icon" />
						</a>
					</div>
				</div>
				
			</motion.div>
		</div>
	);
};

export default Hero;
