import Image from "next/image";
import assiette from "../public/images/creations/atelier-assiette.jpg";
import cadres from "../public/images/creations/atelier-cadres.jpg";
import atelier from "../public/images/creations/atelier-driba.jpg";
import poissons from "../public/images/creations/atelier-poisson.jpg";
import boules from "../public/images/creations/boule.jpg";
import driba from "../public/images/creations/driba.jpg";

const pics = [
  { id: 1, src: assiette, alt: "déco" },
  { id: 2, src: cadres, alt: "cadres" },
  { id: 3, src: atelier, alt: "atelier" },
  { id: 4, src: poissons, alt: "poisson" },
  { id: 5, src: boules, alt: "boules" },
  { id: 6, src: driba, alt: "driba" },
];

const Gallery = () => {
  return (
    <div className="bg-neutral-300 my-8 pb-10">
      <h3 className="text-5xl font-bold pl-36 py-10">Nos créations</h3>
      <div className="flex flex-wrap justify-center gap-8">
        {pics.map((pic) => {
          return (
            <div key={pic.id}>
              <Image
                src={pic.src}
                alt={pic.alt}
                className="rounded-xl"
                width={400}
                height={250}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
