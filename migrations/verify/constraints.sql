-- Verify crossfit:constraints on pg
BEGIN;

SELECT
    *
FROM
    box
WHERE
    false;

ROLLBACK;