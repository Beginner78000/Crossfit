BEGIN;

INSERT INTO
    "category" ("id", "label")
VALUES
    (1, 'Haltérophilie'),
    (2, 'Gymnastique'),
    (3, 'Autres mouvements'),
    (4, 'WOD'),
    (5, 'BOX');
    

INSERT INTO
    "movement" (
        "id",
        "name",
        "type",
        "description",
        "visual_name",
        "movement_url",
        "category_id"
    )
VALUES
    (
        1,
        'Snatch',
        'Snatch',
        'Le snatch, ou arraché, est un mouvement d’haltérophilie qui consiste à 
        amener la barre au-dessus de la tête en partant du sol en un seul mouvement.',
        'snatch.jpg',
        'https://youtu.be/VFfEh9AqGF4',
        1
    ),
    (
        2,
        'Clean',
        'Clean',
        'Le Clean, ou épaulé, est un des deux mouvements principaux en haltérophilie olympique 
        et nécessite force, puissance, vitesse, souplesse et coordination. 
        Tous ces composants doivent fonctionner ensemble pour réussir le Clean.',
        'clean.jpg',
        'https://youtu.be/mIMfrSClasU',
        1
    ),
    (
        3,
        'Jerk',
        'Jerk',
        'Comme pour les autres mouvements en haltérophilie, le push jerk consiste à passer votre corps sous la barre. 
        Vous utiliserez la même stabilité de la ligne médiane, la même trajectoire de barre et le même élan 
        de dip que le push press, mais vous ajouterez un deuxième pliage de genoux pour soulever la barre.',
        'jerk.jpg',
        'https://youtu.be/R7zDK5TelNg',
        1
    ),
    (
        4,
        'Handstand Push up (HSPU)',
        NULL,
        'Exercice de gymnastique originaire du Crossfit, le HSPU ou Handstand Push Up cible les muscles du haut du corps 
        dont les épaules et les triceps. Le HSPU est une variante de pompes, 
        il est possible de les effectuer en strict ou en kipping.',
        'hspu.jpg',
        'https://youtu.be/0wDEO6shVjc',
        2
    ),
    (
        5,
        'Handstand Walk (HSW)',
        NULL,
        'Lorsque vous marchez en poirier, vous ne pouvez jamais avoir les deux mains uniformément plantées sur le sol. 
        Au lieu de cela, votre poids se déplace constamment sur un bras ou l autre au fur et à mesure que vous avancez.',
        'hsw.jpg',
        'https://youtu.be/N4xgzYPTt4A',
        2
    ),
    (
        6,
        'Rope Climb',
        NULL,
        'Le grimper de corde est une épreuve sportive consistant en la montée - chronométrée, ou non - 
        sur une corde suspendue par la seule force des mains. Le sportif peut être autorisé à se servir 
        des pieds en appui pour consolider sa progression en montée.',
        'rope.jpg',
        'https://youtu.be/Pa4QUC9AvuA',
        2
    ),
    (
        7,
	    'Power Snatch',
        'Snatch',
	    'Le power snatch est simplement un snatch sans un squat complet pour le recevoir. 
        Remarques: Les entraîneurs et les athlètes ont parfois des définitions différentes 
        de ce qui constitue une position de réception de « puissance ». 
        Le plus souvent, tout ce qui est reçu avec les cuisses horizontales ou plus hautes (ne pas casser la parallèle) 
        est considéré comme un power lift.',
	    'power-snatch.jpg',
	    'https://www.youtube.com/watch?v=TL8SMp7RdXQ',
	    1
    ),
    (
        8,
        'Power Clean',
        'Clean',
        'Le Power Clean est l’une des meilleures méthodes pour gagner en force 
        et en masse musculaire dans l’univers du Crossfit et d’autres programmes de salle de sport. 
        Il s’agit d’un exercice de puissance qui consiste à soulever une barreavec des poids, 
        du sol vers l’avant des épaules, avec l’aide de tout le corps.',
        'power-clean.jpg',
        'https://youtu.be/Io4QsuRnhZg',
        1
    ),
    (
        9,
        'Clean & Jerk',
        'Jerk',
        'Le Clean & Jerk est un composite de deux mouvements en haltérophilie, 
        le plus souvent exécutés avec une barre : le Clean (épaulé) et le Jerk (jeté). 
        Pendant le Clean, la personne déplace la barre du sol vers une position en rack sur les deltoïdes, 
        sans reposer complètement sur les clavicules. Pendant le Jerk, la personne soulève la barre 
        pour avoir une position stationnaire au-dessus de la tête, en terminant avec les bras et les jambes tendus, 
        et les pieds dans le même plan que le torse et la barre.',
        'clean-jerk.jpg',
        'https://youtu.be/Ygi53rJc0PA',
        1
    ),
    (
        10,
        'Toes to bar',
        NULL,
        'Le Toes-to-bar, est lorsque vous êtes dans votre partie creuse du kip 
        que vous devez tirer vos genoux vers votre poitrine et terminer par le coup de pied 
        qui les amène à la barre. Dès que vos pieds touchent la barre, 
        TIREZ-les vers le bas aussi vite que possible pour vous remettre chargé dans votre Superman 
        pour votre prochaine répétition.',
        'toes-to-bar.jpg',
        'https://youtu.be/eAACJyoAmww',
        2
    ),
    (
        11,
        'Kipping Pull-up',
        NULL,
        'Kipping est une façon de balancer votre corps pour prendre un élan, 
        permettant de créer un "swing puissant", pour pouvoir ensuite effectuer le pull up. 
        En effet, le swing va vous aider pour pousser votre menton vers le haut et au-dessus de la barre',
        'kipping-pullup.jpg',
        'https://youtu.be/EeSneM87aoE',
        2
    ),
    (
        12,
        'Deadlift',
        NULL,
        'Le soulevé de terre est un exercice polyarticulaire de force et de musculation. 
        Il consiste à saisir la barre complètement et en toute sécurité dans un surgrip 
        ou une prise alternative sous/sur la largeur de la taille. Regardant droit devant, 
        la colonne vertébrale dans une position plate puissante (pas penchée ni arrondie), 
        se concentrer, réguler la respiration, inspirer profondément et tirer de manière 
        régulière la barre vers une position militaire complète. 
        Bien garder la barre près du corps et expirer en exerçant toute la force. 
        Faire une pause pendant une seconde de contraction et plier lentement les genoux et 
        le bas du dos durant le retour à la position de départ et puis répéter.',
        'deadlift.jpg',
        'https://youtu.be/gNdZuaYZz7E',
        3
    ),
    (
        13,
        'Thruster',
        NULL,
        'Le thruster est un exercice composé et complexe qui combine un clean, 
        un front squat et un push-press(poussée épaule avec impulsion jambes).',
        'thruster.jpg',
        'https://youtu.be/N0dtRABhraY',
        3
    ),
    (
        14,
        'Double Under (DU)',
        NULL,
        'Un double under est un exercice populaire effectué avec une corde à sauter, 
        dans lequel la corde fait deux passages par saut au lieu de un seul. 
        Il est nettement plus efficace que le simple under (simple passage de corde) 
        dans la mesure où il permet une plus grande capacité de travail.',
        'du.jpg',
        'https://youtu.be/BErpXNoC7AI',
        3
    ),
    (
        15,
        'Box Jump',
        NULL,
        'Le box jump est un exercice qui utilise un régime de contraction pliométrique, 
        ça signifie, une phase avec un étirement excentrique immédiatement suivie de la phase concentrique. 
        Il permet une amélioration de sa vitesse, de sa force, de son explosivité 
        mais aussi la coordination entre les fibres musculaires',
        'box-jump.jpg',
        'https://youtu.be/hLFw24pSiog',
        3
    ),
    (
        16,
        'Lunges (fentes)',
        NULL,
        'Les fentes sont un exercice idéal pour travailler ses fessiers et dessiner ses jambes. 
        Elles sollicitent toute de la cuisse, ainsi que la partie arrière de la jambe. 
        On appel une fente, lorque la jambe avant à le genou plié et le pied à plat sur le sol 
        tandis que la jambe positionnée derrière est plié en sens inverse avec le genou qui frolle le sol.',
        'lunges.jpg',
        'https://youtu.be/ReYOTT2pO7I',
        3
    ),
    (
        17,
        'Pistol',
        NULL,
        'Le pistol squats désigne des squats effectués sur une jambe. la pratique et la maîtrise du squat pistol 
        peuvent favoriser le développement des jambes, l’équilibre, la coordination…',
        'pistol.jpg',
        'https://youtu.be/Mwjk7bgFUbA',
        3
    ),
    (
        18,
        'Wall-Ball',
        NULL,
        'Le mouvement consistant à prendre une balle lestée, à effectuer un squat 
        puis à projeter la balle vers le haut, vers une cible sur le mur. Il permet de faire travailler la force et le cardio.',
        'wall-ball.jpg',
        'https://youtu.be/bldADcMZsWU',
        3
    );

