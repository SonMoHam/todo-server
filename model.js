const Sequelize = require('sequelize');
const config = require('./dbConfig')
const sequelize = new Sequelize(config.dbName, config.user, config.password, {
    dialect: 'mysql',
    host: config.endpoint
});
const Op = Sequelize.Op;

class Todo extends Sequelize.Model { }
Todo.init(
    {
        content: {
            type: Sequelize.STRING,
            allowNull: true
        },
        isClear: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        deadline: {
            type: Sequelize.DATE,
            allowNull: true
        }
    },
    {
        sequelize,
        charset: 'utf8',
        collate: 'utf8_general_ci'
    }
);

const prepareModel = async () => {
    try {
        await Todo.sync({ force: true });
        sequelize.close();
    } catch (error) {
        console.error('model - prepareModel() Error', error);
    }
}

async function createTodo(inputObject) {
    try {
        const result = await Todo.create({
            content: inputObject.content,
            deadline: inputObject.deadline
        }, { logging: false });
        const newData = result.dataValues;
        console.log(newData);
        console.log('model - createTodo() / success');
    }
    catch (error) {
        console.log('model - createTodo() Error / ', error);
    }
}

async function readTodo(targetId) {
    try {
        let result = await Todo.findOne( { where: { id: targetId }});
        console.log('model - readTodo() / success', result);
        return result;
    } catch (error) {
        console.error('model - readTodo() Error / ', error);
    }
}

async function readTodoList() {
    const result = Todo.findAll({})
        .then(results => {
            console.log('model - readTodoList() / success');
            return results;
        })
        .catch(error => {
            console.error('model - readTodoList() Error / ', error);
        });
    return result;
}

async function updateTodo(targetId, inputObject) {
    try {
        let result = await Todo.update(
            {
                content: inputObject.content,
                deadline: inputObject.deadline,
                isClear: inputObject.isClear
            },
            { where: { id: targetId } }
        );
        const newData = result.dataValues;
        console.log(newData);
        console.log('model - updateTodo() / success');
    } catch (error) {
        console.error('model - updateTodo() Error / ', error);
    }
}

async function deleteTodo(targetId) {
    try {
        let result = await Todo.destroy({ where: { id: { [Op.eq]: targetId } } });
        console.log('model - deleteTodo() / success', result);
    } catch (error) {
        console.error('model - deleteTodo() Error / ', error);
    }
}


exports.model = {
    createTodo,
    readTodo,
    readTodoList,
    updateTodo,
    deleteTodo
}

// prepareModel();
// readTodo(1);