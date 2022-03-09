-- Verify crossfit:movement_with_category on pg
BEGIN;

SELECT
    *
FROM
    movement_with_category
WHERE
    false;

ROLLBACK;