INSERT INTO
    "training" (
        "id",
        "title",
        "mobility",
        "warm_up",
        "skills",
        "workout",
        "category_id"
    )
VALUES
    (
        1,
        'WOD n°1',
        '{"Back-roll", "prayer on roller", "T-hips opener full rotation", "squat opener"}',
        '{{5, 45, 6, 4, 4}, {"sets", "secondes easy ergo", "elbow rotation", "strict press", "broad jump"}}',
        '{{5, 1, 1, 2, 3}, {"sets", "power clean", "squat clean", "front squat", "push press (load progression)"}}',
        '{{7, 5, 3, 3, 750}, {"rounds", "push press", "front squat", "box jump", "m run"}}',
        4
    ),
    (
        2,
        'WOD n°2',
        '{"Back-roll", "calf-roll", "hamstring-roll", "rollover to V-sit", "Samson stretch", "PNF shoulder ext. rot."}',
        '{{4,8,4,25}, {"sets", "kong squat prisoners", "pike push-up", "simple unders"}}',
        '{{4,1,15,2,8,5}, {"sets", "minute", "double under", "minute", "double dumbbell deadlift", "shoulder to overhead (load progression)"}}',
        '{{5,1,20,2,50,80,3,1,4,1}, {"rounds", "minute", "double DB deadlift", "minute", "DU ou", "SU", "minute", "max reps double DB shoulder to OH", "minute", "rest"}}',
        4
    ),
    (
        4,
		'WOD n°3',
		'{"Updog to downdog", "squat opener", "bottom squat full rotation"}',
		'{{5,5,5,5,5,5,5,5,5}, {"mins", "deadlifts", "elbow rotation", "strict press", "goodmornings", "backsquats", "back elbow rotations", "front squat", "hang power clean"}}',
		'{{3,10,10,10,10}, {"sets", "hang power clean", "sit-ups", "step back lunges", "sit-ups"}}',
		'{{1,18,3,7,5,3,2,16,30,20,10}, {"Part", "mins", "rounds", "hang power clean", "puis", "Part", "mins max", "hang power cleans", "sit-ups", "step back lunges", "sit-ups"}}',
		4
    );

