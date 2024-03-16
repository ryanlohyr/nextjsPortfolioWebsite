import { Button } from "@/components/ui/button";
import React, { useState } from "react";

// Define a type for the props
type TimelineItemProps = {
  dates: string;
  title: string;
  children: React.ReactNode;
};
const TimelineItem: React.FC<TimelineItemProps> = ({
  dates,
  title,
  children,
}) => (
  <div className="mb-8">
    <h2>{title}</h2>
    <h3 className="text-gray-400 pb-2">{dates}</h3>
    {children}
  </div>
);

const TimelineLine = () => {
  return (
    <div className="h-full">
      <span className="qualification__rounder "></span>
      <span className="qualification__line"></span>
    </div>
  );
};

const TechnicalExperience = () => {
  return (
    <div>
      <div className="text-white flex justify-center ">
        <div className="flex flex-row  w-2/3">
          <div className="basis-1/5 flex justify-end pr-5">
            <TimelineLine></TimelineLine>
          </div>

          <div className="basis-4/5">
            <TimelineItem
              dates="Jan 2024 - June 2024"
              title="GovTech - Software Engineering Intern"
            >
              Excited for this one!
            </TimelineItem>
          </div>
        </div>
      </div>
      <div className="text-white flex justify-center ">
        <div className="flex flex-row  w-2/3">
          <div className="basis-1/5 flex justify-end pr-5">
            <TimelineLine></TimelineLine>
          </div>

          <div className="basis-4/5">
            <TimelineItem
              dates="August 2023 - Present"
              title="Google Developer Student Club - Software Engineer"
            >
              Part of the software engineering team to create a volunteer
              management system for the Movement for the Intellectually Disabled
              of Singapore (MINDS). Really grateful to be given the opporutinity
              to give back to the society via tech.
            </TimelineItem>
          </div>
        </div>
      </div>
      <div className="text-white flex justify-center ">
        <div className="flex flex-row  w-2/3">
          <div className="basis-1/5 flex justify-end pr-5">
            <TimelineLine></TimelineLine>
          </div>

          <div className="basis-4/5">
            <TimelineItem
              dates="July 2022 - July 2023"
              title="Core Invest Institute - Software Engineer Intern"
            >
              Did a part time role during year one of university as a Software
              Engineering Intern, learnt so much about both front-end and
              back-end development.
              <br></br>
              <br></br>
              Balancing this with university was definitely challenging, but
              looking back I would have definitely still done the same.
            </TimelineItem>
          </div>
        </div>
      </div>
      <div className="text-white  flex justify-center ">
        <div className="flex flex-row  w-2/3">
          <div className="basis-1/5 flex justify-end pr-5">
            <TimelineLine></TimelineLine>
          </div>

          <div className="basis-4/5">
            <TimelineItem
              dates="Jan 2022 - May 2022"
              title="Core Invest Institute - Backend Developer Intern"
            >
              First ever internship, learnt a lot about backend development,
              some no code development as well working in a professional team.
            </TimelineItem>
          </div>
        </div>
      </div>
    </div>
  );
};

const HackathonExperience = () => {
	return (
	  <div>
		<div className="text-white flex justify-center ">
		  <div className="flex flex-row  w-2/3">
			<div className="basis-1/5 flex justify-end pr-5">
			  <TimelineLine></TimelineLine>
			</div>
  
			<div className="basis-4/5">
			  <TimelineItem
				dates="Jan 2024"
				title="Hack and Roll 2024 - Winner"
			  >
				In 24 hours, we built a multi lingual voice agent that is able to communicate accurate CPF information via chat, 
				was one of the most fun hackathons I&apos;ve done. So much free merch and free food : D.
			  </TimelineItem>
			</div>
		  </div>
		</div>
		<div className="text-white flex justify-center ">
		  <div className="flex flex-row  w-2/3">
			<div className="basis-1/5 flex justify-end pr-5">
			  <TimelineLine></TimelineLine>
			</div>
  
			<div className="basis-4/5">
			  <TimelineItem
				dates="Oct 2023"
				title="ADA AI Hackathon - Finalist"
			  >
				We created a language bot with grammar checks and personalized recommendations using TensorFlow, despite no prior ML knowledge. It was a fun challenge. 
				<br></br>
				<br></br>
				We also integrated AI tools like OpenAI&lsquo;s GPT and Google&lsquo;s Speech-to-Text, plus a pronunciation API for user feedback.
			  </TimelineItem>
			</div>
		  </div>
		</div>
		<div className="text-white flex justify-center ">
		  <div className="flex flex-row  w-2/3">
			<div className="basis-1/5 flex justify-end pr-5">
			  <TimelineLine></TimelineLine>
			</div>
  
			<div className="basis-4/5">
			  <TimelineItem
				dates="May 2022"
				title="HackSingapore 20222 - Winner"
			  >
				The first hackathon that we ever won, although it was a no-code application, 
				we still had to build the entire system from the admin portal to the user portal and ensure both systems work as expected. Learnt a lot about communication and understanding our users.


			  </TimelineItem>
			</div>
		  </div>
		</div>
	  </div>
	);
  };

