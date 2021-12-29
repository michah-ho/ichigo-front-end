import { shuffleArray } from './arrayHelpers';

describe('array helper functions', () => {
  it('Should shuffle the values inside the array to have different values', () => {
    const mockArr = [6,5,4,3,2,1];
    expect(shuffleArray(mockArr)).not.toEqual(mockArr);
  });
})