UPDATE roulette
SET prompt_body = $2
WHERE roulette_id = $1;
SELECT * FROM roulette
WHERE author_id = $3;