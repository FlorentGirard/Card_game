export const useQuestionStore = defineStore('languageStore', {
  state: () => ({
    card: [
      {
        question: "Dans quel département Jeanne d'Arc est-elle née ?",
        qcm: ['A) Paris', 'B) Le jura', 'c) La Gironde', 'D) Les Vosges'],
        answer: 'D',
        explication: '',
      },
      {
        question: " Dans quel membre du corps humain se situe l'humérus ?",
        qcm: ['A) La jambe ', 'B) Le bassin ', 'c) Le pied ', 'D) Le bras '],
        answer: 'D',
        explication: '',
      },
      {
        question:
          'Dans quel océan navigue-t-on  au large de la ville de New York ?',
        qcm: [
          'A) Océan Pacifique ',
          'B) Océan Atlantique ',
          'c) Océan Indien ',
          'D) Océan Austral ',
        ],
        answer: 'B',
        explication: '',
      },
      {
        question:
          'Quel est le 4e signe du zodiaque, lié aux personnes     nées entre le 22 juin et le 22\n' +
          ' juillet ?',
        qcm: ['A) Gémeaux ', 'B) Scorpion ', 'c) Balance ', 'D) Cancer '],
        answer: 'D',
        explication: '',
      },
      {
        question:
          'Quel est le nom du créateur du personnage de James Bond 007 ?',
        qcm: [
          'A) Ian Fleming ',
          'B) David Koepp ',
          'c) J.R.R. Tolkien ',
          'D) Jean Bruce ',
        ],
        answer: 'A',
        explication: '',
      },
      {
        question:
          'Quel est le nom de la côte située entre Dinard et Saint-Malo ?',
        qcm: [
          'A) La côte d’Emeraude ',
          'B) La côte de Rubis ',
          'c) La côte dorée ',
          'D) La côte d’Opal ',
        ],
        answer: 'A',
        explication: '',
      },
      {
        question:
          "Dans quel département d'Île-de-France se situe la ville de Melun ?",
        qcm: [
          'A) Seine-et-Marne ',
          'B) Val d’ Oise ',
          'c) Yvelines ',
          'D) Seine-Saint-Denis ',
        ],
        answer: 'A',
        explication: '',
      },
      {
        question: 'Quel était le véritable prénom de Coluche ?',
        qcm: ['A) André ', 'B) Michel ', 'c) Patrick ', 'D) Christian '],
        answer: 'B',
        explication: 'Son nom complet est Michel Colucci.',
      },
      {
        question: 'Quel grade militaire précède celui de capitaine ?',
        qcm: ['A) Amiral ', 'B) Major ', 'c) Lieutenant ', 'D) Adjudant  '],
        answer: 'C',
        explication: '',
      },
      {
        question: "Quelle femelle vêle lorsqu'elle met au monde son petit ?",
        qcm: [
          'A) La chatte ',
          'B) La vache ',
          'c) La Baleine ',
          'D) La jument ',
        ],
        answer: 'B',
        explication: "Le verbe vêler signifie  mettre bas d'un veau.",
      },
      {
        question: " Dans quel art Jean-Baptiste Pigalle s'est-il illustré ?",
        qcm: [
          'A) La chanson ',
          'B) La musique ',
          'c) La sculpture ',
          'D) La peinture ',
        ],
        answer: 'D',
        explication:
          "Jean-Baptiste Pigalle (1714-1785) Possède une renommée telle qu'il reçoit des commandes des plus hauts personnages, même le Roi. ",
      },
      {
        question:
          " Dans quel club espagnol l'ancien Lyonnais Karim Benzema a-t-il été transféré en 2009 ?",
        qcm: [
          'A) Atlético de Madrid ',
          'B) Real sociedad ',
          'c) Valence Cf ',
          'D) Real Madrid ',
        ],
        answer: 'D',
        explication: '',
      },
      {
        question:
          " Selon l'expression, que dit-on  quand on change de sujet sans transition, “on passe du coq à ___” ?",
        qcm: ['A) La poule  ', 'B) L’œuf ', 'c) L’âne  ', 'D) L’orange '],
        answer: 'C',
        explication: '',
      },
      {
        question: 'De quoi parle un Espagnol lorsqu’il évoque le mot “gato” ',
        qcm: [
          'A) Un enfant ',
          'B) Un bonbon ',
          'c) Un chat ',
          'D) Une voiture ',
        ],
        answer: 'C',
        explication:
          'Le mot “gato” veut dire chat et le mot “perro” signifie chien',
      },
      {
        question: 'De quel pays est originaire la danse nommée la salsa ?',
        qcm: ['A) Brésil ', 'B) Mexique ', 'c) Cuba ', 'D) Canada '],
        answer: 'C',
        explication:
          "Les racines de la salsa viennent de l'île de Cuba et remontent aux ancêtres venus d'Afrique envoyés dans les Caraïbes par les Espagnols en esclavage.",
      },
      {
        question: 'Combien de voyelles au total compte notre alphabet ?',
        qcm: ['A) 5 ', 'B) 6 ', 'c) 7 ', 'D) 8 '],
        answer: 'B',
        explication:
          'Les lettres qui sont des  voyelles sont : A, E, I, O, U et le Y.',
      },
      {
        question: 'À quel sport le BMX est-il associé ?',
        qcm: [
          'A) Le surf  ',
          'B) Le skate-board ',
          'c) Le vélo ',
          'D) Le patinage artistique ',
        ],
        answer: 'C',
        explication: '',
      },
      {
        question:
          'Dans quel pays se déroule la toute première Coupe du Monde de football en 1930 ?',
        qcm: ['A) Uruguay ', 'B) Mexique ', 'c) États-Unis ', 'D) France '],
        answer: 'A',
        explication:
          'Pour la première,seule 13 pays acceptent de participer sur les 16 places disponibles.',
      },
      {
        question:
          'Quel pays remporte la toute première Coupe du Monde de foot de l’histoire ?',
        qcm: ['A) Argentine ', 'B) Brésil ', 'c) Uruguay ', 'D) États-Unis '],
        answer: 'C',
        explication:
          'Le pays remporte la compétition à domicile face à l’Argentine 4 à 2..',
      },
      {
        question:
          'Qui est le créateur de la Coupe du Monde et ancien président de la FIFA ?',
        qcm: [
          'A) Jules Rimet ',
          'B) Robert Guérin ',
          'c) Stepp Blatter ',
          'D) Stanley Rous ',
        ],
        answer: 'A',
        explication:
          "Sous l'impulsion du président de la FIFA, Jules Rimet, la décision d’organiser de la Coupe du Monde est actée le 28 mai 1928.",
      },
      {
        question:
          ' Combien de fois le Brésil a-t-il remporté la Coupe du Monde de foot au total ?',
        qcm: ['A) 3 fois ', 'B) 4 fois ', 'c) 5 fois ', 'D) 6 fois '],
        answer: 'C',
        explication:
          'Les victoires du Brésil  remontent à 1958, 1962, 1970, 1994 et 2002.',
      },
      {
        question:
          'Lequel de ces pays n’a jamais remporté la Coupe du  Monde de football ?',
        qcm: ['A) Espagne ', 'B) Croatie ', 'c) Angleterre ', 'D) Italie '],
        answer: 'B',
        explication: '',
      },
      {
        question:
          ' Combien de fois la France n’a-t-elle pas été qualifiée pour la phase finale de la Coupe du Monde de foot masculin ?',
        qcm: [
          'A) (la France a toujours été en phase finale) ',
          'B) 3 fois',
          'c) 6 fois',
          'D) 9 fois',
        ],
        answer: 'C',
        explication:
          "La France n'a pas participé à la phase finale de la Coupe du monde pour les éditions 1950, 1962, 1970, 1974, 1990 et 1994.",
      },
      {
        question:
          'Combien pèse le trophée de la Coupe du Monde de football utilisé depuis 1974 ?',
        qcm: [
          'A) Jules Rimet ',
          'B) Robert Guérin ',
          'c) Stepp Blatter ',
          'D) Stanley Rous ',
        ],
        answer: 'A',
        explication:
          "Sous l'impulsion du président de la FIFA, Jules Rimet, la décision d’organiser de la Coupe du Monde est actée le 28 mai 1928.",
      },
      {
        question:
          ' L’équipe vainqueur de la Coupe du Monde n’a accès  au vrai trophée que 15 minutes. Vrai ou faux ?',
        qcm: ['A) Vrai ', 'B) Faux '],
        answer: 'A',
        explication:
          " Depuis 1998, le règlement de la FIFA détermine que le trophée de la Coupe du monde, ne peut pas être remis définitivement au vainqueur. Le protocole ne laisse l’original aux joueurs qu'un quart d'heure après la fin du match.",
      },
      {
        question:
          ' Quel joueur de foot détient le record de but en Coupe du Monde ?',
        qcm: [
          'A) Gerd Muller ',
          'B) Ronaldo ',
          'c) Pelé ',
          'D) Miroslav Klose ',
        ],
        answer: 'D',
        explication: 'Miroslav Klose a marqué un total de 16 buts.',
      },
      {
        question:
          ' Lequel de ces pays n’a pas organisé au moins une Coupe  du Monde de football ?',
        qcm: ['A)  Japon ', 'B) Allemagne ', 'c) Suisse ', 'D) Portugal '],
        answer: 'D',
        explication: '',
      },
      {
        question:
          'Quelle est la première fable écrite par Jean de la Fontaine ?',
        qcm: [
          'A) La cigale et la Fourni ',
          'B) Le loup et l’Agneau ',
          'c) Le Corbeau et le Renard ',
          'D) Le Lièvre et la Tortue ',
        ],
        answer: 'A',
        explication:
          'Jean de la Fontaine a  achevé La Cigale et la Fourmi en 1668.',
      },
      {
        question:
          'Quel animal Jean de La Fontaine utilise-t-il le plus souvent dans ses fables ?',
        qcm: [
          'A) Le renard ',
          'B) Le loup  ',
          'c) La grenouille ',
          'D) L’agneau ',
        ],
        answer: 'B',
        explication:
          'Toutes fables confondues, La Fontaine cite le loup 26 fois.',
      },
      {
        question:
          'Quelle fable de La Fontaine possède la phrase "On a souvent besoin d\'un plus petit que soi" ?',
        qcm: [
          'A) Le chêne dans le chêne et le Roseau ',
          'B) Le cerf dans le cerf est la vigne ',
          'c) Le corbeau dans le corbeau et le renard ',
          'D) Le Lièvre dans le lièvre et les grenouilles ',
        ],
        answer: 'C',
        explication: '',
      },

      {
        question:
          ' Dans quelle fable de La Fontaine trouve-t-on la citation : "Se trouva fort dépourvue. Quand la bise fut venue." ?',
        qcm: [
          'A) Le corbeau et le Renard ',
          'B) La cigale et la Fourmi ',
          'c) Le loup et l’Agneau ',
          'D) L’ivrogne et sa feamme ',
        ],
        answer: 'B',
        explication: '',
      },

      {
        question:
          ' De quelle fable de La Fontaine est tirée cette morale : “Tel est pris qui croyait prendre” ?',
        qcm: [
          'A) Le rat des villes et le Rat   des champs ',
          'B) Le rat et l’éléphant ',
          'c) Le rat qui s’est retiré du     monde ',
          'D) Le rat et l’huitre ',
        ],
        answer: 'D',
        explication: '',
      },

      {
        question: ' Laquelle de ces plantes est aquatique ?',
        qcm: [
          'A) Le jasmin d’hiver ',
          'B) L’ hibiscus ',
          'c) Le pivoine ',
          'D) Le lotus ',
        ],
        answer: 'D',
        explication:
          'Le lotus est une plante aquatique de la famille des Nélumbonacées qui est la fleur nationale du Viet-Nam mais aussi de l’Inde.',
      },

      {
        question:
          ' Quel est le nom de  l’organisation politique du régime de Vichy pour lutter contre La Résistance jugée comme terroriste ?',
        qcm: ['A) La Gestapo ', 'B) Les SS ', 'c) La Milice ', 'D)  Le KGB '],
        answer: 'C',
        explication: '',
      },

      {
        question:
          ' Quel est le nom de la première entité de résistance fondée par Jean Moulin en janvier 1943 ?',
        qcm: ['A) LE MUR ', 'B) Le COR ', 'c) Le SAS ', 'D) Le JAG '],
        answer: 'A',
        explication:
          'MUR pour Mouvements Unis de Résistance. Cette entité voit se rassembler les trois grands mouvements non communistes de la zone sud : "Combat", d\'Henri Frenay, "Franc-Tireur", de Jean-Pierre Levy et "Libération-Sud" d\'Emmanuel d\'Astier de la Vigerie',
      },

      {
        question:
          'Quelle est la conséquence de la mise en place du STO par le régime de Vichy en 1943 ?',
        qcm: [
          'A) Le généralle de Gaulle ',
          'B) Lucie Aubrac ',
          'c) Jean Moulin ',
          'D) Pierre Brossolette ',
        ],
        answer: 'C',
        explication:
          "Jean Moulin poursuit sa mission d'unification de la Résistance avec la fondation du Conseil national de la Résistance (CNR). Présidé par Jean  Moulin lui-même, le CNR tente de coordonner les différentes actions de la Résistance française.",
      },
      {
        question: ' De quoi a peur une personne "hydrophobe"?',
        qcm: ['A) L’eau ', 'B)L‘électricité ', 'c) Le vent ', 'D) L’orage '],
        answer: 'A',
        explication: '',
      },
      {
        question:
          ' Si vous êtes abonné à un mensuel et à un semestriel, combien de magazines recevez-vous chaque année ?',
        qcm: ['A) 10 ', 'B) 14 ', 'c) 18 ', 'D) 24 '],
        answer: 'B',
        explication:
          'Un mensuel est expédié tous les mois (12 par an) alors qu’un semestriel est expédié  tous les 6 mois (2 par an).',
      },
      {
        question: ' Combien de voyelles au total compte notre alphabet ?',
        qcm: ['A) 5 ', 'B) 6 ', 'c) 7 ', 'D) 8 '],
        answer: 'B',
        explication:
          'Les lettres qui sont des voyelles sont : A, E, I, O, U et le Y..',
      },
      {
        question:
          'À quoi correspond l’opération Barbarossa lancée par l’Allemagne  en 1941 ?',
        qcm: [
          'A) Bombarder l’Angleterre ',
          'B) Envahir l’Union soviétique ',
          'c) L’utilisation des chambres à gaz ',
          'D) Torpiller les sous-marins anglais ',
        ],
        answer: 'B',
        explication:
          "Cette opération marque le début des grands affrontements terrestres en Europe sur le front de l'Est. Hitler considérait les Slaves comme des sous-hommes et le communisme comme un ennemi.",
      },
      {
        question:
          ' Quel débarquement français s’est soldé par un échec en 1942 ?',
        qcm: [
          'A) Le débarquement de Dieppe ',
          'B) Le débarquement de Saint-Malo ',
          'c) Le débarquement de Ganville ',
          'D) Le débarquement de Calais ',
        ],
        answer: 'A',
        explication:
          'Les Allemands qui ont repéré la flotte, mitraillent et bombardent les plages sans répit. 4 000 hommes seront tués, blessés ou faits prisonniers.',
      },
      {
        question: 'Laquelle de ces divinités n’est pas grecque ?',
        qcm: ['A) Thalassa ', 'B) Hypnos ', 'c) Horus ', 'D) Tartare '],
        answer: 'C',
        explication:
          "Horus est un dieu égyptien. Il est le fils d'Isis et d'Osiris, grand dieu du ciel. Il est représenté avec une tête de faucon portant une double couronne.",
      },
      {
        question:
          'Laquelle de ces tâches ne fait partie des Douze Travaux d’Hercules ?',
        qcm: [
          'A) Dompter le taureau crétois de Minos ',
          'B) Tuer le sphinx géant d’Alexandrie ',
          'c) Rapporter les pommes d’or du jardin des Hespéridess ',
          'D) Nettoyer les écuries d’Augias ',
        ],
        answer: 'B',
        explication: '',
      },
      {
        question: ' À quel dieu est dédié le sanctuaire de Delphes ?',
        qcm: ['A) Apollon ', 'B) Anthéna ', 'c) Zeus ', 'D) Dionysos '],
        answer: 'A',
        explication: '',
      },
      {
        question:
          " Dans quelle ville le régime de Vichy s’est-il installé initialement avant d'aller à Vichy ?",
        qcm: ['A) Tule ', 'B) Marseille ', 'c) Paris ', 'D)  Bordeaux '],
        answer: 'D',
        explication:
          'Puis le gouvernement ira à Clermont-Ferrand et enfin à Vichy.',
      },
      {
        question:
          'Combien d’années le gouvernement de Vichy est-il resté en place ?',
        qcm: ['A) 1 an  ', 'B) 2 ans ', 'c) 3 ans  ', 'D) 4 ans '],
        answer: 'D',
        explication: 'Le gouvernement de Vichy va exister de 1940 à 1944..',
      },
      {
        question:
          'Qui est le commandant de “l’Opération Catapult” dont le but   est de détruire la flotte française  en 1940 ?',
        qcm: [
          'A) Adolf Galland ',
          'B) Winston Churchill ',
          'c) Klaus Barbie ',
          'D) Jean-Baptiste Piron ',
        ],
        answer: 'B',
        explication:
          "La défaite française et la signature de l'armistice inquiètent les Anglais, ils craignent que la flotte française passe sous contrôle allemand. Il est donc décidé de s'emparer ou de couler la flotte française.",
      },
      {
        question: 'Le mont Olympe existe réellement. Vrai ou faux ?',
        qcm: ['A) Vrai ', 'B) Faux '],
        answer: 'A',
        explication:
          "Le Mont Olympe existe réellement. Il fait partie des 24 parcs nationaux de Grèce et culmine à 2917 mètres d'altitude au Nord du pays..",
      },
      {
        question: 'Lequel de ces dieux ne siège pas au  mont Olympe ?',
        qcm: ['A) Héphaistos ', 'B) Hadès ', 'c) Héra ', 'D) Hermès '],
        answer: 'B',
        explication:
          'Hadès est le roi du monde souterrain et des morts et dieu de la richesse cachée de la terre. Il ne siège pas au mont Olympe mais sous terre.',
      },
      {
        question:
          " Qui est déesse de l'intelligence, de l'habileté et de la stratégie guerrière ?",
        qcm: ['A) Aphrodite ', 'B) Hestia ', 'c) Héra ', 'D) Athéna '],
        answer: 'D',
        explication: '',
      },
      {
        question: 'Que renferme le labyrinthe conçu par Dédale ?',
        qcm: [
          'A) Le centaure ',
          'B) Le Minotaure ',
          'c) La Gorgone ',
          'D) Le Sphinx ',
        ],
        answer: 'B',
        explication:
          "Le Labyrinthe est un palais de la mythologie grecque construit, en Crète, par Dédale pour y enfermer le Minotaure sur ordre de Minos. Il était impossible à quiconque enfermé d'en sortir, tant les couloirs étaient enchevêtrés.",
      },
      {
        question: 'À quel dieu est dédié le Parthénon à Athènes ?',
        qcm: ['A) Zeus ', 'B) Apollon ', 'c) Artémis ', 'D) Arthéna '],
        answer: 'D',
        explication:
          "C'était le grand temple consacré à la déesse Athéna, protectrice de la cité d'Athènes et déesse de la guerre et de la sagesse.",
      },
      {
        question: 'Qui sont les 2 dieux jumeaux de la mythologie grecque ?',
        qcm: [
          'A) Apollon et Artémis ',
          'B) Zeus et Hadès ',
          'c) Poséidon et Aphrodite ',
          'D) Déméter et Dionysos ',
        ],
        answer: 'A',
        explication: 'Ils sont tous les 2 fils et fille de Zeus',
      },
      {
        question:
          " Combien d'hommes sont morts, ont été blessés ou ont disparus au soir du D-DAY ?",
        qcm: ['A) 2500 ', 'B) 4700 ', 'c) 7100 ', 'D) 10600 '],
        answer: 'D',
        explication: '',
      },
      {
        question:
          " Quel surnom prend la plage d'Omaha Beach à la suite des  terribles assauts du Débarquement de 1944 ?",
        qcm: [
          'A) The Big Dead One ',
          'B) The Big Easy One ',
          'c) The Big Red One ',
          'D) The Big Lost One ',
        ],
        answer: 'C',
        explication: '',
      },
      {
        question:
          'Quelle mésaventure est arrivée au parachutiste américain John Steele lors du  Débarquement ?',
        qcm: [
          'A) Il est resté accroché au clocher d’une église ',
          'B) Il est tombé dan un puit ',
          'c) Il est arrivé en plein bataillon allemand ',
          'D) Il a été le premier soldat tué du Débarquement',
        ],
        answer: 'A',
        explication: '',
      },
      {
        question:
          ' Combien de temps a duré la bataille de Normandie qui a suivi le D-Day ?',
        qcm: [
          'A) Environ 20 jours ',
          'B)  Environ 50 jours ',
          'c) Environ 70 jours ',
          'D) Environ 100 jours ',
        ],
        answer: 'D',
        explication: '',
      },
      {
        question: 'Qui est le roi des dieux dans la mythologie grecque ?',
        qcm: ['A) Poséidon ', 'B) Apollon ', 'c) Hadès ', 'D) Zeus '],
        answer: 'D',
        explication:
          'Zeus est le dieu du ciel, du climat, du tonnerre et des éclairs et de la foudre. Il est le fils des Titans Cronos et Rhéa.',
      },
      {
        question: ' Où vivent les dieux grecs?',
        qcm: [
          'A) Sur le mont Parnasse ',
          'B) Sur le mont Olympe ',
          'c) Sur le mont panthénion ',
          'D) Sur le mont Ainos ',
        ],
        answer: 'B',
        explication: '',
      },
      {
        question: " Quel pays se trouve à la pointe nord de l'Afrique ?",
        qcm: ['A) Maroc ', 'B) Tunisie  ', 'c) Egypte ', 'D) Soudan '],
        answer: 'B',
        explication:
          " Cap Angela est le point le plus au nord de l'Afrique, il est situé en Tunisie.",
      },
      {
        question: ' Quel est le plus ancien pont de Paris ?',
        qcm: [
          'A) Pont-Neuf ',
          'B) Pont Alexandre-III ',
          'c) Pont de Bir-Hakeim ',
          'D) Pont de la concorde ',
        ],
        answer: 'A',
        explication:
          "Construit à la fin du XVIe siècle et terminé au début du XVIIe, il doit son nom à la nouveauté que constituait à l'époque un pont dénué d'habitations.",
      },
      {
        question:
          ' Quel pays ne faisait pas partie de la coalition alliée de  la Seconde Guerre  Mondiale ?',
        qcm: [
          'A) Le Canada ',
          'B) La Norvège ',
          'c) La Suède ',
          'D) La Nouvelle-zélande ',
        ],
        answer: 'C',
        explication: '',
      },
      {
        question:
          'Quelle pointe fortifiée par les  allemands était un lieu stratégique à prendre pour la  réussite du Débarquement ?',
        qcm: [
          'A) La pointe du Raz ',
          'B) La pointe du Grouin  ',
          'c) La pointe du Diable ',
          'D) La pointe du Hoc ',
        ],
        answer: 'D',
        explication:
          "La pointe du Hoc fut le théâtre d'une des opérations du débarquement allié en Normandie le 6 juin 1944. Située entre les plages d'Utah Beach et d'Omaha Beach. De lourdes pertes américaines ont été nécéssaires pour prendre le contrôle de ce lieux..",
      },
      {
        question:
          ' Quel nom portaient les 2 ports artificiels créés par les alliés suite au débarquement de Normandie ?',
        qcm: ['A) Mulberry ', 'B) Cooper ', 'c) Maple ', 'D) Ramsay '],
        answer: 'A',
        explication:
          'Les ports de pêche de la région étaient trop petits, il a fallu créer des ponts pour effectuer le ravitaillement des troupes. Ils se nomment Mulberry A (Americain) et Mulberry B (British).',
      },
      {
        question:
          ' Pour tromper les Allemands,les Alliés ont largué des faux parachutistes. Vrai ou faux ?',
        qcm: ['A) Vrai ', 'B) Faux '],
        answer: 'A',
        explication: '',
      },
      {
        question:
          "Avec quelle unique autre ville  d'Europe Paris est-elle jumelée ?",
        qcm: ['A)  Berlin ', 'B) Porto ', 'c) Manchester ', 'D) Rome '],
        answer: 'D',
        explication: '',
      },
      {
        question:
          ' Quelle est la longueur approximative totale des égouts de Paris ?',
        qcm: ['A) 650 Km ', 'B) 1800 Km ', 'c) 2600 Km ', 'D) 3700 Km '],
        answer: 'C',
        explication: '',
      },
      {
        question:
          " Quelle rivière, aujourd'hui entièrement souterraine,traverse Paris ?",
        qcm: ['A) Essonne ', 'B) Yonne  ', 'c) Bièvre ', 'D) Lézarde '],
        answer: 'C',
        explication:
          'La Bièvre est une rivière  qui prend source à Guyancourt et qui se jette dans le collecteur principal des égouts de Paris.',
      },
      {
        question: 'Quelle est la date du Débarquement de Normandie ?',
        qcm: [
          'A) Nuit du 2 au 3 juin 1944 ',
          'B) Nuit du 3 au 4 juin 1944 ',
          'c) Nuit 4 au 5 juin 1944 ',
          'D) Nuit du 5 au 6 juin 1944 ',
        ],
        answer: 'D',
        explication: '',
      },
      {
        question: 'Quel était le nom de code de la bataille de Normandie ?',
        qcm: [
          'A) Opération Overing ',
          'B) Opération Overlord ',
          'c) Opération Overhead ',
          'D) Opération Gameover ',
        ],
        answer: 'B',
        explication: '',
      },
      {
        question:
          " Quel était le nom de code de l'opération d'assault du Débarquement ?",
        qcm: [
          'A) Opération Pluton ',
          'B) Opération Mars ',
          'c) Opération Venus ',
          'D) Opération Neptune ',
        ],
        answer: 'D',
        explication: '',
      },
      {
        question:
          " En combien d'arrondissements municipaux la ville de Paris est-elle divisée ?",
        qcm: [
          'A) La cité des Anges ',
          'B) La nouvelle Rome ',
          'c) La ville Lumière ',
          'D) Le paradis des souris ',
        ],
        answer: 'C',
        explication: '',
      },
      {
        question:
          ' Lequel de ces surnoms est souvent donné à la ville de Paris ?',
        qcm: ['A) 16 ', 'B) 18 ', 'c) 20 ', 'D) 22 '],
        answer: 'C',
        explication: '',
      },
      {
        question:
          ' Quel aéroport francilien est situé à 10 km au sud de Paris  ?',
        qcm: [
          'A) Mérignac ',
          'B) Orly ',
          'c) Aéroport Charles-de-Gaulle ',
          'D) Beauvais ',
        ],
        answer: 'B',
        explication: '',
      },
      {
        question:
          'Dans quel quartier est situé le point culminant de la capitale française ?',
        qcm: ['A) Montmartre ', 'B) Opéra ', 'c)  Le Marais ', 'D) Vaugirard '],
        answer: 'A',
        explication:
          "Pour accéder au sommet de la butte Montmartre, il est possible d’utiliser le funiculaire ou bien alors l'escalier de la rue Foyatier, avec ses 222 marches.",
      },
      {
        question:
          'Quelle est la plus large des avenues de la voirie parisienne ?',
        qcm: [
          'A) Avenue Matignon ',
          'B) Avenue de Neuilly ',
          'c) Avenue des champs Elysées ',
          'D) Avenue Foch ',
        ],
        answer: 'D',
        explication:
          "L'Avenue Foch, dans le XVIe arrondissement de Paris, est large de 120 m.",
      },
      {
        question: ' Quel est le plus ancien hôpital de la capitale française ?',
        qcm: [
          'A) Hôtel-Dieu ',
          'B) Hôpital Alphonse Gardie ',
          'c) Hôpital Raymond Sans ',
          'D) Hôpital de la Pitié ',
        ],
        answer: 'A',
        explication: '',
      },
      {
        question:
          ' Combien de plages normandes furent assaillies pendant le Débarquement de  44 ?',
        qcm: ['A) 1 ', 'B) 3 ', 'c) 5 ', 'D) 7 '],
        answer: 'C',
        explication: '',
      },
      {
        question:
          'Qui était en charge du commandement en chef des opérations du Débarquement de Normandie ?',
        qcm: [
          'A) Le général Eisenhower ',
          'B) Le général Patton ',
          'c) Le général Montgomery ',
          'D) Le général de Gaulle ',
        ],
        answer: 'A',
        explication: '',
      },
      {
        question:
          " Combien d'hommes comptaient les troupes alliées lors du Débarquement  ?",
        qcm: ['A) 51 000 ', 'B) 157 000 ', 'c) 258 000 ', 'D) 490 000 '],
        answer: 'B',
        explication: '',
      },
      {
        question:
          ' Quelle a été la première ville  a avoir été libérée au lendemain du 6 juin 1944 ?',
        qcm: ['A) Granville ', 'B) Bayeux ', 'c) Cherbourg ', 'D) Caen '],
        answer: 'B',
        explication: '',
      },
      {
        question:
          " Les soldats français n'ont pas participé au D-Day. Vrai ou faux ?",
        qcm: ['A) Vrai ', 'B) Faux '],
        answer: 'B',
        explication:
          'Plus de 3000 soldats français (paras, commandos, marins et aviateurs) ont participé au débarquement.',
      },
      {
        question:
          'Combien de navires au total constituent la flotte Alliées du  Débarquement ?',
        qcm: [
          'A) 2390 navires ',
          'B) 4205 navires ',
          'c) 5535 navires ',
          'D) 6939 navires ',
        ],
        answer: 'D',
        explication: '',
      },
      {
        question: " Combien d'étoiles comporte le drapeau américain en  2020 ?",
        qcm: ['A) 48 ', 'B) 49 ', 'c) 50 ', 'D) 51 '],
        answer: 'C',
        explication:
          'Les étoiles sont au nombre de 50, une pour chaque État fédéré des États-Unis. Cela veut dire que  le drapeau américain a été régulièrement  modifié depuis 1777.',
      },
      {
        question:
          'Quel personnage célèbre est le plus utilisé comme nom de rues en France ?',
        qcm: [
          'A) Charles de Gaulle ',
          'B) Général Leclerc  ',
          'c) Jules Ferry ',
          'D) Victor Hugo ',
        ],
        answer: 'A',
        explication:
          "En 2016, on recensait plus de 3 900 rues du nom de l'ancien président français dans toute la France,devant Louis Pasteur et Victor Hugo.",
      },
      {
        question: ' Que tient la Statue de la Liberté dans sa main droite ?',
        qcm: [
          'A) Un livre ',
          'B) Une épée ',
          'c) Un flambeau ',
          'D) Rien du tout ',
        ],
        answer: 'C',
        explication:
          "La statue tient dans sa main gauche une tablette, qu'elle garde près de son corps, alors que sa main droite brandit une torche enflammée,maintenue en hauteur.",
      },
      {
        question: ' Quel aliment doit-on chauffer pour obtenir du caramel ?',
        qcm: [
          'A) Du Chocolat ',
          'B) Du coca-cola ',
          'c) Du sucre ',
          'D) De la levure ',
        ],
        answer: 'C',
        explication: '',
      },
      {
        question:
          ' Quel président des États-Unis a été assassiné à Dallas,en 1963 ?',
        qcm: [
          'A) John Fitzgerald kennedy ',
          'B) Richard Nixon ',
          'c) Jimmy carter ',
          'D) Dwight D.Eisenhower ',
        ],
        answer: 'A',
        explication:
          ' Il est décédé d’un coup de feu tiré par Lee Harvey Oswald.',
      },
      {
        question: ' Que célèbre t-on après 50 ans  de mariage ?',
        qcm: [
          'A)  Les noces de diamant ',
          'B) Les noces de platines ',
          'c) Les noces d’or ',
          'D)  Les noces de rubis ',
        ],
        answer: 'C',
        explication: '',
      },
      {
        question:
          'De quelle fable de La Fontaine est tirée cette morale : Patience et longueur de temps font plus que force ni que rage ?',
        qcm: [
          'A) Le lion et le Rat ',
          'B) La Grenouille qui veut se faire aussi grosse que le boeuf ',
          'c) Le lion, le loup et le Renard ',
          'D) Le signe et le chat ',
        ],
        answer: 'A',
        explication: '',
      },
      {
        question: ' Combien de fables La Fontaine a-t-il écrit ?',
        qcm: ['A) 48 ', 'B) 119 ', 'c) 243 ', 'D) 384 '],
        answer: 'C',
        explication: '',
      },
      {
        question:
          ' Quel fromage a inspiré la fable de Jean de la Fontaine "Le Corbeau et le Renard"?',
        qcm: [
          'A) Un brie ',
          'B) Un comté ',
          'c) Un munster ',
          'D) Un reblochon ',
        ],
        answer: 'A',
        explication:
          "Il s'agit précisément d'un brie de Melun. La Fontaine connaissait ce fromage, car il fréquentait les parages du Melun. Ce fromage existait déjà au XVIIᵉ siècle.",
      },
      {
        question:
          " Laquelle de ces fables n'est pas écrite par Jean de La Fontaine ?",
        qcm: [
          'A) Le Renard et la Cigogne ',
          'B) Le rat des villes et le rats des champs ',
          'c) Le loup et les sept chevreaux ',
          'D)  L’hirondelle et les petits oiseaux ',
        ],
        answer: 'C',
        explication:
          'Le Loup et les sept chevreaux est une fable écrite par les frères Grimm.',
      },
      {
        question:
          'Complétez le titre de cette fable de La Fontaine : "Le Chêne et ... "',
        qcm: [
          'A) ...le Buisson ',
          'B) ...le Roseau ',
          'c)  ...les Glands ',
          'D) ...le Rosier ',
        ],
        answer: 'B',
        explication:
          "Le chêne symbolise l'orgueil démesuré, faisant face au Roseau, symbole d'une sagesse prudente, faisant de son adaptabilité sa force. Le vent apparaît comme un troisième personnage, crucial parce qu'il arbitre le conflit entre les deux végétaux.",
      },
      {
        question:
          'Comment s’appelle la laitière dans la fable : “La Laitière et le  pot au lait” ?',
        qcm: ['A) Perette ', 'B) Pierette ', 'c) Perine ', 'D) Pernette '],
        answer: 'A',
        explication: '',
      },
      {
        question: 'Combien fait (10+5*2)-6 ?',
        qcm: ['A) 24 ', 'B) -60 ', 'c) 36 ', 'D) 14 '],
        answer: 'D',
        explication:
          "Il faut commencer par la multiplication et s'occuper ensuite des additions et soustractions, les parenthèses ici ne changent pas résultat.",
      },
      {
        question:
          'Contre quelle équipe, la France gagne-t-elle la coupe du monde de football 1998 ?',
        qcm: ['A) Italie ', 'B) Brésil ', 'c) Angleterre ', 'D) Allemagne '],
        answer: 'B',
        explication: 'Cette finale est remportée 3 à 0 contre le Brésil.',
      },
      {
        question: 'De quelle couleur est la robe de Marge Simpson ?',
        qcm: ['A) Rouge ', 'B) Bleue ', 'c) Verte ', 'D) Jaune '],
        answer: 'C',
        explication: 'Marge porte une robe verte et une chevelure bleue.',
      },
      {
        question: 'À quel navigateur doit-on la découverte du Canada ?',
        qcm: [
          'A) Jacques Cartier ',
          'B) Jean-François de Lapérouse ',
          'c) Samuel de champlain ',
          'D) Charles-Marie de la Condamine ',
        ],
        answer: 'A',
        explication:
          'De 1534 à 1542, Jacques Cartier traverse trois fois l’Atlantique, revendiquant des terres pour le roi de France, François Ier.',
      },
      /* {
        question: '',
        qcm: ['A) ', 'B) ', 'c) ', 'D) '],
        answer: '',
        explication: '',
      }, */
    ],
  }),
})
