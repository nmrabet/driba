import Image from "next/image";
import bois from "../public/images/bois.jpg";
import basma from "../public/images/basma-atelier.jpg";
import atelierMarbre from "../public/images/Atelier-marbre.jpg";

const Visit = () => {
  return (
    <div className="text-center md:flex gap-4 justify-center">
      <div>
        <Image src={bois} alt="" width={600} height={714}/>
      </div>
      <div className="mx-16 my-4 flex flex-col gap-4 md:mx-0 md:my-0">
        <Image src={basma} alt="" width={600} height={350}/>
        <Image src={atelierMarbre} alt="" width={600} height={350}/>
      </div>
    </div>
  );
};

export default Visit;
