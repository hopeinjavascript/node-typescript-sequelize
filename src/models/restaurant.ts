import sequelize from './../connections/mysql';
import { DataTypes } from 'sequelize';

const Restaurant = sequelize.define(
  'Restaurant',
  {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vegOnly: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    cost: {
      type: DataTypes.STRING,
    },
    cuisineTypes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Date.now(),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Date.now(),
    },
    isOpen: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    indexes: [{ unique: true, fields: ['id'] }],
  }
);

// `sequelize.define` also returns the model
console.log('hmm', Restaurant === sequelize.models.Book); // true

// Restaurant.sync().then(console.log).catch(console.error);

export default Restaurant;
