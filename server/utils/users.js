[{
  id: '/#12poiaasdfsdg',
  name: 'Leon',
  room: 'Home Movie Fans'
}]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(roomName)

class Users {
  constructor () {
    this.users = [];  
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    var user = this.getUser(id);
    
    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }
    
    return user;
  }
  getUser (id) {
    return this.users.filter((user) => user.id === id)[0];
  }
  getUserList (room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);
    
    return namesArray;
  }
}

module.exports = {Users};

// class Person {
//   constructor (name, age) {		// constructor function (optional) - called by default
//     this.name = name;			// this - refers to the instance not the class
//     this.age = age;
//   }
//   getUserDescription () {
//     return `${this.name} is ${this.age} years old.`
//   }
// }
// 
// var me = new Person('Leon', 33);
// // console.log('this.name', me.name);
// // console.log('this.age', me.age);
// 
// var description = me.getUserDescription();
// console.log(description);