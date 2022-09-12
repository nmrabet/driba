import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <header>
      <nav className="flex justify-center items-center space-x-32 mt-4">
        <div className="flex space-x-12">
          <Link href="/">
            <a className={currentRoute === "/" ? "active" : "non-active"}>Accueil</a>
          </Link>
          <Link href="/about">
            <a className={currentRoute === "/about" ? "active" : "non-active"}>Notre histoire</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a className={currentRoute === "/" ? "active" : "non-active"}>
              <Image
                src="/logo-driba.svg"
                alt="logo"
                width={200}
                height={100}
              />
            </a>
          </Link>
        </div>
        <div className="flex space-x-12">
          <Link href="/materials">
            <a className={currentRoute === "/materials" ? "active" : "non-active"}>Nos matériaux</a>
          </Link>
          <Link href="/contact">
            <a className={currentRoute === "/contact" ? "active" : "non-active"}>Contact</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
