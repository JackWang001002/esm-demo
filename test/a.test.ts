import { argv } from 'zx';
import _ from 'lodash';

describe('test cases', () => {
  it('should work ', () => {
    const add = (a: number, b: number) => a + b;
    expect(add(1, 1)).toBe(2);
  });

  it('lodash ok', () => {
    console.log(_);
    
  });
  it('zx error', () => {
    console.log(argv);
  });
});
