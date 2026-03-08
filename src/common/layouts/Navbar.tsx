"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { 
  Bell, 
  Mail, 
  Briefcase, 
  Search, 
  PlusCircle, 
  UserCircle 
} from "lucide-react" // Added mobile icons
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
  { name: "How it Works", href: "/how-it-works" },
]

// Bottom Bar Items
const mobileNavItems = [
  { name: "Jobs", href: "/jobs", icon: Briefcase },
  { name: "Search", href: "/search", icon: Search },
  { name: "Post", href: "/post-job", icon: PlusCircle },
  { name: "Messages", href: "/messages", icon: Mail },
  { name: "Profile", href: "/profile", icon: UserCircle },
]

export default function Navbar() {
  const pathname = usePathname()
  const isLoggedIn = true 

  return (
    <>
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
          <div className="flex items-center gap-3">
            {!isLoggedIn ? (
              <Button 
                render={<Link href="/signup" />}
                nativeButton={false}
              >
                Join Now
              </Button>
            ) : (
              <>
                {/* Post Job Button */}
                <Button 
                  className="hidden sm:flex" 
                  render={<Link href="/post-job" />}
                  nativeButton={false}
                >
                  Post a Job
                </Button>

                {/* Notification Icon Button */}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative text-muted-foreground rounded-full h-10 w-10"
                  render={<Link href="/notifications" />}
                  nativeButton={false}
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-red-500 border-2 border-background" />
                </Button>

                {/* Avatar Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                        <Avatar className="h-9 w-9 border transition-hover hover:opacity-80">
                          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                      </Button>
                    }
                  />
                  
                  <DropdownMenuContent className="w-56" align="end">
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

      {/* --- Mobile Bottom Bar --- */}
      {isLoggedIn && (
        <nav className="md:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-background border-t border-border flex items-center justify-around px-2 pb-safe">
          {mobileNavItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors",
                  isActive ? "text-[#14a800]" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className={cn("h-5 w-5", isActive && "fill-current")} />
                <span className="text-[10px] font-medium tracking-tighter uppercase">
                  {item.name}
                </span>
                {isActive && (
                  <div className="absolute top-0 h-0.5 w-10 bg-[#14a800] rounded-b-full" />
                )}
              </Link>
            )
          })}
        </nav>
      )}
    </>
  )
}