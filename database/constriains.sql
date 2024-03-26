-- constrains for employees : 

ALTER TABLE employee
ADD CONSTRAINT ssn
CHECK (LENGTH(ssn) = 9 AND ssn ~ '^[0-9]+$');

ALTER TABLE employee
ADD CONSTRAINT check_email_format_employee
CHECK (email ~ '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$');



ALTER TABLE employee
ADD CONSTRAINT employee_role
CHECK (
        employee_role = 'cleaner' OR
        employee_role = 'manager' OR 
		employee_role = 'cook' OR 
	    employee_role = 'butler' OR 
	    employee_role = 'CSR' OR 
	    employee_role = 'concierge'  
    );


-- constrains for customer : 
ALTER TABLE customer
ADD CONSTRAINT ssn
CHECK (LENGTH(ssn) = 9 AND ssn ~ '^[0-9]+$');

ALTER TABLE customer
ADD CONSTRAINT check_email_format_customer
CHECK (email ~ '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$');


-- constrains for hotel:

ALTER TABLE hotel
ADD CONSTRAINT star
CHECK (Stars > 0 AND Stars <= 5);


ALTER TABLE hotel
ADD CONSTRAINT  number_of_rooms
CHECK (number_of_rooms > 0);

-- constrains for hotel_chain
ALTER TABLE hotel_chain
ADD CONSTRAINT check_email_format_hotel_chain
CHECK (email_addresses ~ '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$');



-- constrains for booking : 
ALTER TABLE booking
ADD CONSTRAINT check_booking_dates
CHECK (start_date < end_date);

-- constrains for room: 
ALTER TABLE room ADD CONSTRAINT check_room_price 
CHECK(price > 0 AND price < 10000);

ALTER TABLE room ADD CONSTRAINT check_room_capacity 
CHECK(capacity > 0 );





// constrains for renting : 

ALTER TABLE renting
ADD CONSTRAINT check_renting_dates
CHECK (start_date < end_date);
