-- Create the db
CREATE DATABASE IF NOT EXISTS ugf;

-- Move into the db
\c ugf

-- Create our table if it doesn't already exist
CREATE TABLE IF NOT EXISTS online_queries 
(
    arrival_date date NOT NULL,
    departure_date date NOT NULL,
    no_of_adults integer,
    no_of_rooms integer,
    create_date_time timestamp without time zone
);

CREATE INDEX  IF NOT EXISTS online_queries_1ix
    ON online_queries
    (arrival_date ASC NULLS LAST)