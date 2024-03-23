-- Stops insertion if date range is an invalid value (end date before start date)

DROP TRIGGER IF EXISTS trg_date_range_booking ON booking;
CREATE OR REPLACE FUNCTION check_date_range_booking()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.start_date > NEW.end_date THEN
        RAISE EXCEPTION 'Error, end date is before start date.';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER trg_date_range_booking
BEFORE INSERT ON booking
FOR EACH ROW
EXECUTE FUNCTION check_date_range_booking();

-- Stops insertion if date range is an invalid value (end date before start date)
CREATE OR REPLACE FUNCTION check_end_date()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.end_date <= NEW.start_date THEN
        RAISE EXCEPTION 'End date must be after start date';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_check_end_date
BEFORE INSERT OR UPDATE ON renting
FOR EACH ROW EXECUTE FUNCTION check_end_date();


-- Calculates the price of a booking on insertion
CREATE OR REPLACE FUNCTION calculate_booking_price()
RETURNS TRIGGER AS $$
BEGIN
    NEW.price := (SELECT (NEW.end_date - NEW.start_date) * room.price 
                  FROM room 
                  WHERE room.room_id = NEW.room_id);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER calculate_booking_price_trigger
BEFORE INSERT ON booking
FOR EACH ROW
EXECUTE FUNCTION calculate_booking_price();


CREATE OR REPLACE FUNCTION calculate_booking_price_on_update()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.start_date <> OLD.start_date OR NEW.end_date <> OLD.end_date THEN
        NEW.price := (EXTRACT(DAY FROM (NEW.end_date - NEW.start_date))) * (SELECT room.price 
                                                                                          FROM booking 
                                                                                          INNER JOIN room 
                                                                                          ON room.room_id = booking.room_id 
                                                                                          WHERE room.room_id = NEW.room_id 
                                                                                          AND booking.booking_id = NEW.booking_id);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER calculate_booking_price_on_update_trigger
BEFORE UPDATE ON booking
FOR EACH ROW
EXECUTE FUNCTION calculate_booking_price_on_update();





