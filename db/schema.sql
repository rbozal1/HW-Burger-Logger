DROP DATABASE IF EXISTS burgers_db;

create database burgers_db;

use burgers_db;

create table burgers( 
    id int primary key NOT NULL AUTO_INCREMENT,
    burger_name varchar(40) not null,
    devoured boolean,
    burger_time timestamp
);