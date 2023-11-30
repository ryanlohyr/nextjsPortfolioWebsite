import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
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

interface Slide {
	image: string;
	text: string;
}

interface CarouselProps {
	slides: Slide[];
}

const CarouselManager: React.FC<CarouselProps> = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;
	const smallWindowBreakpoint = 768;
	var lastSlideIndex = length - 1;

	const monitorWidth = () => {
		if (window.innerWidth > smallWindowBreakpoint && current == lastSlideIndex) {
			setCurrent(current - 1);
		}
	};

	useEffect(() => {
		monitorWidth();
		window.addEventListener("resize", monitorWidth);
	});

	const nextSlide = () => {
		if (window.innerWidth > smallWindowBreakpoint) {
			lastSlideIndex = lastSlideIndex / 2;
		}
		setCurrent(current === lastSlideIndex ? 0 : current + 1);
	};

	const prevSlide = () => {
		if (window.innerWidth > smallWindowBreakpoint) {
			lastSlideIndex = lastSlideIndex / 2;
		}
		setCurrent(current === 0 ? lastSlideIndex : current - 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<div className="w-full flex justify-center items-center">
			<ArrowLeft className="w-[50px] text-white cursor-pointer select-none text-2xl z-10" onClick={prevSlide} />
			<div className="flex overflow-hidden relative">
				<div
					className="flex w-full transition-transform duration-500 ease-in-out"
					style={{ transform: `translateX(-${current * 100}%)` }}
				>
					{slides.map((slide, index) => (
						<div className="w-full md:w-1/2 h-auto flex justify-center flex-shrink-0" key={index}>
                            <AlertDialog>
							<Card className="lg:w-[420px] md:w-[300px] w-[320px]">
								<CardHeader>
									<CardTitle>{slide.text}</CardTitle>
									<CardDescription>The Description</CardDescription>
								</CardHeader>

								<CardContent> Some Content</CardContent>
								<CardFooter className="flex justify-between">
									
										<AlertDialogTrigger className="hover:underline text-white">
											{/* <Button className="mt-8 bg-white text-black rounded-full" variant="outline"> */}
												 More Info
											{/* </Button> */}
										</AlertDialogTrigger>
										<AlertDialogContent>
											<AlertDialogHeader>
												<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
												<AlertDialogDescription>
													This action cannot be undone. This will permanently delete your
													account and remove your data from our servers.
												</AlertDialogDescription>
											</AlertDialogHeader>
											<AlertDialogFooter>
												<AlertDialogCancel>Close</AlertDialogCancel>
											</AlertDialogFooter>
										</AlertDialogContent>
									
								</CardFooter>
							</Card>
                            </AlertDialog>
						</div>
					))}
				</div>
			</div>
			<ArrowRight className="w-[50px] text-white cursor-pointer select-none text-2xl z-10" onClick={nextSlide} />
		</div>
	);
};

export default CarouselManager;
