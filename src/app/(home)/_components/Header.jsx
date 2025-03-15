"use client";
import { useTheme } from "next-themes";

export default function Header() {
  const { setTheme } = useTheme();

  return (
    <>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </>
  );
}
