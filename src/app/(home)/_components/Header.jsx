"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const { setTheme, theme } = useTheme(); // Removed "light" argument here
  const [isLight, setIsLight] = useState(theme === "light"); // Initialize based on current theme

  return (
    <>
      <div className="flex justify-between w-full pl-4 pr-8 py-3">
        <div className="">
          <h1 className="text-3xl font-semibold">Rj Portfolio</h1>
        </div>
        <div className="flex items-center gap-5 text-lg">
          <button className="cursor-pointer">Home</button>
          <button className="cursor-pointer">Services</button>
          <button className="cursor-pointer">Technology</button>
          <button className="cursor-pointer">Projects</button>
          <button className="cursor-pointer">Contact</button>
          <div className="">
            {isLight ? (
              <div
                className="cursor-pointer"
                onClick={() => {
                  setIsLight(false);
                  setTheme("dark");
                }}
              >
                <Moon />
              </div>
            ) : (
              <div
                className="cursor-pointer"
                onClick={() => {
                  setIsLight(true);
                  setTheme("light");
                }}
              >
                <Sun />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