INSERT INTO
    "box" (
        "id",
        "name",
        "email",
        "phone_number",
        "website",
        "zip_code",
        "city",
        "category_id"
    )
VALUES
    (
        1,
        'WildBear',
        'hello@wildbearcrossfit.com',
        '+33 2.56.63.17.34',
        'https://wildbearcrossfit.com/',
        '56000',
        'Vannes',
		5
    ),
    (
        2,
        'Andarta',
        'contact@crossfit-andarta.bzh',
        '+33 6.70.83.62.82',
        'https://www.crossfit-andarta.bzh/',
        '56400',
        'Auray',
		5
    ),
    (
        3,
        'Darioritum',
        NULL,
        '+33 7.70.12.81.61',
        'https://www.darioritum-crossfit-danse.fr/',
        '56000',
        'Vannes',
		5
    ),
    (
        4,
        'CrossFit Orgeval',
        'contact@crossfitorgeval.fr',
        '+33 1.85.00.80.34',
        'https://crossfitorgeval.fr/',
        '78630',
        'Orgeval',
		5
    ),
    (
        5,
        'CrossFit Factory',
        'crossfitfactory92@gmail.com',
        '+33 1.47.31.62.42',
        'http://www.crossfitfactory.fr/',
        '92800',
        'Puteaux',
		5
    ),
    (
        6,
        'Red Legion',
        'cfredlegion@gmail.com',
        '+33 6.66.85.54.01',
        'https://redlegion.fr/',
        '95280',
        'Jouy-le-Moutier',
		5
    );

COMMIT;