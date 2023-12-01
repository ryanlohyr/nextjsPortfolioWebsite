import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const TimelineItem = ({ dates, title, children }) => (
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
			<div className="text-white pl-6 flex justify-center ">
				<div className="flex flex-row  w-2/3">
					<div className="basis-1/5 flex justify-end pr-5">
						<TimelineLine></TimelineLine>
					</div>

					<div className="basis-4/5">
						<TimelineItem dates="Jan 2024 - June 2024" title="Govtech - Software Engineering Intern">
							Excited for this one!
						</TimelineItem>
					</div>
				</div>
			</div>
			<div className="text-white pl-6 flex justify-center ">
				<div className="flex flex-row  w-2/3">
					<div className="basis-1/5 flex justify-end pr-5">
						<TimelineLine></TimelineLine>
					</div>

					<div className="basis-4/5">
						<TimelineItem
							dates="Jan 2024 - June 2024"
							title="Google Developer Student Club - Software Engineer"
						>
							Part of the software engineering team to create a volunteer management system for the Movement for the Intellectually Disabled of Singapore (MINDS). Really grateful to be given the opporutinity to give back to the society via tech.
						</TimelineItem>
					</div>
				</div>
			</div>
			<div className="text-white pl-6 flex justify-center ">
				<div className="flex flex-row  w-2/3">
					<div className="basis-1/5 flex justify-end pr-5">
						<TimelineLine></TimelineLine>
					</div>

					<div className="basis-4/5">
						<TimelineItem
							dates="July 2022 - July 2023"
							title="Core Invest Institute - Software Engineer Intern"
						>
							Did a part time role during year one of university as a Software Engineering Intern. Learnt
							so much about not just front-end and back-end development but also managing my time as
							juggling my computer engineering modules as well as a internship was definitely not easy.
							But definitely did not regret and looking back i would have done the same!
						</TimelineItem>
					</div>
				</div>
			</div>
			<div className="text-white pl-6 flex justify-center ">
				<div className="flex flex-row  w-2/3">
					<div className="basis-1/5 flex justify-end pr-5">
						<TimelineLine></TimelineLine>
					</div>

					<div className="basis-4/5">
						<TimelineItem
							dates="Jan 2022 - May 2022"
							title="Core Invest Institute - Backend Developer Intern"
						>
							First ever internship, learnt a lot about backend development, some no code development as
							well working in a professional team.
						</TimelineItem>
					</div>
				</div>
			</div>
		</div>
	);
};

const OtherExperience = () => {
	return (
		<div >
			<div className="text-white pl-6 flex justify-center ">
				<div className="flex flex-row  w-2/3">
					<div className="basis-1/5 flex justify-end pr-5">
						<TimelineLine></TimelineLine>
					</div>

					<div className="basis-4/5">
						<TimelineItem
							dates="July 2022 - July 2023"
							title="NUS Entrepreneurship Society - External Liaison Director"
						>
							In charge of a team of 11 to procure speakers for UNICON 2024, a student-led entrepreneurship event 
						</TimelineItem>
					</div>
				</div>
			</div>
			<div className="text-white pl-6 flex justify-center ">
				<div className="flex flex-row  w-2/3">
					<div className="basis-1/5 flex justify-end pr-5">
						<TimelineLine></TimelineLine>
					</div>

					<div className="basis-4/5">
						<TimelineItem dates="Jan 2022 - May 2022" title="AngelHack Coach">
							As the winnner of HackSingapore 2023, I was blessed with the opportunity to return to HackSingapore 2024 as a coach! Gave a second opinion to teams about not just the product their building but also feedback related to code quality
						</TimelineItem>
					</div>
				</div>
			</div>
			<div className="text-white pl-6 flex justify-center ">
				<div className="flex flex-row  w-2/3">
					<div className="basis-1/5 flex justify-end pr-5">
						<TimelineLine></TimelineLine>
					</div>

					<div className="basis-4/5">
						<TimelineItem dates="Jan 2022 - May 2022" title="Moderator @Hacksingapore 2023">
							First time moderating! Was a really scary yet fruitful experience as I not only had the pleasure of working with brilliant people from Grab, Open Government Products and Stash away, but also got to learn a lot about financial inclusivity!
						</TimelineItem>
					</div>
				</div>
			</div>
		</div>
	);
};

const Experience = () => {
	const [isInternshipsToggled, setInternshipsToggled] = useState(true);

	const handleInternship = () => {
		setInternshipsToggled(true);
	};
	const handleHackathon = () => {
		setInternshipsToggled(false);
	};
	return (
		<div id="experience">
			<h1 className="headers">Experience</h1>

			<div className="mt-5 mb-10">
				<div className="flex justify-center mb-5">
					<Button
						className={`mr-5 hover:underline  ${isInternshipsToggled ? "underline" : ""}`}
						onClick={handleInternship}
					>
						Technical Experiences
					</Button>
					<Button
						className={`mr-5 hover:underline ${!isInternshipsToggled ? "underline" : ""}`}
						onClick={handleHackathon}
					>
						Others
					</Button>
				</div>
				{isInternshipsToggled ? <TechnicalExperience /> : <OtherExperience />}
			</div>
		</div>
	);
};

export default Experience;
