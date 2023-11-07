import { Op } from 'sequelize';
import Restaurant from '../models/restaurant';
import { TRestaurant, TRestaurantOptional } from '../types';

const BOOLEAN_FIELDS = ["vegOnly", "isOpen"], 
  ARRAY_FIELDS = ["cuisineTypes"]

async function insert(dataToInsert: TRestaurant) {
  return await Restaurant.create(dataToInsert);
}

async function insertMany(dataToInsert: TRestaurant[] ) {
  return await Restaurant.bulkCreate(dataToInsert, {
    updateOnDuplicate: ["name"],
    ignoreDuplicates: true,
  });
}

async function findAll(filter: TRestaurantOptional) {
  let where: {[key: string]: any} = filter

  for (const key in filter) {
    let value = filter[key];

    //parsing array fields
    if (ARRAY_FIELDS.includes(key)) {
      let arr = []
      if (value.includes("|")) {// OR 
        value = value.split('|')
        for (const val of value) {
          arr.push({[Op.like]: `%${val}%`})
        } 
        where[key] = { [Op.or] : arr }
      } else { // AND default
        // where[key] = { [Op.like] : `%${value}%`}
        value = value.split(',')
        for (const val of value) {
          arr.push({[Op.like]: `%${val}%`})
        } 
        // where[key] = { [Op.and] : [{[Op.like]: `%${value}%`}, {[Op.like]: `%${value}%`} ] }
        where[key] = { [Op.and] : arr }
      }
    }
    
    //paring boolean fields
    if (BOOLEAN_FIELDS.includes(key)) {
      where[key] = value && value === "true" ? true : false
    }
  }

  return  await Restaurant.findAll({
    where
  });
}

async function findById(id: string) {
  return await Restaurant.findByPk(id);
}

async function deleteMany(filter: TRestaurantOptional) {
  return await Restaurant.destroy({
    where: filter,
  });
}

async function deleteById(id: string) {
  return await Restaurant.destroy({
    where: { id },
  });
}

async function truncate() {
  return await Restaurant.destroy({
    truncate: true,
  });
}

async function update(fieldsToUpdate: TRestaurantOptional, filter: TRestaurantOptional) {
  return await Restaurant.update(fieldsToUpdate, {
    where: { filter },
  });
}
async function updateById(fieldsToUpdate: TRestaurantOptional, id: string) {
  const result =  await Restaurant.update(fieldsToUpdate, {
    where: { id },
  });
  return result[0]
}

export default {
  insert,
  insertMany,
  findAll,
  findById,
  deleteMany,
  deleteById,
  truncate,
  update,
  updateById,
};
