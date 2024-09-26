export interface WeeklyInformation {
    souvenir: string;
    funFact: string;
    author: string;
    image?: string;
  }

export const weeklyInformations: WeeklyInformation[] = [{
    souvenir: "Boire une bière au Bombardier et parler de code jusqu'à 1h, des fucking geek quoi !",
    funFact: "Chez Microsoft dans les années 1990, il y avait une tradition informelle appelée le 'Beer and Code' où les développeurs se réunissaient pour coder tout en buvant de la bière. L’idée était que, dans une ambiance décontractée, les idées créatives pouvaient mieux émerger. C'était un moyen de rendre le travail intense de développement plus agréable, en particulier pendant les longues sessions de codage pour finaliser des projets avant les deadlines. Cette pratique s’est répandue dans de nombreux autres départements technologiques, créant une sorte de culture où bière et code allaient souvent de pair. Cependant, bien que cela ait parfois stimulé la créativité et l’esprit d’équipe, c’était aussi parfois la recette pour des bugs inattendus !",
    author: "leo",
  },
  {
    author: 'Agathe',
    souvenir: 'Journée de maboule à découvrir Giverny, les jardins de Monet, et ses alentours!',
    funFact: 'Savais-tu que Claude Monet, proue de l’impressionnisme, avait fini sa vie et sa carrière malvoyant? Atteint d’une double cataracte il perd peu à peu la vue et sa perception des couleurs se déforme.'
  },
  {
    author: 'Bao',
    souvenir: 'Nous qui pensions que le chien de traineau c\'était juste poser ses petites fesses sur un traîneau et se laisser porter. Quelle fut notre surprise quand nous nous sommes rendus compte que c\'était en fait… sportif.',
    funFact: 'Pendant la Première Guerre mondiale, les chiens et les traîneaux ont été transformés en ambulances et véhicules pour approvisionner les troupes dans les champs et forêts glacées.'
  }
]