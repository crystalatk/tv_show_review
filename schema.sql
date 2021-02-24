-- CREATE TABLE categories (
--     id serial PRIMARY KEY,
--     name text NOT NULL,
--     description text
-- );

-- CREATE TABLE actors (
--     id serial PRIMARY KEY,
--     name text NOT NULL
-- );

-- CREATE TABLE shows (
--     id serial PRIMARY KEY,
--     title text NOT NULL,
--     poster text,
--     dates_aired text,
--     actor1_id integer REFERENCES actors (id),
--     actor2_id integer REFERENCES actors (id),
--     actor3_id integer REFERENCES actors (id),
--     plot text,
--     category_id integer REFERENCES categories (id),
--     where2watch text
-- );

-- CREATE TABLE users (
--     id serial PRIMARY KEY,
--     first_name varchar(200) NOT NULL,
--     last_name varchar(200) NOT NULL,
--     password text NOT NULL,
--     email text NOT NULL,
--     tagline varchar(150)
-- );

-- CREATE TABLE ratings (
--     id serial PRIMARY KEY,
--     name text NOT NULL,
--     stars integer
-- );

-- CREATE TABLE reviews (
--     id serial PRIMARY KEY,
--     tagline varchar(50),
--     posting_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     review_body text,
--     show_id integer REFERENCES shows (id),
--     user_id integer REFERENCES users (id),
--     stars_id integer REFERENCES ratings (id)
-- );



-- CREATE TABLE favorites (
--     id serial PRIMARY KEY,
--     user_id integer REFERENCES users (id),
--     show_id integer REFERENCES shows (id)
-- );