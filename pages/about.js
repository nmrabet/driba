import Image from "next/image";
import mosaique from "../public/images/mosaiques.jpg";
import marbre from "../public/images/marbredriba.jpg";
import tortue from "../public/images/Marbre.jpg";
import poisson from "../public/images/creations/atelier-poisson.jpg";
import assiette from "../public/images/creations/atelier-assiette.jpg";
import basma from "../public/images/basma-atelier.jpg";

const about = () => {
  return (
    <>
      <div className="flex justify-between items-center mx-32 my-6">
        <div className="space-y-8">
          <h1 className="text-4xl">L&apos;Atelier Driba</h1>
          <p>Contactez-nous ou venez visiter notre atelier</p>
          <button className="border rounded-md border-gray-600 px-6 py-2">
            Nous trouver
          </button>
        </div>
        <div className="flex flex-row space-x-8">
          <div>
            <Image
              src={mosaique}
              alt=""
              width="310"
              height="400"
              className="rounded-lg"
            />
          </div>
          <div className="pt-12">
            <Image
              src={marbre}
              alt=""
              width="310"
              height="400"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="my-14 mx-auto max-w-5xl space-y-8">
        <p>
          L&apos;artisanat est un secteur qui offre de multiples possibilités,
          Il regroupe des métiers de passion, de savoir-faire, de liberté,
          construire, créer, faire de la recherche et développer.{" "}
        </p>
        <p>
          AD 93 est un atelier de recherche, de formation et de création
          artistique et artisanale, spécialisé dans la reproduction d’objets du
          patrimoine outre la restauration, la décoration, la conception et
          réalisation de meubles originaux d’inspiration traditionnelle et de
          tous objets.
        </p>
        <div>
          <Image src={tortue} alt="" width={1100} height={500} />
        </div>
        <p>
          Grâce à une équipe pluridisciplinaire, l’atelier Driba, qui dispose
          d’une structure particulière rassemblant divers corps de métiers, sous
          forme de petits ateliers distincts mais complémentaires, est à même
          d’intervenir dans une multitude de spécialités artistiques et
          artisanales comme : résine, céramique, peinture, sculpture sur bois,
          plâtres, fer forgé, sur pierre pour la réalisation de chapiteaux,
          colonnes, frontons, vasques, fontaines, encadrements de portes ;
          calepinage, mosaique.. Le concept allie modernité et tradition pour
          créer des objets très contemporains, qui s’inspirent souvent de
          collections anciennes.
        </p>
        <p>
          L’atelier forme également de jeunes artisans et des étudiants aux
          techniques qu’il a développé et perfectionné au fil du temps.
        </p>
        <p>
          Bienvenue à l’atelier Driba où tout est possible, grâce a nos artisans
          compétant et passionnés.
        </p>
        <p>
          Toutes ces pièces en céramique, faïence, bois, marbre, fer forgé,
          pierre sont produites à la main à l’atelier. Soignées et façonnées
          dans les règles de l’art avec du temps, du travail et surtout de la
          passion.
        </p>
        <p>
          En marge de cette activité de production, AD 93 a publié trois
          ouvrages destinés à la valorisation du patrimoine artisanal : Apogée
          du Jelliz en Tunisie, Chaouat terre cuite de Djerba, Haddada
          Ferronnerie de Tunisie.
        </p>
        <p>
          L’équipe de AD 93 a en outre fondé en 2012, Hirfa une association qui
          a pour but la promotion et la sauvegarde du patrimoine et des métiers
          de l’artisanat tunisien.
        </p>
      </div>

      <div className="text-center">
        <Image src={poisson} alt="" className="rounded-xl" />
        <Image src={assiette} alt="" className="rounded-xl" />
      </div>

      <div className="my-14 mx-auto max-w-5xl space-y-8">
        <h2 className="text-5xl text-center">FONDATEUR DE L’ATELIER DRIBA</h2>
        <h3 className='text-4xl text-center'>MOHAMED MESSAOUDI</h3>
        <p>
          Avant de devenir le designer que l’on connaît, Mohamed Messaoudi est
          avant tout un collectionneur, passionné d’art, d’histoire et
          d’antiquité. A Douze, treize ans à peine, il s’amusait déjà à mettre
          en scène les articles de pêche dans les vitrines de la boutique que
          possédait sa famille dans le centre ville de Tunis. Apres une
          formation à Paris dans l’expertise et la restauration des oeuvres
          d’art et un long voyage initiatiques à la découverte du monde qui le
          mena jusqu’au Canada et au Mexique, il a retrouvé Tunis dans les
          années 90. Il ouvre alors le premier espace d’art de la ville de la
          Marsa, la Galerie Driba. Ce lieu fut à l’origine de la découverte de
          beaucoup de jeunes artistes de talent. La galerie s’est également
          distinguée par l’originalité scénographique de ses expositions à
          thèmes où se sont régulièrement côtoyés collections anciennes et
          interprétations contemporaines.
        </p>
        <div className="text-center px-3">
          <Image src={basma} alt="" />
        </div>
        <p>
          Mais l’activité de ce « créateur boulimique » comme beaucoup
          n’hésitent pas a le qualifier, ne s’arrête pas la. Des 1993, Mohamed
          Messaoudi crée l’Atelier Driba. AD 93 et parie sur la réhabilitation
          du patrimoine artisanal traditionnel. En s’inspirant de collections
          anciennes, il conçoit et réalise toutes sorte d’objets, accessoires de
          de décoration et mobilier, très tendance, à la fois élégants et
          fonctionnels, répondant ainsi à la demande d une clientèle en quête
          d’authenticité.
        </p>
      </div>
    </>
  );
};

export default about;
