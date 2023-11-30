import React from "react";
import ProfilePic from "../../../public/profilePic.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const AboutMe = () => {
	return (
		<div className="p-12 mb-20">
			<h1 className="headers">About me</h1>
			<div className="mt-7 w-full flex justify-center">
				<div className="flex flex-col md:flex-row items-center justify-center w-2/3">
					<div className="lg:basis-2/6 md:basis-5/5 sm:basis-5/5 flex justify-center mr-9 mb-4">
						<Image className="rounded-full w-54" src={ProfilePic} alt="profile picture"></Image>
					</div>
					<div className="lg:basis-4/6 md:basis-5/5 sm:basis-5/5" >
						<p className="max-w-3xl ">
							I am currently a second year computer engineering student at the National University of
							Singapore and would be graduating in the year 2026. I started learning about programming
							during my National Service and love exploring new opportunities and technologies in my freetime!
						</p>
						<Button className="button mt-8 rounded-full" variant="outline" onClick={()=>{window.location.href = "mailto:ryanloh29@ymail.com?subject=It is a subject&body=Message from ryan %0D%0A Hi there";}}>
							<Download className=" mr-2 h-4 w-4" />
							<span> Download resume</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
