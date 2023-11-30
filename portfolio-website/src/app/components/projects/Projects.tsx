import React from "react";
import ProfilePic from "../../../../public/profilePic.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import SimpleSlider from "./Slider";
import Carousel from "./Slider";
import CarouselManager from "./Slider";

const Projects = () => {
	const slides = [
		{
			image: ProfilePic,
			text: "one"
		},
		{
			image: ProfilePic,
			text: "two"
		},
		{
			image: ProfilePic,
			text: "three"
		},
	];

	return (
		<div className="p-12 mb-20">
			<h1 className="headers">Projects</h1>
			<div className="mt-7 w-full flex justify-center">
				<CarouselManager slides={slides}/>
			</div>
		</div>
	);
};

export default Projects;
