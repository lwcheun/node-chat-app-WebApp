// Unix Epoch: Jan 1st 1970 00:00:00 am
var moment = require('moment');

// -1000 equals 1 second before Unix Epoch

// var date = new Date();
// var months = ['Jan', 'Feb'];
// console.log(date.getMonth());

// var date = moment();
// date.add(1, 'year').subtract(2, 'months');
// console.log(date.format('MMM Do, YYYY'));
// console.log(date.format('MMMM Do YYYY, h:mm:ss a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'))