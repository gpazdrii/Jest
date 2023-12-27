const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2']

describe('testing userList', () => {
  test('whether the array contains the element "admin"', () => {
    expect(userList).toContain('admin')
  })

  test('whether the first element in the array is "Nick"', () => {
    expect(userList[0]).toBe('Nick')
  })

  test('whether the last element in the array is "new _ user_2"', () => {
    expect(userList.at(-1)).toBe('new_user_2')
  })

  test('the statement that the length of the array is 5', () => {
    expect(userList).toHaveLength(5)
  })

  test('the statement that the 3rd element of the array has type string', () => {
    expect(typeof userList[2]).toBe('string')
  })

  test('the statement that the array does not have an 8th element', () => {
    expect(userList[7]).toBeUndefined
  })
})
