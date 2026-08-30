import type { ReactNode } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

interface NavButtonProps {
  children: ReactNode;
  linkTo: string;
  onClick?: () => void;
}

export default function NavButton({ children, linkTo, onClick }: NavButtonProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleNavClick = () => {
    if (onClick) onClick();

    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(linkTo, {
          smooth: true,
          duration: 600,
          offset: -64,
        });
      }, 100);
    }
  };

  if (!isHomePage) {
    return (
      <button
        onClick={handleNavClick}
        className="font-mono text-xs uppercase tracking-wider font-extrabold px-3 py-1.5 border-2 border-transparent hover:border-foreground hover:bg-foreground/5 transition-all duration-150 select-none cursor-pointer rounded-none block text-center w-full"
      >
        {children}
      </button>
    );
  }

  return (
    <ScrollLink
      to={linkTo}
      smooth={true}
      duration={600}
      spy={true}
      offset={-64}
      className="font-mono text-xs uppercase tracking-wider font-extrabold px-3 py-1.5 border-2 border-transparent hover:border-foreground hover:bg-foreground/5 transition-all duration-150 select-none cursor-pointer rounded-none block text-center"
      activeClass="!bg-foreground !text-background !border-foreground !shadow-[2px_2px_0px_0px_var(--foreground)]"
      onClick={onClick}
    >
      {children}
    </ScrollLink>
  );
}
