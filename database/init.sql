DROP DATABASE IF EXISTS reliefer;

CREATE DATABASE IF NOT EXISTS reliefer DEFAULT CHARACTER SET utf8;
USE reliefer ;

DROP USER IF EXISTS 'backenduser'@'%';

CREATE USER 'backenduser'@'%' IDENTIFIED BY 'axyz123456789';
GRANT ALL PRIVILEGES ON * . * TO 'backenduser'@'%';
FLUSH PRIVILEGES;