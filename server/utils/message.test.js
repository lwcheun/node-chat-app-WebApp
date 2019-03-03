var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message.js');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Username';
    var text = 'Test message';
    var message =  generateMessage(from, text);
    //console.log(message);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Username'; 
    var lat = 12;
    var lon = 15;
    var url = `https://www.google.com/maps?q=${lat},${lon}`;
    var locationMessage = generateLocationMessage(from, lat, lon);
    //console.log(locationMessage);
  
    expect(typeof locationMessage.createdAt).toBe('number');
    expect(locationMessage.url).toEqual(url);
    expect(locationMessage).toMatchObject({from, url});
  });
});
