-- Verify crossfit:crossfit_V1 on pg
BEGIN;

SELECT
    *
FROM
    "movement"
WHERE
    false;

SELECT
    *
FROM
    "category"
WHERE
    false;

SELECT
    *
FROM
    "training"
WHERE
    false;

SELECT
    *
FROM
    "box"
WHERE
    false;

ROLLBACK;