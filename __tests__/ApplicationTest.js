const problem1 = require('../src/problem1')
const problem2 = require('../src/problem2')
const problem3 = require('../src/problem3')
const problem4 = require('../src/problem4')
const problem5 = require('../src/problem5')
const problem6 = require('../src/problem6')
const problem7 = require('../src/problem7')

const INVALID_INPUT = '입력값이 잘못되었습니다.'

describe('problem1', () => {
  test('case1', () => {
    expect(problem1([97, 98], [197, 198])).toEqual(0)
  })

  test('case2', () => {
    expect(problem1([131, 132], [211, 212])).toEqual(1)
  })

  test('case3', () => {
    expect(problem1([211, 212], [99, 100])).toEqual(2)
  })

  test('case4', () => {
    expect(problem1([99, 102], [211, 212])).toEqual(-1)
  })

  test('case5', () => {
    expect(problem1([0, 1], [211, 212])).toEqual(-1)
  })

  test('case6', () => {
    expect(problem1([401, 402], [99, 100])).toEqual(-1)
  })

  test('case7', () => {
    expect(problem1([100, 101], [211, 212])).toEqual(-1)
  })
})

describe('problem2', () => {
  test('case1', () => {
    expect(problem2('browoanoommnaon')).toEqual('brown')
  })

  test('case2', () => {
    expect(problem2('zyelleyz')).toEqual('')
  })

  test('case3', () => {
    expect(problem2('abcde')).toEqual('abcde')
  })

  test('case4', () => {
    expect(problem2('azzzb')).toEqual('ab')
  })

  test('case5', () => {
    expect(problem2('ABC')).toEqual(INVALID_INPUT)
  })

  test('case6', () => {
    expect(problem2('')).toEqual(INVALID_INPUT)
  })
})

describe('problem3', () => {
  test('case1', () => {
    expect(problem3(13)).toEqual(4)
  })

  test('case2', () => {
    expect(problem3(33)).toEqual(14)
  })

  test('case3', () => {
    expect(problem3(100)).toEqual(60)
  })

  test('case4', () => {
    expect(problem3(0)).toEqual(INVALID_INPUT)
  })

  test('case5', () => {
    expect(problem3(10001)).toEqual(INVALID_INPUT)
  })
})

describe('problem4', () => {
  test('case1', () => {
    expect(problem4('I love you')).toEqual('R olev blf')
  })

  test('case2', () => {
    expect(problem4('ABC Def !@#')).toEqual('ZYX Wvu !@#')
  })

  test('case3', () => {
    expect(problem4('한글은 어떨까')).toEqual('한글은 어떨까')
  })

  test('case4', () => {
    expect(problem4('')).toEqual(INVALID_INPUT)
  })
})

describe('problem5', () => {
  test('case1', () => {
    expect(problem5(50237)).toEqual([1, 0, 0, 0, 0, 2, 0, 3, 7])
  })

  test('case2', () => {
    expect(problem5(15000)).toEqual([0, 1, 1, 0, 0, 0, 0, 0, 0])
  })

  test('case3', () => {
    expect(problem5(150001)).toEqual([3, 0, 0, 0, 0, 0, 0, 0, 1])
  })

  test('case4', () => {
    expect(problem5(66661)).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1])
  })

  test('case5', () => {
    expect(problem5(0)).toEqual(INVALID_INPUT)
  })
})

describe('problem6', () => {
  test('case1', () => {
    expect(
      problem6([
        ['jm@email.com', '제이엠'],
        ['jason@email.com', '제이슨'],
        ['woniee@email.com', '워니'],
        ['mj@email.com', '엠제이'],
        ['nowm@email.com', '이제엠'],
      ])
    ).toEqual(['jason@email.com', 'jm@email.com', 'mj@email.com'])
  })
})

describe('problem7', () => {
  test('case1', () => {
    expect(
      problem7(
        'mrko',
        [
          ['donut', 'andole'],
          ['donut', 'jun'],
          ['donut', 'mrko'],
          ['shakevan', 'andole'],
          ['shakevan', 'jun'],
          ['shakevan', 'mrko'],
        ],
        ['bedi', 'bedi', 'donut', 'bedi', 'shakevan']
      )
    ).toEqual(['andole', 'jun', 'bedi'])
  })
})
