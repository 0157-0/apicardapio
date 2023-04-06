const express = require("express");
const UserService = require("../service/user.service");

//aqui estamos listando todos os usuarios
const findAll = async (req, res) => {
  const users = await UserService.findAllService();

  if (users.length === 0) {
    return res.status(400).send({ message: "Não há usuários cadastrados" });
  }
  res.send(users);
};

//aqui estamos listando por id
const getUserById = async (req, res) => {
  try {
    const user = await UserService.getUserById(req.params.id);
    res.json({ data: user, status: "Sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
const updateUser = async (req, res) => {
  try {
    const user = await UserService.updateUser(req.params.id, req.body);
    res.json({ data: user, status: "Atualizado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
const delUser = async (req, res) => {
  try {
    const user = await UserService.deleteUser (req.params.id);
    res.json({ data: user, status: "Usuário deletado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { findAll, getUserById, updateUser, delUser };
