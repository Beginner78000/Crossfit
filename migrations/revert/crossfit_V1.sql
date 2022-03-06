-- Revert crossfit:crossfit_V1 from pg
BEGIN;

DROP TABLE "movement",
"category",
"wod",
"training",
"box";

COMMIT;