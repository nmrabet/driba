import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo-driba.svg";
import { useRouter } from "next/router";
import { CgMenu } from "react-icons/cg";

const Navbar = () => {
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
            <CgMenu size={42} className="cursor-pointer"/>
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
      </nav>
    </header>
  );
};

export default Navbar;
