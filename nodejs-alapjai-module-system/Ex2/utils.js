const generateUserList = (users) => {
    return users.map(user => {
        const isAdult = user.age >= 18
        const fullName = user.firstName+' '+user.lastName
        return {...user, isAdult, fullName}
    })
} 

const getUserNames = (users) => {
    return users.map(user => user.fullName).join(', ')
}

module.exports = Object.freeze({ 
    generateUserList,
    getUserNames,
})