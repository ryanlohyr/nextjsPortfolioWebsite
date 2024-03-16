"use client";

import React from "react";
import Navbar from "@/app/components/Navbar";

export default function Blog() {
	return (
		<div>
			<Navbar addBlog={true} type="blog"></Navbar>
			<div className="mt-[125px] pb-[20px]  flex flex-col justify-center items-center">
				<h2 className="text-[45px] sm:text-[60px] mb-[55px] dark:text-white text-black">Why Blog</h2>
				<div className="text-lg max-w-[90%] sm:max-w-[60%]">
					<p>
						I have never been a writer all my life, neither was I good at it. I did enjoy reading from time
						to time but it was never something i was really interested in. However, after reading Paul
						Graham&apos;s essay
						<a
							className="text-blue-400 hover:underline"
							target="_blank"
							href="http://paulgraham.com/read.html"
						>
							{" "}
							The Need To Read{" "}
						</a>
						particularly the quote <br></br>
						<br></br>
					</p>
					<blockquote className="italic text-gray-500">
						Writing is not just a way to convey ideas, but also a way to have them.
					</blockquote>
					<br></br>
					<p>
						It changed the way i thought about writing. As a developer accustomed to solving complex
						problems, I have always relied on writing to methodically think through these problems and to
						help flesh out the vague solutions in my head. I hadn&apos;t realized that the same approach
						could be applied to the general formulation of ideas as well.
					</p>

					<br></br>
					<p>
						Hence the reason for this blog. I would like to use this blog to not just share my thoughts on
						topics that i find interesting, such as startups and machine learning, but also as a tool for
						enhancing my own understanding of these subjects and I hope whoever reading it will get a
						insight or two as well.
					</p>
				</div>
			</div>
		</div>
	);
}
