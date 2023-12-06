import React from "react";
import ProfilePic from "../../../public/profilePic.png";
// import resume from "../../../public/ryanloh_resume.pdf";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const AboutMe = () => {

	return (
		<div id="about" className="pt-12 md:pl-12 md:pr-12 mb-20" >
			<h1 className="dark_headers text-white">About me</h1>
			<div className="mt-7 w-full flex justify-center">
				<div className="flex flex-col md:flex-row items-center justify-center w-2/3">
					<div className="lg:basis-2/6 md:basis-5/5 sm:basis-5/5 flex justify-center ml-9  mr-9 mb-4">
						<Image className="rounded-full md:w-54 w-[280px] min-w-[200px]" src={ProfilePic} alt="profile picture"></Image>
					</div>
					<div className="lg:basis-4/6 md:basis-5/5 sm:basis-5/5" >
						<p className="max-w-3xl md:ml-0 m-auto">
							I am currently a second year computer engineering student at the National University of
							Singapore and would be graduating in the year 2026.
							<br></br> 
							<br></br>
							Started learning about programming
							during my National Service and love exploring new opportunities and technologies in my free time!
						</p>
						<a  href="https://ryanloh.vercel.app/ryanloh_resume.pdf" download="resume">
						<Button className="button mt-8 rounded-full  md:ml-0m-auto" variant="outline">
							<Download className=" mr-2 h-4 w-4" />
							<span> Download resume</span>
						</Button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
