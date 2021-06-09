SELECT roulette.roulette_id, roulette.prompt_body, roulette.author_id,
 submission.roulette_id, submission.submit_body, submission.submit_page, submission.submit_id
FROM roulette
INNER JOIN submission ON roulette.roulette_id = submission.roulette_id
WHERE roulette.roulette_id = $1
ORDER BY submit_page;
