import { argv } from 'zx';

describe('test cases', () => {
  it('should work ', () => {
    const add = (a, b) => a + b;
    expect(add(1, 1)).toBe(2);
  });

  it('error', () => {
    console.log(argv);
  });
});
