DELETE FROM submission
WHERE roulette_id = $1;
DELETE FROM roulette
WHERE roulette_id = $1;
SELECT * FROM roulette
WHERE author_id = $2
ORDER BY roulette_id;