-- 1. Master Table: Registration Data
CREATE TABLE registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    mobile VARCHAR(15),
    address TEXT,
    age INT,
    class_preference VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Master Table: Parent/Student Data
CREATE TABLE parent_student_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    parent_name VARCHAR(100),
    student_name VARCHAR(100),
    contact_number VARCHAR(15),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Payment Transactions
CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    registration_id INT,
    amount DECIMAL(10,2) DEFAULT 500,
    status VARCHAR(20),
    transaction_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (registration_id) REFERENCES registrations(id)
);
