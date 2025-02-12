-- SQLBook: Code
CREATE TABLE IF NOT EXISTS user (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
firstname VARCHAR(50) NOT NULL,
lastname VARCHAR(50) NOT NULL,
email VARCHAR(150) NOT NULL UNIQUE,
hash_password VARCHAR(255) NOT NULL,
avatar VARCHAR(255) NOT NULL,
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



