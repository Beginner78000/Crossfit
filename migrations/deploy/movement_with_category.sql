-- Deploy crossfit:movement_with_category to pg
BEGIN;

CREATE VIEW movement_with_category AS
SELECT
    movement.*,
    category.label AS category
FROM
    movement
    JOIN category ON movement.category_id = category.id;

COMMIT;