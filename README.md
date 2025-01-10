
# Gym Management System (Backend)

This is the backend for the Gym Management System, built using Node.js, Express.js, and Sequelize for managing gym memberships, users, and plans.

## Features
- User management (Admin, Trainer, User roles)
- Membership plan management
- RESTful API endpoints for CRUD operations
- Database integration with MySQL using Sequelize ORM
- Easy scalability and modular structure

---

## Installation

Follow these steps to set up and run the project locally:

### Prerequisites
- Node.js (v18.16.0 or higher)
- MySQL
- Git
- Package manager (npm or yarn)

### Clone the Repository
```bash
git clone https://github.com/yourusername/gym-management-backend.git
cd gym-management-backend


### Install Dependencies
```bash
npm install

###Configure the Environment
Create a .env file in the root directory and add the following configuration:
DB_NAME=gym_management
DB_USER=root
DB_PASSWORD=password
DB_HOST=localhost
DB_DIALECT=mysql
PORT=5000

Replace the placeholders with your MySQL credentials.

Initialize the Database
Run the following command to sync the models with the database:
bash
node src/models/index.js

Start the Server
npm start

### Technologies Used
Node.js: Runtime environment
Express.js: Web framework
Sequelize: ORM for database management
MySQL: Relational database
dotenv: Environment variable management
### Future Enhancements
Role-based access control (RBAC)
Advanced reporting and analytics
Integration with payment gateways
Email and SMS notifications
