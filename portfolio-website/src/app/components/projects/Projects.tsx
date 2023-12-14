import React from "react";
import ProfilePic from "../../../../public/profilePic.png";
import FoodBank from "../../../../public/Foodbank.png";
import Otdelit from "../../../../public/Otdelit1.png";
import QuizzlerHomeScreen from "../../../../public/homeScreen.png";
import NUSDegs from "../../../../public/NUSDegs.png";
import chaChing from "../../../../public/chaChing.png";
import orbital from "../../../../public/Orbital Poster MS3 Poster -front.png";
import LingoBot from "../../../../public/LingoBot.png";
import PortfolioWebsite from "../../../../public/portfolioWebsite.png";
import CarouselManager from "./Slider";
import { StaticImageData } from "next/image";

const Projects = () => {
	const web = "Web Application"
	const ios = "iOS"
	const whatsapp = "Whatsapp Chatbot"
	const cli = "Command Line Application"
	type Slide = {
		image: StaticImageData;
		text: string;
		description: string;
		skills: string;
		platform: string;
		liveLink: string;
	};

	
	const slides :Slide[] = [
		{
			image: LingoBot,
			text: "LingoBot",
			description:"First Machine learning hackathon and was really suprised we got all the way to the finals! Used so many AI tools in this project, including OpenAI GPT3.5, TensorFlow recommenders, Google Cloud Speech-To-Text",
			skills:"TensorFlow, Flask, MySQL",
			platform:whatsapp,
			liveLink:""
		},
		{
			image: orbital,
			text: "ConnectMama",
			description: "Tasked to create an API Gateway from scratch using ByteDance's open source middleware, CloudWeGo. Learnt a lot about how useful API Gatways in making efficient and scalable web applications.",
			skills:"Apache Thrift, CloudWeGo, GO",
			platform:"API Gateway",
			liveLink:""
		},
		{
			image: Otdelit,
			text: "Otdelit",
			description:"This game was born from the hackathon Global Game Jam 2022, however we enjoyed the process of creating the game so much we continued on with development after the hackathon and eventually launched the game on the unity play website",
			skills:"C#, Unity Game Engine",
			platform:web,
			liveLink:"https://play.unity.com/mg/other/ggj-a01ps"
		},
		{
			image: FoodBank,
			text: "FoodBank VMS",
			description:"The first hackathon that we ever won, although it was a no-code application, we still had to build the entire system from the admin portal to the user portal and ensure both systems work as expected. Learnt a lot about communication and understanding our users.",
			skills:"Bubble io",
			platform:web,
			liveLink:""
		},
		{
			image: PortfolioWebsite,
			text: "This Website",
			description:"Was really fun to make, shadcn and tailwind really makes web development so much easier. Third time building a portfolio website, the other two are (https://ryanlohyr.github.io/ryanloh/) and (https://ryanlohyr.github.io/practice-portfolio/) if you're wondering.",
			skills:"NEXTJs, ThreeJS, tailwind, typescript",
			platform:web,
			liveLink:""
		},
		{
			image: chaChing,
			text: "ChaChing",
			description:"The 'TikTok Pay' project is a hybrid fiat-crypto payment system designed to simplify e-wallet and cryptocurrency wallet management, merging traditional and digital currency transactions using TikTok Token (TTT)",
			skills:"Vue.JS, Stripe, Flask, MySQL",
			platform:web,
			liveLink:"https://devpost.com/software/tiktok-pay-8v2bg1"
		},
		{
			image: NUSDegs,
			text: "NUS Degs",
			description:"A project under CS2113 (Software Engineering & Object-Oriented Programming). One of the most time consuming mods I have ever taken but it was so so fun. Using topological sort to create the recommended schedule was refreshing as I did not know all that leetcode will actually come in handy.",
			skills:"Java, Gradle, JUnit",
			platform:cli,
			liveLink:"https://ay2324s1-cs2113-t17-4.github.io/tp/UserGuide.html"
		},
		{
			image: QuizzlerHomeScreen,
			text: "Quizzler",
			description:"Quizzler is a general knowledge quiz app made with Swift 5 that has over 30 categories, from science and nature to anime and manga. The questions were retrieved from an external API, User log-in and registration was created using the Firebase API.",
			skills:"Swift 5, Firebase",
			platform:ios,
			liveLink:"https://github.com/ryanlohyr/Quizzler"
		},
		
		
		
	];

	return (
		<div id="projects" className="p-12 h-full bg-black text-white">
			<h1 className="dark_headers text-white">Projects</h1>
			<div className="mt-7 flex justify-center">
				<CarouselManager slides={slides} />
			</div>
		</div>
	);
};

export default Projects;
