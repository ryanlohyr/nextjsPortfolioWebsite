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
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
              <a href="#" className="text-2xl font-bold">
				<p className="purple-gradient text-transparent animate-gradient">RL</p>
              </a>

            </div>
            <div>
              {/* Mobile view */}
              <div className="md:hidden block ">
                <Sheet>
                  <SheetTrigger asChild>
				  <Menu></Menu>
                  </SheetTrigger>
                  <SheetContent className="bg-black flex flex-col border-1-4 border-gray-300">
					<SheetClose>
                      <a href="#" className="hover:text-gray-300">
                        Home
                      </a>
                    </SheetClose>
                    <SheetClose>
                      <a href="#about" className="hover:text-gray-300">
                        About
                      </a>
                    </SheetClose>
                    <SheetClose>
                      <a href="#experience" className="hover:text-gray-300">
                        Experience
                      </a>
                    </SheetClose>
                    <SheetClose>
                      <a href="#projects" className="hover:text-gray-300">
                        Projects
                      </a>
                    </SheetClose>
                    <SheetClose>
                      <a href="#contact" className="hover:text-gray-300">
                        Contact
                      </a>
                    </SheetClose>
                    <SheetClose>
                      <a href="/blog" className="hover:text-gray-300">
                        Blog
                      </a>
                    </SheetClose>
                  </SheetContent>
                </Sheet>
              </div>
              {/* Desktop view */}
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
