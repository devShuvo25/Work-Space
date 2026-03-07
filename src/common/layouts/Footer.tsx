"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  platform: [
    { name: "Find Work", href: "/jobs" },
    { name: "Find Freelancers", href: "/freelancers" },
    { name: "Categories", href: "/categories" },
    { name: "How it Works", href: "/how-it-works" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Trust & Safety", href: "/trust" },
    { name: "Contact Support", href: "/support" },
    { name: "Careers", href: "/careers" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* --- Brand Section --- */}
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-bold tracking-tight text-primary">
              Work Space
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground leading-6">
              The world&apos;s work marketplace. Connect with top talent and find 
              opportunities that match your skills.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* --- Links Grid --- */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Platform</h3>
                <ul className="mt-4 space-y-3">
                  {footerLinks.platform.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground">Company</h3>
                <ul className="mt-4 space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* --- Newsletter --- */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">Stay Updated</h3>
              <p className="text-sm text-muted-foreground">
                Get the latest job opportunities sent to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
                <Button size="sm" className="whitespace-nowrap">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* --- Bottom Section --- */}
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} WorkNova Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="text-xs text-muted-foreground hover:text-foreground">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}