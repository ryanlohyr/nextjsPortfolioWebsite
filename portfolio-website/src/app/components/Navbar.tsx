import { ModeToggle } from "@/components/ui/darkModeToggleButton";
import Link from "next/link";
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

const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 right-0 text-white p-4 z-50 bg-black">
			<div className="container mx-auto flex justify-between items-center">
				<div>
					<a href="#" className="text-lg font-bold">
						<span className="gradient-text">RL</span>
					</a>
				</div>
				<div className="md:hidden block bg-white-400">
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
						{/* <li className="mr-8">
          <Link  target='_blank' className="hover:text-gray-300" href="/blog">Blog</Link>
        </li> */}

						{/* <li className="mr-8">
            <ModeToggle></ModeToggle>
        </li> */}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