const OtherExperience = () => {
  return (
    <div>
      <div className="text-white  flex justify-center ">
        <div className="flex flex-row  w-2/3">
          <div className="basis-1/5 flex justify-end pr-5">
            <TimelineLine></TimelineLine>
          </div>

          <div className="basis-4/5">
            <TimelineItem
              dates="August 2023 - Present"
              title="NUS Entrepreneurship Society - External Liaison Director"
            >
              In charge of a team of 11 to procure speakers for UNICON 2024, a
              student-led entrepreneurship event.
            </TimelineItem>
          </div>
        </div>
      </div>
      <div className="text-white  flex justify-center ">
        <div className="flex flex-row  w-2/3">
          <div className="basis-1/5 flex justify-end pr-5">
            <TimelineLine></TimelineLine>
          </div>

          <div className="basis-4/5">
            <TimelineItem dates="May 2023 - June 2023" title="AngelHack Coach">
              As the winnner of HackSingapore 2023, I was given with the
              opportunity to return to HackSingapore 2024 as a coach. Provided a
              second ear to teams about product and code quality.
            </TimelineItem>
          </div>
        </div>
      </div>
      <div className="text-white  flex justify-center ">
        <div className="flex flex-row  w-2/3">
          <div className="basis-1/5 flex justify-end pr-5">
            <TimelineLine></TimelineLine>
          </div>

          <div className="basis-4/5">
            <TimelineItem
              dates="June 2023"
              title="Moderator @Hacksingapore 2023"
            >
              First time moderating! Was a really scary yet enriching experience
              as I not only had the pleasure of working with brilliant people
              from Grab, Open Government Products and Stash away, but also
              learnt a lot about financial inclusivity.
            </TimelineItem>
          </div>
        </div>
      </div>
    </div>
  );
};

enum ExperienceType {
  TechnicalExperiences = "Experience",
  Hackathons = "Hackathons",
  Others = "Others",
}

const Experience = () => {
  const [currentExperience, setCurrentExperience] = useState(
    ExperienceType.TechnicalExperiences
  );

  const handleExperience = (experience: ExperienceType) => {
    setCurrentExperience(experience);
  };

  return (
    <div id="experience" className="text-white bg-black pt-12">
      <h1 className="dark_headers text-white">Experience</h1>

      <div className="mt-5 mb-10">
        <div className="flex justify-center mb-5">
          <Button
            className={`mr-5 hover:underline  ${
              currentExperience === ExperienceType.TechnicalExperiences
                ? "underline"
                : ""
            }`}
            onClick={() =>
              handleExperience(ExperienceType.TechnicalExperiences)
            }
          >
            Technical Experiences
          </Button>
          <Button
            className={`mr-5 hover:underline  ${
              currentExperience === ExperienceType.Hackathons ? "underline" : ""
            }`}
            onClick={() => handleExperience(ExperienceType.Hackathons)}
          >
            Hackathons
          </Button>
          <Button
            className={`mr-5 hover:underline  ${
              currentExperience === ExperienceType.Others ? "underline" : ""
            }`}
            onClick={() => handleExperience(ExperienceType.Others)}
          >
            Others
          </Button>
        </div>
        {currentExperience ===ExperienceType.TechnicalExperiences ? (
          <TechnicalExperience />
        ) : currentExperience === ExperienceType.Hackathons ? (
          <HackathonExperience />
        ) : (
          <OtherExperience />
        )}
      </div>
    </div>
  );
};

export default Experience;
