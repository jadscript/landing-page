import type { FC, ReactNode } from "react";

interface NavbarItemProps {
  href: string;
  label: string;
  icon?: ReactNode;
  className?: string;
}

const NavbarItem: FC<NavbarItemProps> = ({ href, label, icon, className }) => {
  const scrollTo = (target: string) => {
    window.scrollTo({ top: getTarget(target), behavior: "smooth" });
  };
  const getTarget = (target: string) => {
    if (target === "#home") {
      return 0;
    }
    const targetElement = document.getElementById(target.replace("#", ""));
    return targetElement?.offsetTop || 0;
  };
  return (
    <li
      className={`${className} hover:bg-gray-100 rounded-full px-3 py-1 transition-all duration-300`}
    >
      <a  className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo(href)}>
        {label} {icon}
      </a>
    </li>
  );
};

export default NavbarItem;
