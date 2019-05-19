const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {	// done before each test case, initialize some data
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Leon',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Hongqian',
      room: 'Node Course'
    }, {
      id: '3',
      name: 'Andy',
      room: 'React Course'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Leon',
      room: 'Rick and Morty Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    
    expect(users.users).toEqual([user]);
  });
  
  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);
    
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });
  
  it('should not remove user', () => {
    var userId = '1111';
    var user = users.removeUser(userId);
    
    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });
  
  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);
    
    expect(user.id).toBe(userId);
  });
  
  it('should not find user', () => {
    var userId = '1111';
    var user = users.getUser(userId);
    
    expect(user).toBeFalsy();
  });  

  it('should return names for room - Node Course', () => {
    var userList = users.getUserList('Node Course');
    
    expect(userList).toEqual(['Leon', 'Hongqian']);
  });
  
  it('should return names for room - React Course', () => {
    var userList = users.getUserList('React Course');
    
    expect(userList).toEqual(['Andy']);
  });  
})