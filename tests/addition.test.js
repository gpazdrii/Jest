const addition = require('../functions/addition.js')

describe('Testing addition function', () => {
  test('verify 0.1 adding to 0.2 is 0.3', () => {
    expect(addition(0.1, 0.2)).toBeCloseTo(0.3, 2)
  })
})
