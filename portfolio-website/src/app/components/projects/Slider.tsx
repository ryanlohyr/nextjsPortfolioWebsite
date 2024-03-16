import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { StaticImageData } from "next/image";

interface Slide {
	platform: string;
	skills: string;
	description: string;
	liveLink: string;
	image: StaticImageData;
	text: string;
}

interface CarouselProps {
	slides: Slide[];
}

const CarouselManager: React.FC<CarouselProps> = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const [numSlides, setNumSlides] = useState(0);
	const length = slides.length;
	const smallWindowBreakpoint = 768;
  
	// Function to update numSlides based on window width
	const updateNumSlides = () => {
	  const newNumSlides = window.innerWidth > smallWindowBreakpoint
		? Math.floor((length - 1) / 2)
		: length - 1;
	  setNumSlides(newNumSlides);
	};
  
	// Update numSlides on window resize
	useEffect(() => {
	  updateNumSlides();
	  const handleResize = () => updateNumSlides();
	  window.addEventListener('resize', handleResize);
  
	  // Cleanup function
	  return () => {
		window.removeEventListener('resize', handleResize);
	  };
	}, []); // Empty dependency array ensures this runs once on mount
  
	// Update current when numSlides changes
	useEffect(() => {
	  if (current > numSlides) {
		setCurrent(numSlides);
	  }
	}, [numSlides]); // Dependency on numSlides
  
	const handleDotClick = (index: React.SetStateAction<number>) => {
	  setCurrent(index);
	};
  
	const nextSlide = () => {
	  const lastSlideIndex = (window.innerWidth > smallWindowBreakpoint)
		? Math.floor((length - 1) / 2)
		: length - 1;
  
	  setCurrent(current === lastSlideIndex ? 0 : current + 1);
	};
  
	const prevSlide = () => {
	  const lastSlideIndex = (window.innerWidth > smallWindowBreakpoint)
		? Math.floor((length - 1) / 2)
		: length - 1;
  
	  setCurrent(current === 0 ? lastSlideIndex : current - 1);
	};
  
	if (!Array.isArray(slides) || slides.length <= 0) {
	  return null;
	}

	return (
		<div className="w-full md:w-2/3 justify-center lg:h-[460px] md:h-[475px] h-[490px]">
			<div className="w-full flex justify-center h-full">
				{/* Left Arrow */}
				<div className="flex items-center">
					<ArrowLeft
						className="w-[20px] md:w-[50px] text-white cursor-pointer select-none text-2xl z-10"
						onClick={prevSlide}
					/>
				</div>
				{/* Carousel */}
				<div className="flex overflow-hidden relative">
					<div
						className="flex w-full h-full transition-transform duration-500 ease-in-out"
						style={{ transform: `translateX(-${current * 100}%)` }}
					>
						{slides.map((slide, index) => (
							<div className="w-full md:w-1/2 h-auto flex justify-center flex-shrink-0" key={index}>
								<AlertDialog>
									<Card className="border-none lg:w-[420px] md:w-[300px] w-[320px] h-full ">
										<CardHeader>
											<CardTitle>{slide.text}</CardTitle>
											<CardDescription>{slide.platform}</CardDescription>
										</CardHeader>

										<CardContent className="">
											<Image
												alt="project image"
												className="object-contain h-[250px] mb-4"
												src={slide.image}
											></Image>
											<p>Tech: {slide.skills}</p>
										</CardContent>
										<CardFooter className="flex justify-between">
											<AlertDialogTrigger className="hover:underline text-white w-[100px] -ml-[14px]">
												More Info
											</AlertDialogTrigger>
											<AlertDialogContent className="text-white">
												<AlertDialogHeader>
													<AlertDialogTitle>{slide.text}</AlertDialogTitle>
													<CardDescription>{slide.platform}</CardDescription>
													<CardDescription>{slide.description}</CardDescription>
													<CardContent className="">
														<Image
															alt="project image"
															className="object-contain h-[250px] mb-0"
															src={slide.image}
														></Image>
													</CardContent>
													<p>Tech: {slide.skills}</p>
												</AlertDialogHeader>
												<div className="flex space-between">
													{slide.liveLink !== "" ? (
														<a href={slide.liveLink} target="_blank">
															<Button
																className="button rounded-full w-[100px] mr-4 "
																variant="outline"
															>
																View
															</Button>
														</a>
													) : (
														<div></div>
													)}

													<AlertDialogCancel className="button w-[100px]">
														Close
													</AlertDialogCancel>
												</div>
											</AlertDialogContent>
										</CardFooter>
									</Card>
								</AlertDialog>
							</div>
						))}
					</div>
				</div>
				{/* Right Arrow */}
				<div className=" w-[20px] md:w-[50px] flex items-center">
					<ArrowRight
						className="w-[50px] text-white cursor-pointer select-none text-2xl z-10"
						onClick={nextSlide}
					/>
				</div>
			</div>
			{/* Navigation Dots */}
			<div className="flex justify-center">
				{Array.from({ length: numSlides + 1 }).map((_, index) => (
					<span
						key={index}
						style={{
							height: "10px",
							width: "10px",
							margin: "5px",
							backgroundColor: current === index ? "#007fff" : "white",
							borderRadius: "50%",
							display: "inline-block",
							cursor: "pointer",
						}}
						onClick={() => handleDotClick(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default CarouselManager;
