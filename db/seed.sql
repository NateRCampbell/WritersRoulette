DROP TABLE IF EXISTS submission;
DROP TABLE IF EXISTS prompts;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
   author_id SERIAL PRIMARY KEY,
   username VARCHAR(60),
   email VARCHAR(100),
   password VARCHAR(200)
);

-- CREATE TABLE tags (
--    tag_id SERIAL PRIMARY KEY,
--    -- prompt_tag INT,
--    tag_value VARCHAR(50)
-- );

CREATE TABLE prompts (
   prompt_id SERIAL PRIMARY KEY,
   prompt_body TEXT,
   author_id INT REFERENCES users(author_id),
   -- tag_id INT REFERENCES tags(prompt_tag),
   view_count INT,
   mature BOOLEAN,
   complete BOOLEAN
);

CREATE TABLE submission (
   submit_id SERIAL PRIMARY KEY,
   prompt_id INT REFERENCES prompts(prompt_id),
   submit_body TEXT,
   submit_date TIMESTAMP,
   author_id INT REFERENCES users(author_id)
);
