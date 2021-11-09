var fs = require('fs');

describe('CI sequence', () => {
  var fileContents;
  beforeEach(() => {
    fileContents = fs.readFileSync('ci.md', 'utf8');
  });

  it('the list has a header', () => {
    expect(/.*#.*/gi.test(fileContents)).toBe(true);
  });

  // TODO add the tests between these comments =>
  it('1. pull latest code', () => {
    expect(/.*pull.*/gi.test(fileContents)).toBe(true);
  });

  it('2. add commits', () => {
    expect(/.*commit.*/gi.test(fileContents)).toBe(true);
  });

  it('3. push to the remote branch with the same name', () => {
    expect(/.*push.*/gi.test(fileContents)).toBe(true);
  });

  it('4. open a pull request and continue working', () => {
    expect(/.*pull\s+request.*/gi.test(fileContents)).toBe(true);
  });
  // TODO <= add the tests between these comments
});
