import React from "react";
import ProfilePic from "../../../../public/profilePic.png";
import FoodBank from "../../../../public/Foodbank.png";
import Otdelit from "../../../../public/Otdelit1.png";
import QuizzlerHomeScreen from "../../../../public/homeScreen.png";
import NUSDegs from "../../../../public/NUSDegs.png";
import chaChing from "../../../../public/chaChing.png";
import orbital from "../../../../public/Orbital Poster MS3 Poster -front.png";
import LingoBot from "../../../../public/LingoBot.png";
import Luna from "../../../../public/Luna.png";
import PortfolioWebsite from "../../../../public/portfolioWebsite.png";
import CarouselManager from "./Slider";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const Projects = () => {
  const web = "Web Application";
  const ios = "iOS";
  const whatsapp = "Whatsapp Chatbot";
  const cli = "Command Line Application";
  type Slide = {
    image: StaticImageData;
    text: string;
    description: string;
    skills: string;
    platform: string;
    liveLink: string;
  };

  const slides: Slide[] = [
	{
		image: Luna,
		text: "LunaAI",
		description:
		  "Built an AI voice agent for government services (CPF) and integrated our voice agent with a customer service platform that serves real-time call logs, an editable central knowledge base for the AI, and a dashboard that allows human agents to monitor pending actions.",
		skills: "LLMs, Pinecone, TwiML (For the Voice Agent)",
		platform: whatsapp,
		liveLink: "https://devpost.com/software/lunaai?ref_content=existing_user_added_to_software_team&ref_feature=portfolio&ref_medium=email&utm_campaign=software&utm_content=added_to_software_team&utm_medium=email&utm_source=transactional",
	  },
    {
      image: LingoBot,
      text: "LingoBot",
      description:
        "First Machine learning hackathon and was really suprised we got all the way to the finals! Used so many AI tools in this project, including OpenAI GPT3.5, TensorFlow recommenders, Google Cloud Speech-To-Text",
      skills: "TensorFlow, Flask, MySQL",
      platform: whatsapp,
      liveLink: "",
    },
    {
      image: orbital,
      text: "ConnectMama",
      description:
        "Tasked to create an API Gateway from scratch using ByteDance's open source middleware, CloudWeGo. Learnt a lot about how useful API Gatways in making efficient and scalable web applications.",
      skills: "Apache Thrift, CloudWeGo, GO",
      platform: "API Gateway",
      liveLink: "",
    },
    {
      image: Otdelit,
      text: "Otdelit",
      description:
        "This game was born from the hackathon Global Game Jam 2022, however we enjoyed the process of creating the game so much we continued on with development after the hackathon and eventually launched the game on the unity play website",
      skills: "C#, Unity Game Engine",
      platform: web,
      liveLink: "https://play.unity.com/mg/other/ggj-a01ps",
    },
    {
      image: FoodBank,
      text: "FoodBank VMS",
      description:
        "The first hackathon that we ever won, although it was a no-code application, we still had to build the entire system from the admin portal to the user portal and ensure both systems work as expected. Learnt a lot about communication and understanding our users.",
      skills: "Bubble io",
      platform: web,
      liveLink: "",
    },
    {
      image: PortfolioWebsite,
      text: "This Website",
      description:
        "Was really fun to make, shadcn and tailwind really makes web development so much easier. Third time building a portfolio website, the other two are (https://ryanlohyr.github.io/ryanloh/) and (https://ryanlohyr.github.io/practice-portfolio/) if you're wondering.",
      skills: "NEXTJs, ThreeJS, tailwind, typescript",
      platform: web,
      liveLink: "",
    },
    {
      image: chaChing,
      text: "ChaChing",
      description:
        "The 'TikTok Pay' project is a hybrid fiat-crypto payment system designed to simplify e-wallet and cryptocurrency wallet management, merging traditional and digital currency transactions using TikTok Token (TTT)",
      skills: "Vue.JS, Stripe, Flask, MySQL",
      platform: web,
      liveLink: "https://devpost.com/software/tiktok-pay-8v2bg1",
    },
    {
      image: NUSDegs,
      text: "NUS Degs",
      description:
        "A project under CS2113 (Software Engineering & Object-Oriented Programming). One of the most time consuming mods I have ever taken but it was so so fun. Using topological sort to create the recommended schedule was refreshing as I did not know all that leetcode will actually come in handy.",
      skills: "Java, Gradle, JUnit",
      platform: cli,
      liveLink: "https://ay2324s1-cs2113-t17-4.github.io/tp/UserGuide.html",
    },
    {
      image: QuizzlerHomeScreen,
      text: "Quizzler",
      description:
        "Quizzler is a general knowledge quiz app made with Swift 5 that has over 30 categories, from science and nature to anime and manga. The questions were retrieved from an external API, User log-in and registration was created using the Firebase API.",
      skills: "Swift 5, Firebase",
      platform: ios,
      liveLink: "https://github.com/ryanlohyr/Quizzler",
    },
  ];

  return (
    <div id="projects" className="p-12  bg-black text-white">
      <h1 className="dark_headers text-white">Projects</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[80%] mx-auto"
      >
        <CarouselContent className="">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 ">
                <div className="h-[400px]">
                  <CardHeader>
                    <CardTitle>{slide.text}</CardTitle>
                    <CardDescription>{slide.platform}</CardDescription>
                  </CardHeader>
                  <CardContent className="">
                    <Image
                      alt="project image"
                      className="object-contain h-[150px] mb-4"
                      src={slide.image}
                    ></Image>
                    <p>Tech: {slide.skills}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <AlertDialog>
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
                    </AlertDialog>
                  </CardFooter>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* <div className="mt-7 flex justify-center">
        <CarouselManager slides={slides} />
      </div> */}
    </div>
  );
};

export default Projects;
