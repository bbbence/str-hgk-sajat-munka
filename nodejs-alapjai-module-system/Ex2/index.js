const utils = require ('./utils')

const users = [
    {firstName: 'Beni', lastName: 'Lasztném', age: 32},
    {firstName: 'Frank', lastName: 'Drebin', age: 12},
]

utils.generateUserList = console.log

const userList = utils.generateUserList(users)

console.log(userList);

console.log(utils.getUserNames(userList));
