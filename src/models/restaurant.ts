import sequelize from './../connections/mysql';
import { DataTypes } from 'sequelize';

const Restaurant = sequelize.define(
  'Restaurant',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vegOnly: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    cost: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cuisineTypes: {
      type: DataTypes.STRING,
      allowNull: false,
      get(): string[] {
        return this.getDataValue('cuisineTypes')?.split(',')
      },
      set(val: string[]){
        this.setDataValue('cuisineTypes', val.join(','))
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      allowNull: false,
    },
    isOpen: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
  },
  {
    indexes: [{ unique: true, fields: ['id'] }],
  }
);

// Restaurant.sync().then(console.log).catch(console.error);

export default Restaurant;
