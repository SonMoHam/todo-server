const express = require('express');
const { localeData } = require('moment');
const moment = require('moment');
const {model} = require('./model');

async function getTodos(req, res){
    try {
        const ret = await model.readTodoList();
        res.send({msg: 'controller - getTodos() success', data: ret});
    } catch (error) {
        console.error('controller - getTodos() error / ', error);
    }
}

async function postTodo(req, res) {
    try{
        momentDeadline = moment(req.body.deadline).format('YYYY-MM-DD');
        
        const inputObject = {
            content: req.body.content,
            deadline: momentDeadline
        }
        console.log('inputObject / ', inputObject);
        await model.createTodo(inputObject);
        res.send({msg: 'controller - postTodo() success'});
    }
    catch (error) {
        console.log('controller - postTodo() error / ',error);
    }
}

async function putTodo(req, res) {
    try {
        momentDeadline = moment(req.body.deadline).format('YYYY-MM-DD');
        const targetId = req.body.id;
        const inputObject = {
            content: req.body.content,
            deadline: momentDeadline,
            isClear: req.body.isClear
        }
        await model.updateTodo(targetId, inputObject);
        res.send({msg: 'controller - putTodo() success'});
    } catch (error) {
        console.log('controller - putTodo() error / ',error);
    }
}

async function putTodoIsClear(req, res) {
    try {
        const targetId = req.params.id;
        const inputObject = await model.readTodo(targetId);
        inputObject.isClear = !(inputObject.isClear)
        await model.updateTodo(targetId, inputObject);
        res.send({msg: 'controller - putTodoIsClear() success'});
    } catch (error) {
        console.log('controller - putTodoIsClear() error / ',error);
    }
}

async function deleteTodo(req, res) {
    try {
        const targetId = req.params.id;
        await model.deleteTodo(targetId);
        res.send({msg: 'controller - deleteTodo() success'});
    } catch (error) {
        console.log('controller - deleteTodo() error / ',error);
    }
}

exports.controller = {
    getTodos,
    postTodo,
    putTodo,
    putTodoIsClear,
    deleteTodo
}