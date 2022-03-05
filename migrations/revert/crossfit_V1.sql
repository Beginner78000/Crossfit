-- Revert crossfit:crossfit_V1 from pg
BEGIN;

DROP TABLE "post",
"category",
"box";

COMMIT;