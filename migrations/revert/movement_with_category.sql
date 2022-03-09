-- Revert crossfit:movement_with_category from pg
BEGIN;

DROP VIEW movement_with_category;

COMMIT;