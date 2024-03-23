CREATE VIEW occupied_rooms AS
SELECT r.room_id,h.hotel_name, b.start_date, b.end_date FROM hotel h,room r, booking b WHERE r.hotel_id = h.hotel_id AND r.room_id = b.room_id;

CREATE OR REPLACE VIEW room_capacity_by_hotel AS
SELECT h.hotel_id, h.hotel_name, SUM(r.capacity) AS total_capacity
FROM hotel h
JOIN room r ON h.hotel_id = r.hotel_id
LEFT JOIN booking b ON r.room_id = b.room_id 
WHERE b.booking_id IS NULL OR b.booking_id IS NULL
GROUP BY h.hotel_id, h.hotel_name;
-- SELECT * FROM room_capacity_by_hotel;


CREATE OR REPLACE VIEW available_rooms_per_area AS
SELECT h.city, COUNT(r.room_id) AS num_available_rooms
FROM hotel h
JOIN room r ON h.hotel_id = r.hotel_id
LEFT JOIN booking b ON r.room_id = b.room_id
WHERE b.booking_id IS NULL
GROUP BY h.city;

--SELECT * FROM available_rooms_per_area;