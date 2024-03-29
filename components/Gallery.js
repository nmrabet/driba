import Image from "next/image";
import assiette from "../public/images/creations/atelier-assiette.jpg";
import cadres from "../public/images/creations/atelier-cadres.jpg";
import Halfa from "../public/images/creations/Halfa.jpg";
import poissons from "../public/images/creations/atelier-poisson.jpg";
import halfa from "../public/images/creations/halfa-vase.jpg";
import jarre from "../public/images/creations/Jarre-mosaique.jpg";

const pics = [
  { id: 1, src: assiette, alt: "déco" },
  { id: 2, src: cadres, alt: "cadres" },
  { id: 3, src: Halfa, alt: "Halfa" },
  { id: 4, src: poissons, alt: "poisson" },
  { id: 5, src: halfa, alt: "boules" },
  { id: 6, src: jarre, alt: "jarre" },
];

const Gallery = () => {
  return (
    <div className="bg-beige my-16 pb-10">
      <h3 className="text-center text-3xl lg:text-5xl lg:text-left font-bold lg:pl-36 py-10">Nos créations</h3>
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
