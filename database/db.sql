-- table tasks
CREATE TABLE tasks (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(355) NULL,
    done BOOLEAN NOT NULL default 0,
    createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tasks VALUES 
    ("1", "UNO", 0),
    ("2", "DOS", 0)