import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import NavbarItem from "./navbar-item";
import LanguageSwitcher from "./language-switcher";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navbarItems = [
    { href: "#home", label: t("navbar.home") },
    { href: "#about", label: t("navbar.about") },
    { href: "#experiences", label: t("navbar.works") },
    { href: "#skills", label: t("navbar.skills") },
    {
      href: "#contact",
      label: t("navbar.contact"),
      icon: (
        <ArrowRight className="w-6 h-6 text-white bg-black rounded-full p-1 animate-left-to-right hidden lg:block" />
      ),
      className: "lg:mx-6 lg:bg-gray-100 pr-0",
    },
  ];

  return (
    <nav className="bg-white lg:bg-white/60 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-3 md:px-4 lg:px-6 xl:px-0">
        {/* Desktop / large screens */}
        <div className="hidden lg:flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold font-fira-code cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>jadscript.dev</h1>
          <ul className="flex items-center gap-2">
            {navbarItems.map((item) => (
              <NavbarItem key={item.href} {...item} />
            ))}
            <LanguageSwitcher className="flex" />
          </ul>
        </div>

        {/* Mobile / tablet */}
        <div className="flex items-center justify-between py-3 lg:hidden">
          <h1 className="text-xl font-bold font-fira-code" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>jadscript.dev</h1>
          <div className="flex items-center gap-2">
            <LanguageSwitcher className="flex" />
            <button
              type="button"
              className="cursor-pointer inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="pb-3 lg:hidden">
            <ul className="flex flex-col gap-1">
              {navbarItems.map((item) => (
                <NavbarItem
                  key={item.href}
                  {...item}
                  className={`w-full justify-start md:w-auto md:justify-center ${item.className || ""}`}
                  onClick={() => setIsOpen(false)}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="bg-linear-to-r from-cyan-300 to-lime-300 h-px z-10 left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] relative"></div>
    </nav>
  );
};

export default Navbar;
