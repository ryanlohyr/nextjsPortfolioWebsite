import { ModeToggle } from "@/components/ui/darkModeToggleButton";
import React from "react";
import { Menu } from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
	type: "website" | "blog";
	addBlog?: boolean; 
}


const Navbar: React.FC<NavbarProps> = ({ type, addBlog = false }) => {
	return (
		<div>
			{type == "website" ? (
				<nav className="fixed top-0 left-0 right-0 text-white p-4 z-50 ">
					<div className="container mx-auto flex justify-between items-center ">
						<div>
							<a href="#" className="text-lg font-bold">
								<span className="gradient-text">RL</span>
							</a>
						</div>
						<div>
							<div className="md:hidden block">
								<DropdownMenu>
									<DropdownMenuTrigger>
										<Menu></Menu>
									</DropdownMenuTrigger>
									<DropdownMenuContent className=" bg-black md:hidden block text-white">
										<DropdownMenuItem>
											<a href="#" className="hover:text-gray-300">
												Home
											</a>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<a href="#about" className="hover:text-gray-300">
												About
											</a>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<a href="#experience" className="hover:text-gray-300">
												Experience
											</a>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<a href="#projects" className="hover:text-gray-300">
												Projects
											</a>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<a href="#contact" className="hover:text-gray-300">
												Contact
											</a>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<a href="/blog" className="hover:text-gray-300">
												Blog
											</a>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
							<div className="md:block hidden">
								<ul className="flex">
									<li className="mr-8">
										<a href="#" className="hover:text-gray-300">
											Home
										</a>
									</li>
									<li className="mr-8">
										<a href="#about" className="hover:text-gray-300">
											About
										</a>
									</li>
									<li className="mr-8">
										<a href="#experience" className="hover:text-gray-300">
											Experience
										</a>
									</li>
									<li className="mr-8">
										<a href="#projects" className="hover:text-gray-300">
											Projects
										</a>
									</li>
									<li className="mr-8">
										<a href="#contact" className="hover:text-gray-300">
											Contact
										</a>
									</li>
									<li className="">
										<a href="/blog" className="hover:text-gray-300">
											Blog
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
			) : (
				<nav className="fixed top-0 left-0 right-0 text-white p-4 z-50 ">
					<div className="container mx-auto flex justify-between items-center">
						<div>
							<a href="/blog" className="text-lg font-bold">
								<span className="gradient-text">RL</span>
							</a>
						</div>
						<div className=" dark:bg-black dark:text-white text-black">
							<ul className="flex dark:bg-black bg-[#f5f5f5]">
								{addBlog ? (
									<li className="mr-4 dark:bg-black bg-[#f5f5f5]">
										<a href="/blog" className="hover:text-gray-300">
											Blog
										</a>
									</li>
								) : null}
								<li className="mr-4 dark:bg-black bg-[#f5f5f5]">
									<a href="/" className="hover:text-gray-300">
										Portfolio
									</a>
								</li>
								<li className="mr-0">
									<ModeToggle></ModeToggle>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			)}
		</div>
	);
};

export default Navbar;
