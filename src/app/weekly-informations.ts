export interface WeeklyInformation {
    souvenir: string;
    funFact: string;
    author: string[];
    image?: string;
  }

export  const weeklyInformations: WeeklyInformation[] = [
    {
      souvenir: "Maxou est né à 23h le 13 juillet, en plein feu d'artifice. Il a failli s'appeler 'fête nat.' 😁",
      funFact: "Savais tu que Franck Ribéry est devenu papa d’un petit garçon le 14 juillet 2015 et qu'il l'a appelé FetNat ? Il explique dans une interview donnée à Enfants et Bébés Mag’: 'Wahiba ne m’a rien dit pour ce nouvel enfant. Moins de deux mois après la naissance d’un petit bébé, c’est rare d’en avoir un autre. Je n’avais rien préparé, alors j’ai fait comme beaucoup de gens, j’ai pris le calendrier, j’ai repéré la date, j’ai pris mon doigt pour suivre la ligne, et j’ai trouvé le prénom de mon nouveau fils : Fetnat.'",
      author: ["Christel", "Maman"],
      image: "max-fet-nat.png"
    },
    {
      souvenir: "Boire une bière au Bombardier et parler de code jusqu'à 1h, des fucking geek quoi !",
      funFact: "Chez Microsoft dans les années 1990, il y avait une tradition appelée 'Beer and Code' où les développeurs se réunissaient pour coder tout en buvant de la bière, stimulant ainsi la créativité.",
      author: ["Léo","Leo", "Le rigolo"]
    },
    {
      souvenir: "Journée de maboule à découvrir Giverny, les jardins de Monet, et ses alentours !",
      funFact: "Savais-tu que Claude Monet, proue de l’impressionnisme, avait fini sa vie et sa carrière malvoyant? Atteint d’une double cataracte, il perd peu à peu la vue et sa perception des couleurs se déforme.",
      author: ["Agathe", "Gagy"]
    },
    {
      souvenir: "Nous qui pensions que le chien de traîneau c'était juste poser ses petites fesses sur un traîneau et se laisser porter. Quelle fut notre surprise quand nous nous sommes rendus compte que c'était en fait… sportif. A toi Max, perdu dans les sapins tirés par tes 3 chiens. A toi Max, qui t’es fait engueuler comme un enfant par le guide.",
      funFact: "Pendant la Première Guerre mondiale, dans les pays européens comme la Norvège, les chiens et les traîneaux utilisés pour les loisirs ont été transformés en ambulances et en véhicules pour approvisionner les troupes dans les champs, les forêts et les montagnes glacées.",
      author: ["Bao"]
    },
    {
      souvenir: "À la génance de la Kékette quand tu as dû rester avec les parents de Thomas pendant que je fuyais dans la cuisine…",
      funFact: "La Chine est le pays produisant le plus de bière au monde. En termes de volume de production, la Chine se positionne comme leader du classement mondial. Elle devance ainsi les Etats-Unis et le Brésil. En 2021, 360 millions d'hectolitres de bière y ont été brassés. La bière la plus vendue au monde est chinoise : La Snow.",
      author: ["Noémie", "Noemie"]
    },
    {
      souvenir: "Notre premier voyage tous les 2, à Londres ✨ Soirée dans un pub Irlandais à boire du cidre en jouant à “Quel serait ton super pouvoir bidon ?“",
      funFact: "Qui dit super-pouvoirs dit super héros ! En voici le seul qui n'a pas de super pouvoir (à part être riche, bouh c'est nul !) : Batman ! Savais-tu qu'un soir, Batman, un peu perdu, a failli se faire butter par une vieille croate avec un manche à balai ? ('I'm gonna kill batman').",
      author: ["Gab"]
    },
    {
      souvenir: "Ca c'est un gros cornichon",
      funFact: "Il existait une loi dans l'État du Connecticut qui stipulait qu'un cornichon ne pouvait être vendu que s'il rebondissait lorsqu'on le laissait tomber.",
      author: ["Léo","Leo", "Le rigolo"]
    },
    {
      souvenir: "Pendant le 1er confinement, on a fait la teuf avant la fin du confinement au 86 pour l’anniversaire de Léo, et globalement on a bien fraudé pour rejoindre la colove et le 86.",
      funFact: "Pendant le covid, certains propriétaires ont commencé à se fabriquer de faux 'badges de promeneur'. Cela a donné lieu à des scènes hilarantes de fausses promenades canines dans plusieurs villes.",
      author: ["Justine"]
    },
    {
      souvenir: "La fois où l’on a ramené un sapin de 3 mètres de long aux 2 Alpes avec Sam et Fab ! Pour l’anecdote, ce beau sapin s’était fait embarquer par un autre groupe avant de finir libéré dans la nature.",
      funFact: "À l'origine, les sapins étaient utilisés dans des pièces de théâtre religieuses et ont ensuite évolué pour devenir les arbres de Noël que l'on connaît aujourd'hui.",
      author: ["Florent"]
    },
    {
      souvenir: "La première fois que tu rencontres ma pote Imen c’était lors d’un zoom pendant le confinement, elle s’est mise à chanter et avec R1 et Léo vous avez eu un énorme fou rire, moment épique !",
      funFact: "En raison de la pandémie, la plateforme Zoom a connu une croissance explosive : son nombre d'utilisateurs est passé de 10 millions à plus de 300 millions de participants par jour en quelques mois.",
      author: ["Justine"]
    },
    {
      souvenir: "Ces belles soirées passées sur le terrain de golf de Mouans Sartoux à dessiner de jolies choses artistiques sur le green et à écouter la douce mélodie de Maxime et de sa flûte à bec.",
      funFact: "Au XVIIe siècle, la flûte à bec était très prisée, même par la royauté. Le roi Henri VIII d'Angleterre possédait environ 76 flûtes à bec.",
      author: ["Florent"]
    },
    {
      souvenir: "Après une énième soirée de montage JTM et une belle nuit blanche, tu faisais des petits traits sur tes bras pour éviter de t’endormir.",
      funFact: "Le montage n'a pas toujours existé. La profession de monteur n'est apparue qu'en 1913 aux États-Unis et en 1917 en France.",
      author: ["Bao"]
    },
    {
      souvenir: "Eté 2015, mouans Sartoux.\nJ'ai beaucoup aimé rencontrer ta famille et aider surtout toi et ton père à faire des travaux dans le cabinet de ta mère. Un sacré moment où toi et ton père vous vous embrouillez sur comment découper une planche de BA13 JUSQU’AU moment où tu quittes excédé le local pour aller faire un tour dehors … et je me retrouve en tête à tête avec ton père.",
      funFact: "Si l’utilisation du plâtre dans la construction n’est pas nouvelle, c'est en 1894 aux États-Unis qu'est inventé le concept de la plaque de plâtre (plasterboard). La technique de la plaque de plâtre a été apportée en France à la sortie de la Seconde Guerre mondiale par la société Placoplatre (filiale du groupe Saint-Gobain), créée à cette fin par les sociétés Plâtres Lambert, SAMC, Plâtrières de Crozon et Garandeau, au moment de la reconstruction.",
      author: ["Nicolas", "Kuhn"],
    },
    {
      souvenir: "Notre belle chanson '3A relous' sur les airs de 'cette année là' de Claude François",
      funFact: "Entre 1966 et 1978, environ 45 Claudettes ou 'Clodettes' se succédèrent aux côtés de Claude François. La dernière fut embauchée par le chanteur trois jours avant sa mort. Au début de sa carrière, Claude François s'était entouré de quatre choristes... qu'il avait surnommé 'les Fléchettes' !",
      author: ["Bao"]
    },
    {
      author: ["Jean"],
      souvenir: "À Pragues, en patientant devant une petite église, nous nous sommes tapés un bon gros fou rire devant la vidéo d’un redneck goûtant deux pâtées pour chien pour les comparer. Le verdict : 'They both taste like shit'.",
      funFact: "Pendant la Première Guerre mondiale, une entreprise américaine nommée Chappel Brothers a commencé à produire de la pâtée pour chien en conserve à base de viande de cheval. Leur produit, appelé 'Ken-L Ration', a été l'une des premières nourritures en conserve pour chien."
    },
    {
      souvenir: "La balade en raquettes à la première édition du ski avec ma maman, qui n’a retenu que ton prénom parmi tous les mineurs.",
      funFact: "Une partie de nos prouesses pour reconnaître les visages provient d'une région du cerveau nommée 'l'aire fusiforme des visages' qui semble être spécifiquement dédiée à cet usage. Des dégâts en cet endroit, ou dans des régions proches du cerveau, peuvent provoquer une maladie appelée prosopagnosie, ou incapacité à reconnaître les visages.",
      author: ["Bao"]
    },
    {
      souvenir: "À notre belle course poursuite derrière le bus Sicilien ! Quelle folle aventure, je nous revois encore, comme dans un film d'action, conduire en mode Bonnie and Clyde. Sauf que dans notre cas, c'était bien le chauffeur du bus qui fuyait…",
      funFact: "Savais-tu que l'institut Ipsos a interrogé 10 000 automobilistes européens sur leur comportement au volant. Parmi les dix pays concernés, les Italiens se reconnaissent à hauteur de 58% comme les conducteurs les plus irresponsables.",
      author: ["Gab"]
    },
    {
      souvenir: "L'escape game Far West avec Mad Max, Buffalo Raph et Bao The Kid.",
      funFact: "Le cow-boy passait la majeure partie de son temps à cheval : surveiller des animaux, les faire traverser des rivières, ou des étendues désertiques. Le salaire mensuel variait entre 30 et 40 dollars, quand une paire de bottes en coûtait 15.",
      author: ["Bao"]
    },
    {
      souvenir: "Des petits pois explosifs ! Niveau 1 en cuisine à l’époque, la cuisine de Max n’en a pas réchappé. Une boîte de petits pois peut faire un magnifique geyser quand elle accumule trop de vapeur.",
      funFact: "Les petits pois sont des héros de l'histoire de la génétique ! C'est grâce à eux que Gregor Mendel a découvert les principes de l'hérédité.",
      author: ["Noémie", "Noemie"]
    },
    {
      souvenir: "Au ski 2022, lorsque Blazy, toi et moi étions dans la même chambre, surnommée la chambre des ronfleurs.",
      funFact: "Les ronflements peuvent atteindre 100 décibels, équivalent au bruit d'un camion. Après 60 ans, 60% des hommes et 40% des femmes ronflent.",
      author: ["Bao"]
    },
    {
      souvenir: "Lors de la soirée space cookie au ski, quand ta tentative de me chuchoter quelque chose s’est transformée en ENORME pouffement de rire à 2 cm de mon oreille.",
      funFact: "Certaines variétés de cannabis sentent le fromage en raison de certains acides présents dans les terpènes, notamment l'acide hexanoïque, responsable de l'odeur 'à chaussettes sales'.",
      author: ["Bao"]
    },
    {
      souvenir: "Rencontre à Londres et notre 1ère soirée ensemble.",
      funFact: "Dans les années 1970, une étude a montré que le cannabis provoquait souvent un sourire incontrôlable chez les consommateurs, appelé 'le sourire de la weed'.",
      author: ["Léo"]
    },
    {
      author: ["Fabien"],
      souvenir: "Lorsque pour fêter le premier appartement de Max à Paris, nous avons eu une fuite d'eau à cause du lave-linge dans mon appart (il logeait chez moi), nous n'avions plus de vêtements propres alors nous sommes allés faire nos courses au Monoprix en caleçons, vêtus d'un plaid.",
      funFact: "Savais-tu que la machine à laver a été inventée en 1765 par Jacob Christian Schäffer ? 100 ans après, la première machine à laver mécanique fonctionnant à manivelle apparaît. Il faudra attendre 1930 pour découvrir la première machine à laver à moteur électrique."
    },
    {
      souvenir: "Notre méga projet d’application mobile BAM avec toto.",
      funFact: "Comment dire 'bam' dans différentes langues ? En allemand : 'bom', en arabe : 'bom', en italien : 'sbam', en coréen : 'koong', et en latin : 'tuxtax'.",
      author: ["Bao"]
    },
    {
      souvenir: "En 3A, quand on s'est fait passer pour des NAs durant l'intégration et qu'on a réussi à faire croire à un NA que nous étions aussi des nouveaux. Nous avons failli être démasqués quand il nous a demandé comment cela se faisait que l’on débarquait tous les 2 exactement le même jour après 1 semaine d’intégration. Grace à une magnifique pirouette 360° on a réussi à lui faire croire qu'on venait d'arriver car on était encore sur liste d'attente.",
      funFact: "\"Bamboozle\" est un mot qui signifie \"tromper par des méthodes sournoises\" et \"embrouiller, frustrer ou déstabiliser complètement.\" Il est devenu un terme d'argot populaire sur le subreddit /r/me_irl fin 2016 dans des publications demandant des upvotes.",
      author: ["Nicolas", "Kuhn"],
    },
    {
      author: ["Fabien"],
      souvenir: "Lorsqu'en se baladant à Paris avec Max, nous avons rencontré un poète français sur le Pont des Arts qui nous a écrit un poème basé sur les thèmes imposés par nous-mêmes.",
      funFact: "Savais-tu que dans les années 1910, le poète Guillaume Apollinaire aimait se retrouver sur les ponts de Paris, notamment le Pont des Arts, avec ses amis artistes et intellectuels, tels que Pablo Picasso et Max Jacob."
    },
    {
      author: ["Bao"],
      souvenir: "Nos discussions jusqu'à 4h du matin sur le sens de nos vies avec Nono au ski 2020 #covid.",
      funFact: "Combien de temps un être humain peut-il tenir sans dormir ? À ce jour, le record est détenu par Randy Gardner, un américain qui a passé 264 heures sans dormir dans le cadre d’un projet scientifique en 1964 alors qu’il était lycéen. Lorsqu'on lui a demandé s'il le referait, Randy a répondu par un 'non' retentissant."
    },
    {
      author: ["Florent"],
      souvenir: "Cette fameuse nuit, dans la jolie chambre partagée par les 2 frères Blassin et les 2 frères Delavous de la petite station de Châtel, à jouer au 'Grand Froid Sibérien' dans la chambre : résultat, tous malades le lendemain !",
      funFact: "Savais-tu que le record absolu de froid en Sibérie n'a pas encore été battu ? Le 26 janvier 1926, les archives font état d'une température de -67,8°C à Verkhoyansk et à Oymyakon."
    },
    {
      author: ["Bao"],
      souvenir: "Lorsqu’au ski 2022, nous avions décidé de faire une bonne petite grasse matinée après le violent DEPART 9H des autres participants, et que j’ouvrais un oeil juste pour voir si tu étais levé pour en faire de même en me disant que tu serais la personne la plus responsable et que tu surveillais l’heure. Bien sûr, on comptait un peu l’un sur l'autre, ce qui était une très mauvaise idée et on s'est finalement réveillés à 11h un peu en panique alors que les autres commençaient à s’inquiéter.",
      funFact: "Vous êtes-vous déjà demandé comment nos ancêtres ont fait pour se réveiller pendant des siècles sans cet objet indispensable qu’est le réveil ? Si la plupart se laissaient réveiller par les premiers rayons du soleil, certaines personnes étaient sorties du lit par des tapeurs de vitres !"
    },
    {
      author: ["Jean"],
      souvenir: "Au ski en première année d’école, une télécabine nous a indiqué une nouvelle manière d’exprimer un 'non' : genoux fléchis, bras tendus en avant : NON !",
      funFact: "En 1893, un ingénieur espagnol nommé Leonardo Torres Quevedo a créé l'un des premiers téléphériques à usage public, appelé *transbordador*, près de Bilbao."
    },
    {
      author: ["Bao"],
      souvenir: "Après avoir joué au 'Top 10' avec la question 'Quelle est la pire excuse pour être en retard au travail ?', quand nous avons trouvé l’idée du 'chien qui a mangé le métro' pour finir par faire un vieux montage photoshop du bouvier bernois de Dune.",
      funFact: "Extrêmement complexe et singulier, l’univers de Dune est également marqué par la présence des emblématiques vers des sables, appelés Shai-Hulud par le peuple Fremen. Denis Villeneuve a expliqué que l’élaboration du design des vers avait pris une année entière."
    },
    {
      author: ["Charlotte"],
      souvenir: "Tu resteras pour ma maman 'le beau gosse aux longs cheveux'.",
      funFact: "La chanson des Beatles *A Day in the Life* contient un sifflement extrêmement aigu que seuls les chiens peuvent entendre. Ce sifflement a été enregistré sur ce morceau par Sir Paul McCartney en hommage à son Berger Shetland."
    },
    {
      author: ["Florent"],
      souvenir: "Ce joli remix de Billie Eilish 'Bad Guy' de DJ Max lors d’un apéro à Exelmans : on aurait dû l’envoyer à son label !",
      funFact: "Savais-tu que Billie Eilish considère sa chanson 'Bad Guy' comme étant la chanson la plus stupide du monde ? Puis, en voyant la réaction du public, la chanteuse enchaîne en disant : 'Elle est aussi vraiment bien'."
    },
    {
      souvenir: "J’ai toujours trouvé l’agencement des meubles à la Tribu un peu extravagante avec le lave vaisselle dans la salle de bain. Mais d’autant plus ce jour là où j'étais en train de ranger la vaisselle tranquillement quand j’ai reçu des jets d’eau sur moi. Croyant d'abord à une blague de votre part, j’étais à 2 doigts de vous engueuler quand j'ai remarqué que c'était en fait… le chauffe-eau qui commençait à fuir !",
      funFact: "Auparavant, pour pouvoir prendre une douche avec de l’eau chaude, il faut le chauffer dans un récipient au charbon. Johann Vaillant qui est le grand créateur des technologies de chauffage avait trouvé une solution. Il a inventé les premiers chauffe-eaux en 1894. Cela permet de chauffer l’eau sans que cette dernière entre en contact avec les gaz de combustion. C’est un luxe qui, auparavant, était seulement permis à très peu de privilégiés. Ce premier chauffe-eau occupe beaucoup de place et ne convenait pas ainsi à toutes les habitations. C’est pourquoi vers 1905, Johann Vaillant a eu l’idée de créer le premier chauffe-eau mural.",
      author: ["Bao"],
    },
    {
      souvenir: "Une matinée de dingue au Tekniska Museet, meilleur musée de Suède voir du monde, un moment intense de joie, d’émerveillement et de surprises !",
      funFact: "En 1862, la Suède fut le premier pays à accorder le suffrage aux femmes (mariées), bien que seulement pour les élections municipales.",
      author: ["Thomas"],
    },
    {
      souvenir: "La soirée du Turfu dans nos deux chambres à la Meuh avec Chloé, un grand souvenir d’improvisation, de motivation et de volonté de faire la fête alors qu’absolument rien ne s’y prêtait. Je pense que même Alain était trop surpris pour nous engueuler face au caractère absolument inopiné de cette nuit endiablée !",
      funFact: "Le saviez vous ? Avec 1 250 mètres réservés aux piétons, la rue Sainte Catherine à Bordeaux est la plus longue rue piétonne de toute la France et même d’Europe. Avec plus de 200 magasins, elle est aussi l’une des plus grandes artères commerçantes du monde. Autant dire que cette rue est bondée le samedi après-midi…",
      author: ["Thomas"],
    },
    {
      souvenir: "Soirée shooting improvisé le long du Regent Canal à Camden Town pour mettre à jour ma photo de profil de Tinder. L’histoire retiendra que le succès de ces clichés ne fut pas au rendez-vous.",
      funFact: "Le nom du canal, de Regent's Park et de Regent Street renvoie à George, prince-régent (plus tard George IV 1762-1830), connu pour sa gourmandise excessive qui nuira fortement à sa santé.",
      author: ["Nicolas","Kuhn"],
    },
    {
      souvenir: "Les heures, les aprèms, les journées à jouer aux Sims 2 parce que papa Marco avait réussi à cracker tous les addons, jusqu’à la Skoda Octavia de mon père de l’époque ! Un vrai bonheur !",
      funFact: "La partie drôle, c’est que Les Sims 2 introduit la faucheuse, qui vient récupérer l’âme du Sim après sa noyade. Mais ce n’est pas tout : si le Sim avait un niveau de relation élevé avec un autre Sim, ce dernier pouvait supplier la Faucheuse de lui accorder une seconde chance.",
      author: ["Maxime", "Evrard"],
    },
    {
      souvenir: "Eté 2015, vacances prévues à Mouans Sartoux.\nNK : “Allo Max, c’est tout bon, je suis dans le TGV direction Mouans Sartoux.”\nMax : “Euh, ah ouais, comment ça ? C’est demain normalement le rendez-vous”\nNK : “Ah …”",
      funFact: "Le saviez-vous ? Selon une étude menée par Paul Frankland et Blake Richards de l’université de Toronto, la mémoire ne stocke pas toutes les informations qui nous arrivent, mais doit faire une sélection et garder uniquement ce qu'elle considère important. Alors qu’il était perçu que la mémoire stockait toutes les informations reçues sans faire de tri a priori, cette étude prouve que la mémoire est dynamique et réalise un travail de tri en amont du stockage. Les personnes têtes en l'air ou distraites seraient, ainsi, plus intelligentes car leur cerveau va au-delà des questions sans importance pour se consacrer au plus pertinentes, et ce sont celles-ci qu'il va finalement stocker.",
      author: ["Nicolas", "Kuhn"],
    },
    {
      souvenir: "En soirée chez une amie, j’étais seul au bord de la piscine, savourant le calme. Max débarque, furieux, et explose une chaise longue d’un coup de pied… qu'il regrette aussitôt.",
      funFact: "Contrairement à une idée largement répandue, la langouste se nourrit exclusivement de fruits de mer, ce qui ne l'empêche pas de rester très humaine.",
      author: ["Roland"],
    },
    {
      souvenir: "Des journées et des soirées entières à poncer Borderlands 3 avec Flo et Fab durant le premier confinement. Et le défi Takedown Maliwan avec le boss Wotan qui nous a fait galérer comme jamais.",
      funFact: "Maliwan est un fabricant d'équipements de Pandore, réputé pour sa technologie élémentale. Toutes les armes fabriquées par ce fabricant possèdent obligatoirement un ou plusieurs effets élémentaux, au détriment parfois, des autres caractéristiques. Seuls les 4 effets élémentaux incendiaire, électrique, corrosif et slag sont disponibles, jamais l'effet explosif. De manière générale aussi, les armes Maliwan possèdent une probabilité (chance) plus élevée de produire des effets élémentaux sur la durée. La vitesse des projectiles est aussi généralement plus faible que pour les armes des autres fabricants, hormis Torgue. Au niveau esthétique, les armes Maliwan affichent souvent un look « futuriste », avec des angles arrondis, des couleurs claires et vives, ainsi que des loupiotes qui clignotent un peu partout sur l'arme.",
      author: ["Nicolas", "Kuhn"]
    },
    {
      souvenir: "En soirée dans ta chambre à la Meuh, avec ton frère, on s’est mis à discuter du résultat de la somme des entiers naturels (le fameux -1/12). La discussion full troll a été plus passionnée qu’elle n’aurait dû être.",
      funFact: "La première démonstration de ce résultat vient du mathématicien indien Srinivasa Ramanujan. Il s’agit d’un cas particulier de sommation de Ramanujan, technique qu’il a développée pour donner une valeur aux séries infinies divergentes. Ces résultats et certaines démonstrations sont explicités dans les fameux “cahiers de Ramanujan”, où il note la totalité des résultats qu’il découvre à partir de 1908. Faute de papier par pauvreté matérielle, il effectue ses calculs et ses raisonnements de tête ou sur une ardoise, ne notant que les résultats définitifs sur un cahier ; il conservera cette méthode de travail toute sa vie, produisant ainsi trois cahiers contenant au total 3 900 formules et théorèmes sans pratiquement aucune démonstration ; de plus, son isolement l'amène à se construire un système de notation personnel, rendant difficilement déchiffrable son travail. Le dernier cahier dit “cahier perdu de Ramanujan” n’a été redécouvert qu’en 1976. Il ne s’agit que d’une liasse de feuillets en désordre, écrits durant la dernière année de sa vie (1919-1920), contenant plus de 600 formules. Tous les résultats présentés dans ces cahiers ont été analysés et sont désormais tous démontrés (parfois à l'aide d'outils informatiques) : très peu sont faux (le plus souvent à la suite d'erreurs de copie) et les deux tiers sont originaux. Ramanujan ne disposant pas de certaines théories inconnues ou en cours de développement au début du XXème siècle, et ignorant même des résultats fondamentaux de l’analyse complexe, les méthodes qui lui ont permis de découvrir une telle quantité de formules et de théorèmes restent obscures.",
      author: ["Thomas"]
    },
    {
      souvenir: "Les sessions saunas à poil en Suède suivi du plouf dans le lac à 5°C. Et ensuite on est KO pour le reste de la journée.",
      funFact: "Pourquoi est-on fatigué après une séance de sauna ? La chaleur peut entraîner une dilatation des vaisseaux sanguins, ce qui peut entraîner une diminution de la pression artérielle et une réduction du flux sanguin vers le cerveau. Cette réaction physiologique peut causer une sensation de somnolence et de fatigue.",
      author: ["Nicolas", "Kuhn"]
    },
    {
      souvenir: "Ce week-end plein d’intensité à la célèbre et renommée “La Palombiere” à Aspermount, on avait expérimenté des recettes quelque peu originales telles que les wraps coquillettes sauce samouraï (sisi, un vrai délice !)... et ce joli présent de Baya que nous n’avons pas enlevé avant le lendemain matin : mon nez s’en rappelle encore !",
      funFact: "Savais-tu que le nom d’Aspremont (ou Aspermount) viendrait d’ “asper” et “mons”, c’est-à-dire “montagne rude”. Il apparaît d’abord sous la forme d’Aspermun puis d’Aspermon. En 1426, le seigneur Ludovic Marquesan proposa aux habitants de déplacer le village car ils se trouvaient trop éloignés de leurs champs et dépourvus d’eau. Le 25 Mai 1426, un acte notarié signé par les 240 chefs de ménage valida le transfert et les travaux commencèrent rapidement sur le nouvel emplacement. Les anciennes maisons furent démolies et les matériaux récupérés. Le nouveau village était achevé en 1438.",
      author: ["Florent"]
    },
    {
      souvenir: "Big up à nos escapades à Fontainebleau ! (& notre motivation de trentenaire à prendre les trains de 8h30 un samedi à Gare du Nord)",
      funFact: "En 1861, Napoléon III a fait de Fontainebleau le premier site naturel protégé au monde ! Il a décrété qu'une partie de la forêt devait être préservée pour sa beauté naturelle, créant ainsi une réserve artistique pour les peintres, sculpteurs et amoureux de la nature. Cela a même précédé la création des premiers parcs nationaux en Amérique du Nord.",
      author: ["Agathe", "gagy"]
    },
    {
      souvenir: "La fois où nous avions fait soirée à Mouans Sartoux et où j’avais ramené “computor”... je crois qu’elle n’avait pas bien compris l’issu du jeu de la cuillère en bois : ça a été plus de 15 belles minutes de bonheur pour nous les spectateurs.",
      funFact: "La première cuillère en bois aurait été remise en 1884 (après la deuxième édition du Tournoi) à l'Irlande, à l'époque du Tournoi des quatre nations britanniques (sans la France). William Bolton, facétieux étudiant du XV d'Angleterre, aurait décidé ses camarades à offrir cet objet dérisoire aux joueurs du XV irlandais.",
      author: ["Florent"]
    },
    {
      souvenir: "“I'm giving you a night call to tell you how I feel (We'll go all, all, all night long) I want to drive you through the night, down the hills.”... Te rappelles-tu, mon cher Max, de cette belle session d’enregistrement du cover “Nightcall - Kavinsky” à Aspermount dans le célèbre studio de “La Palombiere” ?",
      funFact: "Savais-tu que le producteur Kavinsky avait dépensé une grande partie des bénéfices de sa chanson “Nightcall” dans l’achat de vrais Gizmo et Gremlins d’époque ? Il a aussi révélé avoir acheté des produits dérivés des “Dents de la mer” et du “Retour vers le futur”.",
      author: ["Florent"]
    },
    {
      souvenir: "L’échange avec les italiens en 4e qui a été source de fous-rires et de frayeurs. Je sais déjà que tu te rappelles de “Radio Subasio” que tu as de nouveau écouté pour ton plus grand plaisir il y a peu.",
      funFact: "Potenza Picena tire son nom de l’ancienne Potentia, une florissante colonie romaine dont les premières informations remontent à 184 av. J.-C.",
      author: ["Maxime", "Evrard"],
    },
    {
      souvenir: "A notre nouveau QG le restaurant des 5, best rendez-vous hebdo ! Hâte que Léo n'ait plus son doigt cassé pour reprendre notre routine !!!",
      funFact: "Se retrouver régulièrement avec ses amis stimule la production d'une hormone appelée ocytocine, surnommée l'hormone du bonheur ou de l'attachement. Quand on passe du temps de qualité avec des personnes qu'on apprécie, cette hormone est libérée, ce qui renforce les liens affectifs et crée un sentiment de bien-être.",
      author: ["Agathe", "gagy"]
    },
    {
      souvenir: "À ces belles sessions de limbo en plein milieu de la route de Mouans Sartoux…",
      funFact: "Savais-tu que le limbo est une sorte de danse qui consiste à passer et repasser le buste tourné vers le ciel sous un bâton horizontal, parfois enflammé, placé de plus en plus près du sol, sans jamais le toucher.",
      author: ["Florent"]
    },
    {
      souvenir: "La maxi galère quand la roue de ton vélo a crevé et que tu as touuut donné pour la réparer en vain (et que je t'ai proposé de te prêter le mien !) avant que notre doux ami Benoit arrive à la rescousse.",
      funFact: "Saviez-vous que la première pneu de vélo a été inventé par John Boyd Dunlop en 1887 pour permettre à son fils d'avoir une meilleure expérience de vélo, sans les chocs des roues en fer qui étaient alors standard ? Cela a révolutionné le monde du cyclisme et a contribué à rendre le vélo plus populaire.",
      author: ["Agathe", "gagy"]
    }
  ];
  