INSERT INTO roulette
(prompt_body, author_id, mature, editing, view_count, complete)
VALUES ($1, $2, $3, FALSE, 1, FALSE) 
RETURNING *

