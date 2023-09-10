// Import necessary modules from the 'sequelize' package.
const { Model, DataTypes, Sequelize } = require('sequelize');

// Define the name of the user table in the database.
const USER_TABLE = 'users';

// Define the schema for the User model
const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at', // Map this field to the 'create_at' column in the database.
    defaultValue: Sequelize.NOW // Set the default value to the current timestamp.
  }
}

// Define the User class that extends the Sequelize Model class.
class User extends Model {
  static associate(models){
    this.hasOne(models.Customer, {
      as: 'customer',
      foreignKey: 'userId'
    });
  }

  static config(sequelize){
    // Return configuration options for the User model.
    return{
      sequelize, // Pass the sequelize instance
      tableName: USER_TABLE, // Set the table name to the value of USER_TABLE.
      modelName: 'User', // Define the model name as 'User'.
      timestamps: false // Disable automatic timestamp fields (createdAt and updatedAt).
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User }


// npm run migrations:generate add-role (This command creates a new migration process directly on Database).