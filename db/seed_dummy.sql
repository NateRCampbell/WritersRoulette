SELECT * FROM users;
SELECT * FROM roulette;
SELECT * FROM submission;


SELECT * FROM roulette
WHERE roulette_id = 9;

SELECT (submit_page, submit_body) FROM submission 
WHERE roulette_id = 9;



INSERT INTO submission 
(roulette_id, author_id, submit_body, submit_page)
VALUES (9, 1, 'this is a test body for page 2', 2);



"Two years have passed since the Outsiders first threw life in Etxera into chaos. These outsiders called themselves 'Player Characters' (PC). One day, a PC strides into town, killing Sheva's mother and Father. After two difficult years of living on the streets as orphans, 17yo Sheva and her 11yo little sister, Mitzu, have become hardened PC killers. They want revenge on these PC's who act like this is all just some 'game' to them."

