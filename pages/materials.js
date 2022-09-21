import Image from "next/image";
import vase from "../public/images/vase.jpg";

const materials = () => {
  return (
    <>
      <div>
        <Image src={vase} alt="" width={1640} height={802} />
      </div>
      <div className="flex justify-between items-center max-w-7xl mx-auto my-14">
        <h2 className="text-4xl w-1/3">Panorama de l&apos;activité de l&apos;Atelier Driba</h2>
        <p className="w-1/3 text-right">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati ex
          repellendus qui illo et.
        </p>
      </div>
    </>
  );
};

export default materials;
