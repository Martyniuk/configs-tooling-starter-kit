import { add, aa } from '.';

describe('math', () => {
  it('should add', () => {
    expect(add(2, 5)).toBe(7);
  });

  it('should aa be var', () => {
    expect(aa).toBe('var');
  });
});
