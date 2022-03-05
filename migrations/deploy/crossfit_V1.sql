-- Deploy crossfit:crossfit_V1 to pg

BEGIN;

CREATE TABLE "category" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "label" TEXT NOT NULL UNIQUE
);

CREATE TABLE "movement" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL UNIQUE,
  "description" TEXT NOT NULL UNIQUE,
  "image" TEXT,
  "movement_url" TEXT,
  "category_id" INT NOT NULL REFERENCES "category"("id")
);

CREATE TABLE "box" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL
);

COMMIT;
