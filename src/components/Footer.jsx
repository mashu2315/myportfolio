import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Skills", to: "/skills" },
  { name: "Projects", to: "/projects" },
  { name: "Education", to: "/education" },
  { name: "Contact", to: "/contact" },
  { name: "Terminal", to: "/terminal" },
];


export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} All rights are reserved to Ashutosh Maurya.
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        {
          navItems.map((data,index)=>{
              return (
                <div key={index} className="hover:text-primary/95 ">
                  <Link to={data.to}>{data.name}</Link>
                </div>
              )
          })
        }
      </div>
      <a
        href="#"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
