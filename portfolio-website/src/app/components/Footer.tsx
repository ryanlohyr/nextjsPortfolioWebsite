import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-black text-white">
			<div className="container mx-auto pb-2 px-4">
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
			</div>
			<div className="text-center pb-2">
				<p className="text-sm">© {new Date().getFullYear()} Ryan Loh</p>
			</div>
		</footer>
	);
};

export default Footer;
