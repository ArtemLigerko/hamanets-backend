import { TodoModel } from "./models/todo.model.js";

export const createOne = async (todo) => {
  const createdTodo = await TodoModel.create(todo);
  return createdTodo;
};

export const getAll = async () => {
  const todos = await TodoModel.find();
  return todos;
};

export const getOne = async (id) => {
  if (!id) {
    throw new Error("Id not found");
  }
  const todo = await TodoModel.findById(id);
  return todo;
};

export const updateOne = async (todo) => {
  if (!todo._id) {
    throw new Error("Id not found");
  }
  const updatedTodo = await TodoModel.findByIdAndUpdate(todo._id, todo, {
    new: true,
  });
  return updatedTodo;
};

export const deleteOne = async (id) => {
  if (!id) {
    throw new Error("Id not found!");
  }
  const deletedTodo = await TodoModel.findByIdAndDelete(id);
  return deletedTodo;
};
