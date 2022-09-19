import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <div className="flex flex-col items-center lg:flex lg:flex-row lg:justify-center lg:items-center space-x-14 mx-auto my-8">
      <div className="">
        <Image
          src="/images/atelier-driba.jpg"
          alt="atelier driba"
          width={600}
          height={400}
          className="rounded-xl"
        />
      </div>
      <div className="max-w-xl">
        <h2 className="text-4xl font-bold">Notre histoire</h2>
        <p className="py-4">
          L&apos;artisanat est un secteur qui offre de multiples possibilités,
          Il regroupe des métiers de passion, de savoir-faire, de liberté,
          construire, créer, faire de la recherche et développer...
        </p>
        <p className="font-bold">
          <Link href="/about">Continuer à lire</Link>
        </p>
      </div>
    </div>
  );
};

export default Main;
