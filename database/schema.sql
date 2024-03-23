CREATE DADABASE ehotel;
SET search_path TO ehotel;
CREATE SCHEMA hotelinfo;
SET search_path TO ehotel, hotelinfo;


CREATE TABLE hotel_chain (
    chain_id SERIAL PRIMARY KEY,
    central_office_address VARCHAR(255) NOT NULL,
    central_office_city VARCHAR(255) NOT NULL,
    number_of_hotels INT NOT NULL,
    email_addresses VARCHAR(255),
    phone_numbers VARCHAR(255),
    chain_name VARCHAR(255) NOT NULL
);

CREATE TABLE hotel (
    hotel_id SERIAL PRIMARY KEY,
    stars INT NOT NULL ,
    number_of_rooms INT NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_numbers VARCHAR(100) NOT NULL,
    hotel_name VARCHAR(255) NOT NULL,
    manager_id INT,
    chain_id INT,
    FOREIGN KEY (chain_id) REFERENCES hotel_chain(chain_id) ON DELETE CASCADE);


CREATE TABLE employee (
    employee_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    address VARCHAR(255),
    city VARCHAR(100),
    ssn CHAR(9) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL ,
    employee_role VARCHAR(100) UNIQUE NOT NULL,
    hotel_id INT NOT NULL,
    FOREIGN KEY (hotel_id) REFERENCES hotel(hotel_id) ON DELETE CASCADE
);

CREATE TABLE customer (
    email VARCHAR(100) PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    address VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    ssn CHAR(9) UNIQUE NOT NULL,
    registration_date DATE NOT NULL
);

CREATE TABLE room (
    room_id SERIAL PRIMARY KEY,
    price DECIMAL(10,2) NOT NULL,
    amenities VARCHAR(100),
    capacity INT NOT NULL ,
    view VARCHAR(100),
    extendable BOOLEAN,
    hotel_id INT NOT NULL,
    damage VARCHAR(200),
    FOREIGN KEY (hotel_id) REFERENCES hotel(hotel_id) ON DELETE CASCADE
	
);

CREATE TABLE booking (
    booking_id SERIAL PRIMARY KEY ,
    customer_email  VARCHAR(100),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    price DECIMAL(10,2),
    room_id INT,
    FOREIGN KEY (customer_email ) REFERENCES customer(email) ON DELETE SET NULL,
    FOREIGN KEY (room_id) REFERENCES room(room_id) ON DELETE SET NULL
);
CREATE TABLE renting (
    renting_id SERIAL PRIMARY KEY,
    booking_id INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    paid BOOLEAN,
    FOREIGN KEY (booking_id) REFERENCES booking(booking_id)
);











