const User = require("../models/User");

const findAllService = () => User.find();

const updateUserService = async (id, user) => {
    return await User.findByIdAndUpdate(id, user);
  };

  const getUserById = async (id) => {
    return await User.findById(id);
  };
   
  const updateUser = async (id, service) => {
    return await User.findByIdAndUpdate(id, service);
  };
   
  const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
  };

module.exports = {
    findAllService,
    updateUserService,
    getUserById,
    updateUser,
    deleteUser
};
