UPDATE users
SET verified = TRUE
WHERE email = $1
RETURNING *;