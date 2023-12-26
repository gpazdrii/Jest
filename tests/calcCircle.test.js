const calcCircle = require('../functions/calcCircle')

describe('Test calcCircle', () => {
  test('the assertion that the length of a circle is 138.2 for 22 radius', () => {
    expect(calcCircle.getCircleLength(22)).toBeCloseTo(138.2, 1)
  })

  test('the approximate area of the circle is 254.47 for 9 radius', () => {
    expect(calcCircle.getCircleArea(9)).toBeCloseTo(254.47, 2)
  })

  test('the getCircleArea without arguments', () => {
    expect(calcCircle.getCircleArea()).toBe(NaN)
  })

  test('the getCircleLength without arguments', () => {
    expect(calcCircle.getCircleLength()).toBe(NaN)
  })
})
