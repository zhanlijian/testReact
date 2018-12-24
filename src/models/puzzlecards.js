import request from '../util/request' // request 是 demo 项目脚手架中提供的一个做 http 请求的方法，是对于 fetch 的封装，返回 Promise

const delay = millisecond => {
  return new Promise(resolve => {
    setTimeout(resolve, millisecond)
  })
}
export default {
  namespace: 'puzzlecards',
  state: {
    data: [
      // {
      //   id: 1,
      //   setup: 'Did you hear about the two silk worms in a race?',
      //   punchline: 'It ended in a tie'
      // },
      // {
      //   id: 2,
      //   setup: "What happens to a frog's car when it breaks down?",
      //   punchline: 'It gets toad away'
      // },
      // {
      //   id: 3,
      //   setup: "What happbxcbxcbens to a frog's car when it breaks down?",
      //   punchline: 'It gets toaxcvxcvxcvd away'
      // }
    ],
    counter: 100
  },
  effects: {
    *queryInitCards(_, sagaEffects) {
      const { call, put } = sagaEffects
      // const endPointURI =
      //   'http://114.116.89.193:8999/test/cardList'
      const endPointURI = '/test/cardList'
      try {
        // 加入 try catch 捕获抛错
        const puzzle = yield call(request, endPointURI)
        yield put({ type: 'addNewCard', payload: puzzle })

        yield call(delay, 3000)

        const puzzle2 = yield call(request, endPointURI)

        console.log(puzzle, puzzle2)
        yield put({ type: 'addNewCard', payload: puzzle2 })
      } catch (e) {
        message.error('数据获取失败') // 打印错误信息
      }
    }
  },
  reducers: {
    addNewCard(state, { payload: newCard }) {
      const nextCounter = state.counter + 1
      const newCardWithId = { ...newCard, id: nextCounter }
      // const nextData = state.data.concat(newCardWithId);
      const nextData = [...state.data, newCardWithId]
      return {
        data: nextData,
        counter: nextCounter
      }
    }
  }
}
