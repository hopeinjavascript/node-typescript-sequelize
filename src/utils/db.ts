import Restaurant from '../models/restaurant';

async function findAll(filter = {}) {
  try {
    return await Restaurant.findAll(filter);
  } catch (error) {
  } finally {
  }
}

async function findById(id: string) {
  try {
    return await Restaurant.findByPk(id);
  } catch (error) {
  } finally {
  }
}

async function deleteMany(filter: {}) {
  try {
    return await Restaurant.destroy({
      where: filter,
    });
  } catch (error) {
  } finally {
  }
}

async function deleteById(id: string) {
  try {
    return await Restaurant.destroy({
      where: { id },
    });
  } catch (error) {
  } finally {
  }
}

async function truncate(id: string) {
  try {
    return await Restaurant.destroy({
      truncate: true,
    });
  } catch (error) {
  } finally {
  }
}

async function update(fieldsToUpdate: {}, filter: {}) {
  try {
    return await Restaurant.update(fieldsToUpdate, {
      where: { filter },
    });
  } catch (error) {
  } finally {
  }
}
async function updateById(fieldsToUpdate: {}, id: string) {
  try {
    return await Restaurant.update(fieldsToUpdate, {
      where: { id },
    });
  } catch (error) {
  } finally {
  }
}

export default {
  findAll,
  findById,
  deleteMany,
  deleteById,
  truncate,
  update,
  updateById,
};
