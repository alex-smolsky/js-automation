const Calculator = require('../../calculator.js')

const newCalc = new Calculator()

describe("Tests for 'add' method", () => {
  const testCases = [
    [1, 1],
    [200, 300, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    [2000000000, 3000000000, 400000000],
    [],
    [0, 0, 0, 0],
    [-1, -1],
    [1],
    [0, -1],
    [0.2, 0.4]
  ]
  let expectedResults = []
  const actualResult = []
  beforeAll(async () => {
    testCases.forEach((testCase) => {
      actualResult.push(newCalc.add(...testCase))
    })
    expectedResults = [2, 605, 5400000000, 0, 0, -2, 1, -1, 0.6]
  })

  it("'Add' method calculation result", async () => {
    expectedResults.forEach((res, i) => {
      expect(res).toEqual(actualResult[i])
    })
  })
  it("Result type of 'add' method", async () => {
    expectedResults.forEach((res) => {
      expect(typeof res).toBe('number')
    })
  })
})

describe("Tests for 'multiply' method", () => {
  const testCases = [
    [1, 1],
    [200, 300, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    [-1, 0, -2],
    [],
    [0, 0, 0, 0],
    [-1, -1],
    [1],
    [0, -1],
    [0.2, 0.4]
  ]
  let expectedResults = []
  const actualResult = []
  beforeAll(async () => {
    testCases.forEach((testCase) => {
      actualResult.push(newCalc.multiply(...testCase))
    })
    expectedResults = [1, 5230697472000000, 0, 0, 0, 1, 1, 0, 0.08]
  })
  it("'Multiply' method calculation result", async () => {
    expectedResults.forEach((res, i) => {
      expect(res).toEqual(actualResult[i])
    })
  })
  it("Type of 'Multiply' method calculation result", () => {
    expectedResults.forEach((res) => {
      expect(typeof res).toBe('number')
    })
  })
})

describe("Tests for 'subtraction' method", () => {
  const testCases = [
    [1, 1],
    [200, 300, 1],
    [1, 2],
    [0],
    [0, 0],
    [1, '2']

  ]
  let expectedResults = []
  const actualResult = []
  beforeAll(async () => {
    testCases.forEach((testCase) => {
      actualResult.push(newCalc.subtraction(...testCase))
    })
  })
  expectedResults = [0, -100, -1, NaN, 0, NaN]

  it("'Subtraction' method calculation result", async () => {
    expectedResults.forEach((res, i) => {
      expect(res).toEqual(actualResult[i])
    })
  })

  it("Type of 'Subtraction' method calculation result", async () => {
    expectedResults.forEach((res) => {
      expect(typeof res).toEqual('number' || 'NaN')
    })
  })
})

describe("Tests for 'divide' method", () => {
  const testCases = [
    [1, 1],
    [1, -1],
    [200, 300],
    [1, 2],
    [0],
    [1, 0],
    [1, '2']
  ]
  let expectedResults = []
  const actualResult = []
  beforeAll(async () => {
    testCases.forEach((testCase) => {
      actualResult.push(newCalc.divide(...testCase))
    })
    expectedResults = [1, -1, 0.6666666666666666, 0.5, NaN, Infinity, NaN]
  })

  it("'Divide' method calculation result", async () => {
    expectedResults.forEach((res, i) => {
      expect(res).toEqual(actualResult[i])
    })
  })

  it("Type of 'divide' method calculation result", async () => {
    expectedResults.forEach((res) => {
      expect(typeof res).toEqual('number' || 'NaN')
    })
  })
})

describe("Tests for 'exponentiation' method", () => {
  const testCases = [
    1,
    0,
    10,
    -1,
    -2,
    '1'

  ]
  let expectedResults = []
  const actualResult = []
  beforeAll(async () => {
    testCases.forEach((testCase) => {
      actualResult.push(newCalc.exponentiation(testCase))
    })
  })
  expectedResults = [1, 0, 100, 1, 4, NaN]

  it("'Exponentiation' method calculation result", async () => {
    expectedResults.forEach((res, i) => {
      expect(res).toEqual(actualResult[i])
    })
  })

  it("Type of 'exponentiation' method calculation result", async () => {
    expectedResults.forEach((res) => {
      expect(typeof res).toEqual('number' || 'NaN')
    })
  })
})
