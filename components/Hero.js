import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div>
        <div className="hidden lg:block bg-white bg-opacity-75 absolute z-10 p-32 mt-32 w-3/6">
          <h1 className="hidden lg:block lg:text-5xl">L’Atelier DRIBA</h1>
          <p className="hidden lg:block py-4 text-2xl">
            Une expérience, une invitation à l’expression, à l’imagination et à
            la création.
          </p>
        </div>
        <div className="text-right z-0">
          <Image
            src="/images/ceramique.png"
            alt="ceramique"
            width={1178}
            height={750}
          />
        </div>
      </div>
      <div className="my-10">
        <h1 className="text-center text-4xl mb-4">L&apos;Atelier Driba 93</h1>
        <p className="italic text-center mx-auto px-6 md:w-2/3 lg:w-2/5 mb-4">
          Une ode à la magie que chacun porte en lui. À travers nos oeuvres,
          nous proposons un méli-mélo de cultures et un voyage. À travers les
          cultures, les influences et les sens. Une aventure artisanale
          et artistique. Une quête, tantôt poétique, tantôt mystique, toujours
          unique.
        </p>
        <button className="block rounded-lg mx-auto border border-black py-2 px-4 hover:bg-blue hover:text-white">
          <Link href="/about">En savoir plus</Link>
        </button>
      </div>
    </>
  );
};

export default Hero;
