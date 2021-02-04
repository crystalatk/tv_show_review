INSERT INTO categories (name, description)
VALUES ('Action/Adventure', 'Risky turns lead to desperate situations...'),
('Comedy', 'It''s hilarious!'),
('Crime/Mystery', 'It was Professor Green in the Study!'),
('Drama', 'Save the drama for your llama!'),
('Fantasy', 'Must be rough… to believe in something so much and have it disappoint you like that.'),
('Historical', 'History repeats itself, first as tragedy, second as farce.'),
('Horror', 'Never let yourself panic.'),
('Reality', 'We look like we hate each other.'),
('Romance', 'We accept the love we think we deserve.'),
('Science Fiction', 'This is the way.');

INSERT INTO actors (name)
VALUES ('Ryan Phillippe'),
('Shantel VanSanten'),
('Omar Epps'), 
('Steve Carell'),
('Jenna Fischer'),
('John Krasinski');

INSERT INTO shows (name, poster, dates_aired, actor1_id, actor2_id, actor3_id, plot, category_id, where2watch)
VALUES ('Shooter', 'https://pics.filmaffinity.com/Shooter_TV_Series-690755032-large.jpg', '2015-2018', 1, 2, 3, 'Bob Lee Swagger is an expert marksman living in exile who is coaxed back into action after learning of a plot to kill the president.', 1, 'USA'),
('The Office', '2005-2013', 'https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX182_CR0,0,182,268_AL_.jpg', 4, 5, 6, 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.', 2, 'Prime');

INSERT INTO users (name, password, email, tagline)
VALUES ('Crystal', 'password', 'crystal@me.me', 'Just a girl who likes shows'),
('Sean', '', '', 'Beards and action figures are life.'),
('Ryan', '', '', 'I made that show.'),
('Brittani', '','', 'Nope.');

INSERT INTO ratings (name, stars)
VALUES ('Binge-Worthy', 5),
('Every Night', 4),
('Watch While I Scroll', 3),
('Once a Week', 2),
('If Nothing Else is On', 1),
('Never Again', 0);

