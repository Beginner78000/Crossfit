-- Revert crossfit:crossfit_V1 from pg
BEGIN;

DROP TABLE "movement",
"training",
"box",
"category";

COMMIT;