CREATE TABLE categories (
    id serial PRIMARY KEY,
    name text NOT NULL,
    description text
);

CREATE TABLE actors (
    id serial PRIMARY KEY,
    name text NOT NULL
);

CREATE TABLE shows (
    id serial PRIMARY KEY,
    name text NOT NULL,
    poster text,
    dates_aired text,
    actor1_id integer REFERENCES actors (id),
    actor2_id integer REFERENCES actors (id),
    actor3_id integer REFERENCES actors (id),
    plot text,
    category_id integer REFERENCES categories (id),
    where2watch text
);

CREATE TABLE users (
    id serial PRIMARY KEY,
    name text NOT NULL,
    password text,
    email text,
    tagline varchar(50)
);

CREATE TABLE ratings (
    id serial PRIMARY KEY,
    name text NOT NULL,
    stars integer
);

CREATE TABLE reviews (
    id serial PRIMARY KEY,
    tagline varchar(20),
    posting_date DATE NOT NULL DEFAULT CURRENT_DATE,
    show_id integer REFERENCES shows (id),
    user_id integer REFERENCES users (id),
    stars_id integer REFERENCES ratings (id)
);

CREATE TABLE favorites (
    id serial PRIMARY KEY,
    user_id integer REFERENCES users (id),
    show_id integer REFERENCES shows (id)
)