import Image from "next/image";
import vase from "../public/images/vase.jpg";
import ceramique from "../public/images/Ceramique.jpg";
import bois from "../public/images/bois.jpg";
import halfa from "../public/images/creations/halfa-vase.jpg";
import Halfa from "../public/images/creations/Halfa.jpg";
import artisan from "../public/images/artisan.jpg";
import peinture from "../public/images/prince.jpg";

const materials = () => {
  return (
    <>
      <div>
        <Image src={vase} alt="" width={1640} height={802} />
      </div>
      <div className="flex justify-between items-center max-w-7xl mx-auto my-14">
        <h2 className="text-4xl w-1/3">
          Panorama de l&apos;activité de l&apos;Atelier Driba
        </h2>
        <p className="w-1/3 text-right text-lg">
          Nous réalisons toutes sortes de meubles et éléments de décoration
          personnalisés
        </p>
      </div>

      <div className="mx-28 flex items-center space-x-12 my-8">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-4xl">Atelier de Céramique</h2>
          <p>
            Inspirée de notre patrimoine ou résolument moderne, utilitaire ou
            décorative, la céramique se décline à l’infini dans nos ateliers.
            Vaisselles, objets déco arty, sculptures diverses sortent
            quotidiennement de nos fours
          </p>
          <p>
            L’art de la céramique existe depuis la nuit des temps. Les
            recherches archéologiques révèlent que c’est bien avant notre ère
            que ce métier voit le jour à travers tout le monde entier. En effet,
            les premiers objets faits à base de terre séchée, on voit ainsi que
            cette activité est légendaire et a traversé des millions d’années
            pour parvenir à notre époque en subissant de très nombreuses
            mutations.
          </p>
          <p>
            L’Homme a compris très vite la nécessité de comprendre et de
            maîtriser son environnement pour pouvoir garantir son adaptation et
            sa survie. Dans cette optique, le travail de la terre à modeler est
            devenu un métier porteur et prometteur. Il a traversé les frontières
            terrestres et maritimes pour faire son bout de chemin à travers
            toute la planète.
          </p>
          <p>
            Par ailleurs, avec la découverte du feu l’on a créé de nouvelles
            techniques pour façonner durablement et rapidement le matériau. Les
            objets issus de cette transformation sont plus résistants et
            présentent un aspect plus esthétique.
          </p>
        </div>
        <div>
          <Image src={ceramique} alt="" />
        </div>
      </div>

      <div className="mx-28 flex items-center space-x-12 my-8">
        <div>
          <Image src={bois} alt="" />
        </div>
        <div className="max-w-3xl space-y-6">
          <h2 className="text-4xl">Boiserie</h2>
          <p>
            Le bois dans tous ses états... massif, ajouré, tourné, sculpté ou
            agrémenté d’un élément de récupération qui donnent une seconde vie à
            des pièces de mobilier devenues désuètes.
          </p>
          <p>Le bois de palmier, qui donne un cachet unique.</p>
          <p>
            Le bois de palmier à de nombreuses variantes de couleurs, ses
            teintes et ses nuances vont du doré avec des taches de brun foncé au
            brun presque ébène ce qui rend chaque pièce en bois de palmier
            unique.
          </p>
          <p>
            Plus original que les autres bois de décoration comme, le chêne, le
            pin, le bouleau, le noyer ou le châtaignier, son grain donne un
            cachet unique aux objets de décoration, mais aussi au mobilier d’une
            maison. Le bois de palmier a en effet de nombreuses applications, il
            peut aussi bien servir de matériel de base primaire comme de
            matériel d’aménagement intérieur. Étant un bois de faible densité,
            il est préférablement utilisé dans des applications non porteuses
            comme pour l’habillage intérieur d’une pièce sous forme de panneaux
            de bois, pour sa valeur esthétique sur des objets de décoration ou
            encore pour des articles de cuisine.{" "}
          </p>
          <p>
            De nombreuses idées de décorations et de multiples styles en design
            d’intérieur se servent du bois pour embellir les pièces et donner un
            esprit chaleureux à une maison. Cependant, les bois utilisés
            manquent parfois d’originalité et de prestance dans une pièce. Le
            bois de palmier présente lui l’avantage de faire oublier tous les
            concepts à la mode pour créer une décoration d’intérieur ethnique et
            chic que l’on retrouve dans peu d’endroits encore en occident. On
            peut l’intégrer dans n’importe quel style de décoration tant il est
            un bois chic qui se marie très bien avec toute autre matière. Il
            s’accommode particulièrement bien avec les murs aux teintes
            naturelles, avec les revêtements en fibres végétales et avec des
            matières comme le lin, le coton ou encore le chanvre. Le bois de
            palmier va dans tous les cas rendre l’atmosphère d’une pièce
            chaleureuse et propice à la relaxation et à l’évasion sans donner
            l’effet rustique des autres types de bois.
          </p>
        </div>
      </div>

      <div className="mx-28 flex items-center space-x-12 my-8">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-4xl">Articles en Halfa</h2>
          <p>
            Le promoteur de l’Atelier Driba AD93, Mohamed Messaoudi a créé l’
            association, Hirfa , l’ATPS , Association Tunisienne de Promotion et
            de Sauvegarde des métiers et du Patrimoine Artisanal.
          </p>
          <p>
            Dans le cadre de la réalisation de ses objectifs, l’ATPS s’est
            spécifiquement penchée sur la préservation, la promotion et la mise
            en valeur des savoir-faire dans les régions déshéritées de Tunisie.
          </p>
          <p>
            La première des actions importantes de l’association Hirfa a
            concerné l’artisanat de l’halfa dans la région de Kasserine. Cette
            activité artisanale, essentiellement féminine, à forte
            employabilité, constitue l’une des principales sources de revenu
            pour cette région particulièrement pauvre. Mais les difficultés
            inhérentes à ce métier très ardu, et en outre relativement peu
            gratifiant au regard des efforts considérables qu’il nécessite ont
            fait que les jeunes avaient tendance à s’en désintéresser. L’ATPS
            s’est donc fixé l’objectif de contribuer à la redynamisation et à
            l’essor de ce métier artisanal, en favorisant sa transmission aux
            jeunes générations. C’est dans la perspective de perpétuer ce
            savoir-faire et de le transmettre aux jeunes générations, que
            l’association Hirfa, en collaboration avec le fonds emploi de la GIZ
            a mis en place ,dès 2014, un Atelier de formation et de
            développement du produit halfa, sur le site d’El Ouassaia, Garat
            Agueb, dans la région de Kasserine
          </p>
          <p>
            En effet, l’artisanat de l’halfa, en tant que métier d’art créatif,
            pouvait , à notre sens, offrir aux jeunes de la région, les
            perspectives d’une vie épanouissante, digne et heureuse. L’idée
            était donc d’améliorer les conditions de travail des artisanes, de
            les encadrer pour la mise à niveau de leur production (normes de
            qualité & design adapté au goût du jour) et d’aider à leur
            visibilité pour optimiser la commercialisation des produits en
            Tunisie et à l’étranger et cela, dans une perspective de
            développement durable et de commerce équitable. Dans cette optique,
            l’Atelier AD 93, Driba a conçu une gamme de nattes et de paniers
            présentés lors de multiples expositions qui ont connu un vif succès.
          </p>
          <p>
            En effet, l’artisanat de l’halfa, en tant que métier d’art créatif,
            pouvait , à notre sens, offrir aux jeunes de la région, les
            perspectives d’une vie épanouissante, digne et heureuse. L’idée
            était donc d’améliorer les conditions de travail des artisanes, de
            les encadrer pour la mise à niveau de leur production (normes de
            qualité & design adapté au goût du jour) et d’aider à leur
            visibilité pour optimiser la commercialisation des produits en
            Tunisie et à l’étranger et cela, dans une perspective de
            développement durable et de commerce équitable. Dans cette optique,
            l’Atelier AD 93, Driba a conçu une gamme de nattes et de paniers
            présentés lors de multiples expositions qui ont connu un vif succès.
          </p>
        </div>
        <div>
          <Image src={halfa} alt="" />
          <Image src={Halfa} alt="" />
        </div>
      </div>

      <div className="mx-28 flex items-center space-x-12 my-8">
        <div>
          <Image src={artisan} alt="" />
        </div>
        <div className="max-w-3xl space-y-6">
          <h2 className="text-4xl">Atelier de ferronerie</h2>
          <p>
            Répliques d’ancien ou pièces design, nous réalisons du mobilier pour
            intérieur & extérieur, grilles, paravents, bougeoirs, photophores,
            tringles, lustres & appliques, sculptures...
          </p>
        </div>
      </div>

      <div className="mx-28 flex items-center space-x-12 my-8">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-4xl">Atelier de peinture</h2>
          <p>
            Peinture sur tous types de supports, patines, trompe l’œil. Nous
            réalisons des décors en tous genres sur les matériaux les plus
            divers : terre cuite, bois, fer, plâtre, etc.
          </p>
        </div>
        <div>
          <Image src={peinture} alt="" />
        </div>
      </div>
    </>
  );
};

export default materials;
