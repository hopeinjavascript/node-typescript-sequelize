import Restaurant from '../models/restaurant';
import { Data } from '../types';

async function insert(dataToInsert: Data) {
  return await Restaurant.create(dataToInsert);
}

async function insertMany(dataToInsert: Data[] ) {
  return await Restaurant.bulkCreate(dataToInsert, {
    updateOnDuplicate: ["name"],
    ignoreDuplicates: true,
  });
}

async function findAll(filter = {}) {
  return await Restaurant.findAll(filter);
}

async function findById(id: string) {
  return await Restaurant.findByPk(id);
}

async function deleteMany(filter: {}) {
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

async function update(fieldsToUpdate: {}, filter: {}) {
  return await Restaurant.update(fieldsToUpdate, {
    where: { filter },
  });
}
async function updateById(fieldsToUpdate: {}, id: string) {
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
