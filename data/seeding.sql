BEGIN;

INSERT INTO
    "category" ("id", "label")
VALUES
    (1, 'Haltérophilie'),
    (2, 'Gymnastique');

INSERT INTO
    "movement" (
        "id",
        "name",
        "description",
        "visual_name",
        "movement_url",
        "category_id"
    )
VALUES
    (
        1,
        'Snatch',
        'Le snatch, ou arraché, est un mouvement d’haltérophilie qui consiste à amener la barre au-dessus de la tête en partant du sol en un seul mouvement.',
        'snatch.jpg',
        'https://www.youtube.com/watch?v=TL8SMp7RdXQ',
        1
    ),
    (
        2,
        'Clean',
        'Le Clean, ou épaulé, est un des deux mouvements principaux en haltérophilie olympique et nécessite force, puissance, vitesse, souplesse et coordination. Tous ces composants doivent fonctionner ensemble pour réussir le Clean.',
        'clean.jpg',
        'https://youtu.be/mIMfrSClasU',
        1
    ),
    (
        3,
        'Jerk',
        'Comme pour les autres mouvements en haltérophilie, le push jerk consiste à passer votre corps sous la barre. Vous utiliserez la même stabilité de la ligne médiane, la même trajectoire de barre et le même élan de dip que le push press, mais vous ajouterez un deuxième pliage de genoux pour soulever la barre.',
        'jerk.jpg',
        'https://youtu.be/R7zDK5TelNg',
        1
    ),
    (
        4,
        'HSPU',
        'Exercice de gymnastique originaire du Crossfit, le HSPU ou Handstand Push Up cible les muscles du haut du corps dont les épaules et les triceps. Le HSPU est une variante de pompes, il est possible de les effectuer en strict ou en kipping.',
        'hspu.jpg',
        'https://youtu.be/0wDEO6shVjc',
        2
    ),
    (
        5,
        'HSW',
        'Lorsque vous marchez en poirier, vous ne pouvez jamais avoir les deux mains uniformément plantées sur le sol. Au lieu de cela, votre poids se déplace constamment sur un bras ou l autre au fur et à mesure que vous avancez.',
        'hsw.jpg',
        'https://youtu.be/N4xgzYPTt4A',
        2
    ),
    (
        6,
        'Rope Climb',
        'Le grimper de corde est une épreuve sportive consistant en la montée - chronométrée, ou non - sur une corde suspendue par la seule force des mains. Le sportif peut être autorisé à se servir des pieds en appui pour consolider sa progression en montée.',
        'rope.jpg',
        'https://youtu.be/Pa4QUC9AvuA',
        2
    );

INSERT INTO
    "wod" ("id", "title")
VALUES
    (1, 'WOD n°1'),
    (2, 'WOD n°2');

INSERT INTO
    "training" (
        "id",
        "mobility",
        "warm_up",
        "skills",
        "workout",
        "wod_id"
    )
VALUES
    (
        1,
        'Back-roll, prayer on roller, T-hips opener full rotation, squat opener',
        '5 sets : 45 secondes easy ergo, 6 elbow rotation, 4 strict press, 4 broad jump',
        '5 sets : 1 power clean, 1 squat clean, 2 front squat, 3 push press (load progression)',
        '7-5-3 rounds : 3 push press, 3 front squat, 3 box jump, 750m run',
        1
    ),
    (
        2,
        'Back-roll, calf-roll, hamstring-roll, rollover to V-sit, Samson stretch, PNF shoulder ext. rot.',
        '4 sets : 8 kong squat prisoners, 4 pike push-up, 25 simple unders',
        '4 sets : minute 1: 15 double under, minute 2: 8 double dumbbell deadlift, 5 shoulder to overhead (load progression)',
        '5 rounds : minute 1: 20 double DB deadlift, minute 2: 50 DU ou 80 SU, minute 3: max reps double DB shoulder to OH, minute 4: rest',
        2
    );

INSERT INTO
    "box" (
        "id",
        "name",
        "email",
        "phone_number",
        "zip_code",
        "city"
    )
VALUES
    (1, "WildBear", "Vannes"),
    (2, "Andarta", "Auray"),
    (3, "Darioritum", "Vannes"),
    (4, "CrossFit Orgeval", "Orgeval"),
    (5, "CrossFit Factory", "Puteaux"),
    (6, "CrossFit 3.91", "Igny"),
    (7, "Red Legion", "Jouy-le-Moutier");

COMMIT;