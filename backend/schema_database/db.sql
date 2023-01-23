CREATE TABLE IF NOT EXISTS companies(
    id_company INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    fiscal_code VARCHAR(11) NOT NULL UNIQUE,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    province VARCHAR(3) NOT NULL,
    cap VARCHAR(5) NOT NULL
);

CREATE TABLE IF NOT EXISTS users(
   	id_user INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    surnname VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    province VARCHAR(3) NOT NULL,
    cap VARCHAR(5) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    PASSWORD VARCHAR(255) NOT NULL,
    fiscal_code VARCHAR(16) NOT NULL UNIQUE,
    date_of_birth DATE NOT NULL,
    place_of_birth VARCHAR(255) NOT NULL,
    id_company INT NOT NULL,
  	FOREIGN KEY(id_company) REFERENCES companies(id_company)
); 


CREATE TABLE IF NOT EXISTS roles(
    id_role INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS users_roles(
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT NOT NULL,
    id_role INT NOT NULL,
  	FOREIGN KEY(id_user) REFERENCES users(id_user),
  	FOREIGN KEY(id_role) REFERENCES roles(id_role)
)