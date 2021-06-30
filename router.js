const express = require('express');
const todoRouter = express.Router();
const {controller} = require('./controller');

todoRouter.get('/todo', controller.getTodos);
todoRouter.post('/todo', controller.postTodo);
todoRouter.put('/todo', controller.putTodo);
todoRouter.put('/todo/:id', controller.putIsClear);
todoRouter.delete('/todo/:id', controller.deleteTodo);

module.exports = todoRouter;