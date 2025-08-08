import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = ()=>{
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);



     useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




    
    return <nav className={cn("fixed w-full z-40 transition-all duration-300",
        isScrolled? "py-3 bg-background/60 backdrop-blur-md  shadow-lg": "py-3"
    )}>
        <div className="container flex items-center justify-between">
            <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                <span className="relative z-10 mt-2">
                    <span className="text-glow text-foreground">
                        <span className="text-glow text-foreground">&lt;</span>
                    Ashutosh 
                   
                </span> <span>/</span>
                Portfolio
                <span>&gt;</span>
                </span>
            </a>
             {/* desktop nav */}


            <div className="hidden md:flex space-x-8 mr-28 mt-2">
                {navItems.map((item,key)=>{
                   return <a key={key} className="text-foreground/80 hover:text-primary transition-colors duration-300" href={item.href}>{item.name}</a>
                })}
            </div>

             {/* mobile nav  */}
            <button onClick={()=>setIsMenuOpen((prev)=>!prev)} className="md:hidden p-2 text-foreground z-50"
                aria-label={isMenuOpen? "Close Menu":"Open Menu"}>{isMenuOpen? <X size={24}/> :<Menu size={24}/>}</button>


            <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center","transition-all duration-300 md:hidden h-screen",
                isMenuOpen? "opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"
            )}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-8 text-xl">
                {navItems.map((item,key)=>{
                   return <a key={key} className="text-foreground/80 hover:text-primary transition-colors duration-300" href={item.href} onClick={()=>setIsMenuOpen(false)}>{item.name}</a>
                })}
            </div>
            </div>



        </div>
    </nav>
}