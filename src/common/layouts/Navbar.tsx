"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Find Work", href: "/jobs" },
  { name: "Find Freelancers", href: "/freelancers" },
  { name: "Categories", href: "/categories" },
  { name: "How it Works", href: "/how-it-works" },
]

export default function Navbar() {
  const pathname = usePathname()
  const isLoggedIn = false 

  return (
    <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">

        {/* --- Left Side: Logo & Links --- */}
        <div className="flex items-center gap-10">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Work Space
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors duration-300 py-1 group",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              )
            })}
          </div>
        </div>

        {/* --- Right Side: Actions & Avatar --- */}
        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <>
              {/* Added nativeButton={false} because we are rendering a Link */}
             
              <Button 
                render={<Link href="/signup" />}
                nativeButton={false}
              >
                Get Started
              </Button>
            </>
          ) : (
            <>
              <Button 
                className="hidden sm:flex" 
                render={<Link href="/post-job" />}
                nativeButton={false}
              >
                Post a Job
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                      <Avatar className="h-10 w-10 border transition-hover hover:opacity-80">
                        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </Button>
                  }
                />
                
                <DropdownMenuContent className="w-56" align="end">
  {/* Wrap the label and top section in a Group */}
  <DropdownMenuGroup>
    <DropdownMenuLabel className="font-normal">
      <div className="flex flex-col space-y-1">
        <p className="text-sm font-medium leading-none">John Doe</p>
        <p className="text-xs leading-none text-muted-foreground">
          john@example.com
        </p>
      </div>
    </DropdownMenuLabel>
  </DropdownMenuGroup>

  <DropdownMenuSeparator />
  
  <DropdownMenuGroup>
    <DropdownMenuItem render={<Link href="/dashboard" />}>
      Dashboard
    </DropdownMenuItem>
    <DropdownMenuItem render={<Link href="/profile" />}>
      Profile
    </DropdownMenuItem>
    <DropdownMenuItem render={<Link href="/settings" />}>
      Settings
    </DropdownMenuItem>
  </DropdownMenuGroup>
  
  <DropdownMenuSeparator />
  
  <DropdownMenuItem variant="destructive" className="cursor-pointer">
    Log out
  </DropdownMenuItem>
</DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}