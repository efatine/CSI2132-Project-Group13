--database indexes: 
-- one hotel has only one manger 
CREATE UNIQUE INDEX one_manager_per_hotel_index 
ON employee (hotel_id) 
WHERE (employee_role = 'manager');


CREATE INDEX index_hotel_city
ON hotel(city);   --filter hotel by city

CREATE INDEX ix_hotel_stars
ON hotel(city, stars);   -- Customers can  filter by city and quality
