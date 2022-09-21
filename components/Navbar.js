import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo-driba.svg";
import { useRouter } from "next/router";
import { CgMenu } from "react-icons/cg";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <header>
      <nav className="md:flex justify-center items-center space-x-22">
        <div className="hidden md:flex space-x-12">
          <Link href="/">
            <a className={currentRoute === "/" ? "active" : "non-active"}>
              Accueil
            </a>
          </Link>
          <Link href="/about">
            <a className={currentRoute === "/about" ? "active" : "non-active"}>
              Notre histoire
            </a>
          </Link>
        </div>
        <div className="flex justify-between items-center mx-6">
          <Link href="/">
            <a className={currentRoute === "/" ? "active" : "non-active"}>
              <Image src={logo} alt="Driba logo" />
            </a>
          </Link>
          <div className="md:hidden">
            <CgMenu
              size={42}
              className="cursor-pointer"
              onClick={() => setIsNavOpen((prev) => !prev)}
            />
          </div>
        </div>
        <div className="hidden md:flex space-x-12">
          <Link href="/materials">
            <a
              className={
                currentRoute === "/materials" ? "active" : "non-active"
              }
            >
              Nos matériaux
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={currentRoute === "/contact" ? "active" : "non-active"}
            >
              Contact
            </a>
          </Link>
        </div>
        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="flex flex-col items-center justify-between min-h-[250px]">
            <li className="border-b border-gray-400 my-8">
              <Link href="/">
                <a
                  className={currentRoute === "/" ? "active" : "non-active"}
                  onClick={() => setIsNavOpen(false)}
                >
                  Accueil
                </a>
              </Link>
            </li>
            <li className="border-b border-gray-400 my-8">
              <Link href="/about">
                <a
                  className={
                    currentRoute === "/about" ? "active" : "non-active"
                  }
                  onClick={() => setIsNavOpen(false)}
                >
                  Notre histoire
                </a>
              </Link>
            </li>
            <li className="border-b border-gray-400 my-8">
              <Link href="/materials">
                <a
                  className={
                    currentRoute === "/materials" ? "active" : "non-active"
                  }
                  onClick={() => setIsNavOpen(false)}
                >
                  Nos matériaux
                </a>
              </Link>
            </li>
            <li className="border-b border-gray-400 my-8">
              <Link href="/contact">
                <a
                  className={
                    currentRoute === "/contact" ? "active" : "non-active"
                  }
                  onClick={() => setIsNavOpen(false)}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </header>
  );
};

export default Navbar;
