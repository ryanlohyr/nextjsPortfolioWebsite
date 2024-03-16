"use client";

import React, { useState } from 'react';
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();
  // const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => {
    let themeToSet = "dark"
    if(theme === "dark"){
      themeToSet = "light"
    }
    setTheme(themeToSet);
  };
	return (
		<div className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? <Sun /> : <Moon/>}
    </div>
	);
}
