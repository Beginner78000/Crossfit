-- Deploy crossfit:constraints to pg
BEGIN;

CREATE DOMAIN CHK_Email AS TEXT CHECK (VALUE ~ '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$');

ALTER TABLE
    box
ALTER COLUMN
    email TYPE CHK_Email;

CREATE DOMAIN CHK_Phone_Number AS TEXT CHECK(
    VALUE ~ '^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$)'
);

ALTER TABLE
    box
ALTER COLUMN
    phone_number TYPE CHK_Phone_Number;

CREATE DOMAIN code_postal AS TEXT CHECK(
    -- règle complète : (58180|34280|20600|20620)|^(?!00|96|99)(?!20[45789])\d{5}(?<![12]80)$
    -- codes postaux très particuliers
    VALUE ~ '(58180|34280|20600|20620)|^(?!00|96|99)(?!20[45789])\d{5}(?<![12]80)$'
);

ALTER TABLE
    box
ALTER COLUMN
    zip_code TYPE code_postal;

COMMIT;