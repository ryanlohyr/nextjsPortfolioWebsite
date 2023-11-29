import { ModeToggle } from '@/components/ui/darkModeToggleButton';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 text-white p-4 z-50">
			<div className="container mx-auto flex justify-between items-center">
				<div>
					<a href="#" className="text-lg font-bold">
						RL
					</a>
				</div>
				<ul className="flex">
        <li className="mr-8">
          <a href="#home" className="hover:text-gray-300">Home</a>
        </li>
        <li className="mr-8">
          <a href="#about" className="hover:text-gray-300">About</a>
        </li>
        <li className="mr-8">
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </li>
        {/* <li className="mr-8">
            <ModeToggle></ModeToggle>
        </li> */}
      </ul>
			</div>
		</nav>
  );
};

export default Navbar;
