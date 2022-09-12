import Link from "next/link";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-24 flex justify-between px-14 items-center">
      <div>
        <h2 className="text-3xl">L&apos;Atelier Driba</h2>
      </div>
      <div>
        <p className="max-w-xl">
          Une expérience, une invitation à l’expression, àl’imagination et à la
          création. Une aventure artisanale et artistique. Une quête, tantôt
          poétique, tantôt mystique, toujours unique.
        </p>
      </div>
      <div>
        <ul className="flex space-x-4">
          <Link href="https://www.facebook.com/profile.php?id=100063329074821">
            <a>
              <BsFacebook />
            </a>
          </Link>
          <Link href="https://www.instagram.com/atelierdriba/?hl=fr">
            <a>
              <BsInstagram />
            </a>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
