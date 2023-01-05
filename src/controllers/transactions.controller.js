import {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
} from "./todo.service.js";

export const createOneTodo = async (req, res) => {
  try {
    const todo = await createOne(req.body);
    return res.json(todo);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const todos = await getAll();
    return res.json(todos);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const getOneTodo = async (req, res) => {
  try {
    const todo = await getOne(req.params.id);
    return res.json(todo);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const updateOneTodo = async (req, res) => {
  try {
    const updatedTodo = await updateOne(req.body);
    return res.json(updatedTodo);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const deleteOneTodo = async (req, res) => {
  try {
    const deletedTodo = await deleteOne(req.params.id);
    return res.json(deletedTodo);
  } catch (e) {
    res.status(500).json(e.message);
  }
};
