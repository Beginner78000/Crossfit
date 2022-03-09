-- Revert crossfit:constraints from pg
BEGIN;

ALTER TABLE
    box
ALTER COLUMN
    email TYPE TEXT;

DROP DOMAIN CHK_Email;

ALTER TABLE
    box
ALTER COLUMN
    phone_number TYPE TEXT;

DROP DOMAIN CHK_Phone_Number;

ALTER TABLE
    box
ALTER COLUMN
    zip_code TYPE TEXT;

DROP DOMAIN code_postal;

COMMIT;