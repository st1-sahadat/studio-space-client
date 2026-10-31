"use client";
import { Button } from "@base-ui/react";
import { useTheme } from "next-themes";


export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const dark = theme === "dark";
    return (
        <>
            {/* Theme toggle */}
          <Button
            aria-label="Toggle light/dark mode"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition hover:border-amber-300 hover:bg-amber-50"
            onClick={()=> setTheme(theme === "light" ? "dark" : "light")}
          >
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-amber-600">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-amber-600">
                <path d="M21 12.79A9 9 1 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </Button>
        </>
    )
}