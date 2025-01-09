CREATE DATABASE gym_management;
USE gym_management;

-- Create Users Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(15) UNIQUE,
    role ENUM('Admin', 'Trainer', 'Member') NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create Membership Plans Table
CREATE TABLE membership_plans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    plan_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    duration_months INT NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create Classes Table
CREATE TABLE classes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    class_name VARCHAR(100) NOT NULL,
    schedule DATETIME NOT NULL,
    trainer_id INT NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_trainer FOREIGN KEY (trainer_id) REFERENCES users(id)
);

-- Create Payments Table
CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    status ENUM('Pending', 'Completed', 'Failed') NOT NULL,
    payment_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    membership_id INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT fk_membership FOREIGN KEY (membership_id) REFERENCES membership_plans(id)
);

-- Create Equipment and Inventory Table
CREATE TABLE equipment_inventory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    equipment_name VARCHAR(100) NOT NULL,
    quantity INT NOT NULL,
    status ENUM('Available', 'Under Maintenance', 'Out of Order') NOT NULL,
    purchase_date DATE,
    last_service_date DATE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);



Dummy Data for Users Table
sql
Copy code
INSERT INTO users (name, email, password, phone, role) VALUES
('John Doe', 'john.doe@example.com', 'hashedpassword1', '1234567890', 'Member'),
('Jane Smith', 'jane.smith@example.com', 'hashedpassword2', '0987654321', 'Trainer'),
('Admin User', 'admin@example.com', 'hashedpassword3', '1122334455', 'Admin'),
('Alice Brown', 'alice.brown@example.com', 'hashedpassword4', '2233445566', 'Member'),
('Bob Johnson', 'bob.johnson@example.com', 'hashedpassword5', '3344556677', 'Trainer');
Dummy Data for Membership Plans Table
sql
Copy code
INSERT INTO membership_plans (plan_name, price, duration_months, description) VALUES
('Basic Plan', 30.00, 1, 'Access to gym during working hours.'),
('Standard Plan', 75.00, 3, 'Includes gym access and 2 free classes per week.'),
('Premium Plan', 200.00, 12, 'All-inclusive access and personal trainer sessions.'),
('Family Plan', 500.00, 12, 'Gym access for up to 4 family members.');
Dummy Data for Classes Table
sql
Copy code
INSERT INTO classes (class_name, schedule, trainer_id, description) VALUES
('Yoga Class', '2025-01-10 10:00:00', 2, 'A relaxing yoga class for beginners.'),
('HIIT Workout', '2025-01-12 18:00:00', 5, 'High-Intensity Interval Training for weight loss.'),
('Zumba Dance', '2025-01-15 15:00:00', 2, 'A fun and energetic dance workout.'),
('Strength Training', '2025-01-18 11:00:00', 5, 'Build strength with weights and resistance.'),
('Cardio Blast', '2025-01-20 09:00:00', 2, 'Burn calories with high-energy cardio exercises.');
Dummy Data for Payments Table
sql
Copy code
INSERT INTO payments (user_id, amount, status, membership_id) VALUES
(1, 30.00, 'Completed', 1),
(4, 75.00, 'Completed', 2),
(1, 200.00, 'Pending', 3),
(4, 500.00, 'Completed', 4),
(1, 30.00, 'Failed', 1);
Dummy Data for Equipment and Inventory Table
sql
Copy code
INSERT INTO equipment_inventory (equipment_name, quantity, status, purchase_date, last_service_date) VALUES
('Treadmill', 5, 'Available', '2023-07-01', '2024-12-15'),
('Dumbbells Set', 10, 'Available', '2024-01-10', '2024-11-20'),
('Bench Press', 2, 'Under Maintenance', '2022-05-15', '2024-12-01'),
('Yoga Mats', 20, 'Available', '2023-03-01', '2024-06-01'),
('Elliptical Trainer', 3, 'Out of Order', '2021-09-01', '2023-11-10');