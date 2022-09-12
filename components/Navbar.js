import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-center items-center space-x-32 mt-4">
        <div className="flex space-x-12">
          <Link href="/">
            <a>Accueil</a>
          </Link>
          <Link href="/about">
            <a>Notre histoire</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>
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
            <a>Nos matériaux</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
