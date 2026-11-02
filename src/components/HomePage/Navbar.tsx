"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ThemeToggle from "@/app/theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/studios", label: "All Studios" },
  { href: "/#howItWorks", label: "How It Works" },
  { href: "/#aboutUs", label: "About Us" },
];

const accountLinks = [
  { label: "Login", href: "/sign-in" },
  { label: "Sign Up", href: "/sign-up" },
];




export default function Navbar() {
  const pathname = usePathname();
  // responsive icon
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // user info
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const handleSignOut = () => {
    authClient.signOut();
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setIsMenuOpen(false);

    // Only intercept hash links
    if (!href.startsWith("/#")) return;

    const id = href.slice(2); // "/#about" -> "about"

    // If we're already on the target page, smooth-scroll instead of routing
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", href);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <nav className="relative mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-lg font-extrabold text-white shadow-sm">
            S
          </span>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Studio<span className="text-amber-500">Space</span>
          </span>
        </Link>

        {/* Center links */}
        <div
          className={`${isMenuOpen ? "flex" : "hidden"
            } absolute left-0 right-0 top-full z-40 flex-col gap-4 border-t bg-background/95 px-4 py-5 shadow-md overflow-y-auto max-h-[calc(100vh-4rem)] sm:static sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-7 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none` }
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}   // 👈 add this
              className={`rounded-2xl p-2 text-center transition-colors hover:text-cyan-600 dark:hover:text-cyan-400 ${pathname === link.href || (link.href.includes("#") && pathname === "/" && window.location.hash === link.href.split("#")[1])
                  ? "bg-amber-100 text-amber-500 dark:bg-amber-950 dark:text-amber-400"
                  : "text-gray-900 dark:text-gray-100"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Theme toggle + Auth */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* light and dark */}
          <ThemeToggle />

          {/* Auth / User Popover */}
          {user ? (
            <Popover>
              <PopoverTrigger
                type="button"
                className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-2 py-1.5 shadow-sm transition-colors hover:border-amber-300 hover:bg-amber-50"
              >
                <Avatar className="h-9 w-9 ring-2 ring-amber-100">
                  <AvatarImage
                    referrerPolicy="no-referrer"
                    src={user?.image as string}
                  />
                  <AvatarFallback>
                    {user?.name?.charAt(0) ?? "U"}
                  </AvatarFallback>
                </Avatar>
                <span className="max-w-24 truncate text-sm font-semibold text-gray-800">
                  {user?.name}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </PopoverTrigger>
              <PopoverContent
                align="end"
                sideOffset={8}
                className="w-72 rounded-3xl border-0 bg-white p-0 shadow-xl shadow-amber-900/5 ring-1 ring-black/5"
              >
                <div className="rounded-3xl bg-linear-to-b from-white to-gray-50/60 p-5">
                  {/* Signed in as */}
                  <div className="mb-4">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-gray-400">
                      Signed in as
                    </p>
                    <p className="text-base font-bold text-gray-900">
                      {user?.name}
                    </p>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>

                  {/* Divider */}
                  <div className="mb-3 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />

                  {/* Menu items */}
                  <div className="flex flex-col gap-1">
                    <Link
                      href="/add-studio"
                      className="flex items-center gap-3 rounded-xl px-2 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-amber-50 hover:text-amber-600"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><circle cx="12" cy="12" r="10" /><path d="M12 8v8m-4-4h8" /></svg>
                      </span>
                      Add New Studio
                    </Link>

                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-xl px-2 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-amber-50 hover:text-amber-600"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
                      </span>
                      My Studio Listings
                    </Link>

                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-xl px-2 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-amber-50 hover:text-amber-600"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18" /></svg>
                      </span>
                      My Bookings
                    </Link>

                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-xl px-2 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-amber-50 hover:text-amber-600"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                      </span>
                      Saved Wishlist
                    </Link>
                  </div>

                  <div className="my-2 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />

                  <Button
                    onClick={handleSignOut}
                    variant="outline"
                    className="w-full rounded-xl border-red-200 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 hover:border-red-300 transition-colors"
                  >
                    <span className="mr-2">→</span> Sign Out
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <div className="flex shrink-0 items-center gap-4 sm:gap-7">
              {accountLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-2xl p-2 whitespace-nowrap text-[15px] transition-colors hover:text-cyan-600 dark:hover:text-cyan-400 ${pathname === link.href || pathname.startsWith(`${link.href}/`)
                    ? "bg-amber-100 text-amber-500 dark:bg-amber-950 dark:text-amber-400"
                    : "text-gray-900 dark:text-gray-100"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded-md p-2 text-gray-900 transition-colors hover:bg-gray-100 hover:text-cyan-600 sm:hidden"
          >
            <span className="sr-only">Toggle navigation menu</span>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
