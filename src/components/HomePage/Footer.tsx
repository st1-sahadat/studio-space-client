"use client";

import Link from "next/link";
import { useState, type ComponentProps } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (
    e: Parameters<NonNullable<ComponentProps<"form">["onSubmit"]>>[0],
  ) => {
    e.preventDefault();
    if (email) {
      // Handle newsletter subscription
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/studios", label: "Find Studios" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/pricing", label: "Pricing" },
  ];

  const studioCategories = [
    "Co-working Spaces",
    "Recording Studios",
    "Photography Studios",
    "Video Production",
    "Virtual Office",
  ];

  const socialLinks = [
    {
      name: "X (Twitter)",
      href: "https://x.com/studiospace",
      icon: () => (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75h-3.44l7.06-8.09L2.97 2.25H8.28l4.713 6.231zm-1.161 9.52h1.84L7.036 4.45H5.058z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/studiospace",
      icon: () => (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm-.2 1.5A4.05 4.05 0 0 0 3.5 7.55v8.9a4.05 4.05 0 0 0 4.05 4.05h8.9a4.05 4.05 0 0 0 4.05-4.05v-8.9a4.05 4.05 0 0 0-4.05-4.05h-8.9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-2.25a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com/studiospace",
      icon: () => (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.876h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/studiospace",
      icon: () => (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9H7.824v11.452h2.527V16.31c0-1.264.252-2.491 1.688-2.491 1.424 0 1.458 1.33 1.458 2.72v5.729h2.527zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.063A2.062 2.062 0 0 1 7.401 3.37a2.062 2.062 0 0 1 2.063 2.063 2.062 2.062 0 0 1-2.063 2.063zM6.747 20.452h-2.52V9h2.52v11.452zM22.225 2.75h-4.756a2.264 2.264 0 0 0-2.236 2.236v4.756h-2.52V5.977a2.264 2.264 0 0 0-2.236-2.236H7.961a2.264 2.264 0 0 0-2.236 2.236v9.712a2.264 2.264 0 0 0 2.236 2.236h4.756a2.264 2.264 0 0 0 2.236-2.236V5.977a2.264 2.264 0 0 0-2.236-2.236H7.961A2.264 2.264 0 0 1 5.725 5.977v9.712a2.264 2.264 0 0 0 2.236 2.236h4.756c1.242 0 2.25-1.008 2.25-2.25v-9.712A2.264 2.264 0 0 0 14.039 2.75z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com/studiospace",
      icon: () => (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505a3.016 3.016 0 0 0-2.122 2.136A31.149 31.149 0 0 0 0 12.009a31.149 31.149 0 0 0 1.5 5.823 3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.016 3.016 0 0 0 2.122-2.136A31.149 31.149 0 0 0 24 12.009a31.149 31.149 0 0 0-.502-5.823zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative border-t border-border/50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-lg font-extrabold text-white shadow-sm">
                S
              </span>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Studio<span className="text-amber-500">Space</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
              Your premium destination for creative studios and collaborative workspaces. Where ideas come to life and innovation thrives.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground transition-all duration-300 hover:bg-amber-500 hover:text-white hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-6">
            <h3 className="text-base font-semibold text-foreground">Quick Navigation</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-amber-600 dark:hover:text-amber-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Categories */}
          <div className="space-y-6">
            <h3 className="text-base font-semibold text-foreground">Popular Categories</h3>
            <ul className="space-y-3">
              {studioCategories.map((category) => (
                <li key={category}>
                  <Link
                    href={`/studios?category=${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-amber-600 dark:hover:text-amber-400"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-base font-semibold text-foreground">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for studio tips, special offers, and creative inspiration.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-border/50 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-amber-500 px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/25 active:scale-95"
              >
                {subscribed ? "✓ Subscribed!" : "Subscribe"}
              </button>
              {subscribed && (
                <p className="text-xs text-green-600 dark:text-green-400">
                  Welcome to StudioSpace!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-border/50 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} StudioSpace. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/terms" className="text-muted-foreground transition-colors hover:text-amber-600 dark:hover:text-amber-400">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-amber-600 dark:hover:text-amber-400">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-muted-foreground transition-colors hover:text-amber-600 dark:hover:text-amber-400">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}