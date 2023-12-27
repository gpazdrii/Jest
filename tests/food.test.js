const { filterFoodPrice } = require('../functions/food')
const food = [
  { kind: 'potato', price: 10 },
  { kind: 'bred', price: 16 },
  { kind: 'pepper', price: 27 },
  { kind: 'banana', price: 32 },
  { kind: 'lemon', price: 50 }
]

describe('testing food function', () => {
  beforeEach(() => {
    this.filteredArr = filterFoodPrice(food, 12, 40)
  })

  test('whether the expected length of the sorted array 3 corresponds to the actual length', () => {
    expect(this.filteredArr).not.toHaveLength(food.length)
  })

  test('whether the sorted array contains the object { kind: "pepper", price: 27 }', () => {
    expect(this.filteredArr).toEqual(expect.arrayContaining([{ kind: 'pepper', price: 27 }]))
  })

  test('whether the sorted array contains 2, 3, and 4 elements of the origin', () => {
    expect(this.filteredArr).toEqual(expect.arrayContaining([food[1], food[2], food[3]]))
  })

  test('whether the price property of the 1st element of the sorted array is greater than min', () => {
    expect(this.filteredArr[0].price).toBeGreaterThan(12)
  })

  test('whether the price property of the 3rd element of the sorted array is less than max', () => {
    expect(this.filteredArr[2].price).toBeLessThan(40)
  })

  test('that the sorted array does not contain the element { kind: "lemon", price: 50 }', () => {
    expect(this.filteredArr).toEqual(expect.not.arrayContaining([{ kind: 'lemon', price: 50 }]))
  })

  test('whether the kind property of the 1st element of the sorted array is bred', () => {
    expect(this.filteredArr[0].kind).toEqual('bred')
  })

  test('that the sorted array does not have 5th element', () => {
    expect(this.filteredArr[4]).toBeUndefined
  })
})
