-- SQLBook: Code
CREATE TABLE IF NOT EXISTS user (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
firstname VARCHAR(50) NOT NULL,
lastname VARCHAR(50) NOT NULL,
email VARCHAR(150) NOT NULL UNIQUE,
hash_password VARCHAR(255) NOT NULL,
avatar VARCHAR(255),
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);

CREATE TABLE IF NOT EXISTS book (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(50) NOT NULL,
  summary TEXT NOT NULL,
  genre VARCHAR(50),
  language VARCHAR(50),
  author VARCHAR(100) NOT NULL,
  publisher VARCHAR(100),
  illustrator VARCHAR(100),
  owner VARCHAR(100) NOT NULL,
  isbn VARCHAR(15) NOT NULL UNIQUE,
  page_count INT,
  pickup_address VARCHAR(100) NOT NULL,
  statut VARCHAR(100) NOT NULL,
  cover_image VARCHAR(255),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_book (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id),
  book_id INT NOT NULL,
  FOREIGN KEY (book_id) REFERENCES book(id)
);
  INSERT INTO book (title, summary, genre, language, author, publisher, illustrator, owner, isbn, page_count, pickup_address, Statut, cover_image) 
VALUES (
  'Le Seigneur des Anneaux', 
  'Une épopée fantastique où Frodon et ses compagnons tentent de détruire l\'Anneau Unique.', 
  'Fantasy', 
  'Français', 
  'J.R.R. Tolkien', 
  'Gallimard', 
  'Alan Lee', 
  'Jean Dupont', 
  '9780261102385', 
  1216, 
  '15 rue de Rivoli, Paris, France', 
  'Disponible', 
  'https://lisez0.cdnstatics.com/usuaris/libros/fotos/9782266347/m_libros/9782266346764ORI.jpg'
),
(
  '1984', 
  'Un roman dystopique décrivant un monde totalitaire sous la surveillance constante de Big Brother.', 
  'Science-fiction', 
  'Français', 
  'George Orwell', 
  'Seuil', 
  NULL, 
  'Marie Curieux', 
  '9780451524935', 
  328, 
  '25 avenue Victor Hugo, Lyon, France', 
  'Emprunté', 
  'https://www.hachette.fr/sites/default/files/images/livres/couv/9782017080251-001-T.jpeg'
),
(
  'Harry Potter à l\'école des sorciers', 
  'Le premier tome des aventures de Harry Potter, jeune sorcier découvrant le monde magique.', 
  'Fantasy', 
  'Français', 
  'J.K. Rowling', 
  'Gallimard Jeunesse', 
  'Mary GrandPré', 
  'Lucie Martin', 
  '9780747532699', 
  309, 
  '10 place Bellecour, Lyon, France', 
  'Disponible', 
  'https://m.media-amazon.com/images/I/81jVPDq3HKL._SY425_.jpg'
),
(
  'Le Petit Prince', 
  'Une histoire poétique et philosophique racontant la rencontre entre un aviateur et un jeune prince venu d\'une autre planète.', 
  'Conte philosophique', 
  'Français', 
  'Antoine de Saint-Exupéry', 
  'Éditions Gallimard', 
  NULL, 
  'Pierre Dupuis', 
  '9782070612758', 
  96, 
  '5 boulevard Haussmann, Paris, France', 
  'Réservé', 
  'https://m.media-amazon.com/images/I/710wth0vXZL.jpg'
),
(
'Les Misérables', 
  'L\'histoire de Jean Valjean, un ancien forçat, et de sa rédemption dans un contexte social difficile.', 
  'Roman historique', 
  'Français', 
  'Victor Hugo', 
  'Éditions Folio', 
  NULL, 
  'Anne Lefebvre', 
  '9782070368228', 
  1488, 
  '12 rue Lafayette, Lille, France', 
  'Disponible', 
  'https://www.livredepoche.com/sites/default/files/images/livres/couv/9782253096337-001-T.jpeg'
);