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
    password VARCHAR(255) NOT NULL,
    fiscal_code VARCHAR(16) NOT NULL UNIQUE,
    date_of_birth DATE NOT NULL,
    place_of_birth VARCHAR(255) NOT NULL,
    id_company INT NOT NULL,
  	FOREIGN KEY(id_company) REFERENCES companies(id_company)
); 

ALTER TABLE users ADD assumption_date DATE;

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
);

CREATE TABLE IF NOT EXISTS permits(
    id_permit INT AUTO_INCREMENT PRIMARY KEY,
    available_holidays INT,
    accrued_holidays INT,
    available_permits INT,
    accrued_permits INT,
    start_date DATE,
    end_date DATE,
    worker_status ENUM("malattia", "infortunio", "maternità", "assenza_giustificata"),
    id_user INT NOT NULL,
    FOREIGN KEY(id_user) REFERENCES users(id_user)
);

CREATE TABLE IF NOT EXISTS extraordinarys(
    id_extraordinary INT AUTO_INCREMENT PRIMARY KEY,
    extraordinary_hours TIME,
    extraordinary_date DATE,
    id_user INT NOT NULL,
    FOREIGN KEY(id_user) REFERENCES users(id_user)
);

CREATE TABLE IF NOT EXISTS salary_slips(
    id_salary_slips INT AUTO_INCREMENT PRIMARY KEY,
    rate_irpef INT,
    bonus FLOAT,
    contractual_holiday_allowance FLOAT,
    number_sick_days INT,
    number_holidays_days INT,
    number_permits_days INT,
    number_days_justified_absence INT,
    number_days_injury INT,
    number_days_maternity INT,
    amount_contributions_inps_inail INT,
    gross_pay INT,
    taxable_tax INT,
    net_pay INT,
    type DATE,
    id_company INT NOT NULL,
    id_user INT NOT NULL,
    FOREIGN KEY(id_company) REFERENCES companies(id_company),
    FOREIGN KEY(id_user) REFERENCES users(id_user)
);

CREATE TABLE IF NOT EXISTS contracts(
    id_contract INT AUTO_INCREMENT PRIMARY KEY,
    maternity_hourly_amount FLOAT,
    holidays_amount_time FLOAT,
    days_permit_accrued INT,
    accrued_holidays_days INT,
    permissions_amount_time FLOAT,
    accident_amount_time FLOAT,
    absense_amount_hourly FLOAT,
    percentage_contributions INT,
    clicks_seniority_hours FLOAT,
    sickness_hourly_amount FLOAT,
    pay_base_hourly_amount FLOAT,
    overtime_hourly_amount FLOAT, 
    salary_slips INT NOT NULL,
    FOREIGN KEY(salary_slips) REFERENCES salary_slips(id_salary_slips)
);