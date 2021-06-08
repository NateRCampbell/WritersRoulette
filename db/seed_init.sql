DROP TABLE IF EXISTS read_prompts;
DROP TABLE IF EXISTS submission;
DROP TABLE IF EXISTS roulette;
DROP TABLE IF EXISTS tag_juct;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
   author_id SERIAL PRIMARY KEY,
   username VARCHAR(60),
   email VARCHAR(100),
   password VARCHAR(200),
   verified BOOLEAN
);

CREATE TABLE tags (
   tag_id SERIAL PRIMARY KEY,
   tag_value VARCHAR(50)
);


CREATE TABLE roulette (
   roulette_id SERIAL PRIMARY KEY,
   prompt_body TEXT,
   author_id INT REFERENCES users(author_id),
   editing BOOLEAN,
   view_count INT,
   mature BOOLEAN,
   complete BOOLEAN
);

CREATE TABLE tag_juct (
   tag_id INT REFERENCES tags(tag_id),
   roulette_id INT REFERENCES roulette(roulette_id)
);

CREATE TABLE submission (
   submit_id SERIAL PRIMARY KEY,
   roulette_id INT REFERENCES roulette(roulette_id),
   submit_body TEXT,
   submit_page INT,
   author_id INT REFERENCES users(author_id)
);

-- goal for later to create a table to keep people from writing a page on a story they have read before


-- CREATE TABLE read_roulette(
--    author_id INT REFERENCES users(author_id),
--    roulette_id INT REFERENCES roulette(roulette_id)
-- );
