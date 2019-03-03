const expect = require('expect');

const {isRealString} = require('./validation');

  
describe('isRealString', () => {
  it('should reject non-string values', () => {
    var str = 12345;
    var res = isRealString(str);
    
    expect(res).toBeFalsy();
  });
  
  it('should reject strings with only spaces', () => {
    var str = '          ';
    var res = isRealString(str);
    
    expect(res).toBeFalsy();
  });
  
  it('should allow string with non-space characters', () => {
    var str = '  validString   ';
    var res = isRealString(str);
    
    expect(res).toBeTruthy();
  });
});  