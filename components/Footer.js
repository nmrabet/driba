import Link from "next/link";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="bg-blue text-white py-24 space-y-6 lg:flex justify-between px-14 items-center">
        <div>
          <h2 className="text-3xl">L&apos;Atelier Driba</h2>
        </div>
        <div>
          <p className="max-w-xl">
            Une expérience, une invitation à l’expression, à l’imagination et à
            la création.
            <br /> Une aventure artisanale et artistique. Une quête, tantôt
            poétique, tantôt mystique, toujours unique.
          </p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <Link href="https://www.facebook.com/profile.php?id=100063329074821">
              <a target="_blank" rel="noopener noreferrer">
                <BsFacebook size={20} />
              </a>
            </Link>
            <Link href="https://www.instagram.com/atelierdriba/?hl=fr">
              <a target="_blank" rel="noopener noreferrer">
                <BsInstagram size={20} />
              </a>
            </Link>
          </ul>
        </div>
      </div>
      <div className="bg-[#151C26] text-center text-white py-2">
        <p>Copyright &copy; {new Date().getFullYear()} - Atelier Driba</p>
      </div>
    </>
  );
};

export default Footer;
