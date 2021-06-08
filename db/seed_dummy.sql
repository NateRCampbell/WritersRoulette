SELECT * FROM users;
SELECT * FROM roulette;
SELECT * FROM submission;


SELECT * FROM roulette
WHERE roulette_id = 9;

SELECT (submit_page, submit_body) FROM submission 
WHERE roulette_id = 9;



INSERT INTO submission 
(roulette_id, author_id, submit_body, submit_page)
VALUES (9, 1, 'test page 2', 2);