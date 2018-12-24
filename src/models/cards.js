export default {
  namespace: 'cards',
  state: {
    statisticVisible: false,
    id: 1,
    result: [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 1150 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 }
    ],
    cardsList: [
      {
        name: '4235235',
        desc: '尽快给多少攻击速度',
        url: 'https://www.baidu.com',
        id: 1
      }
    ]
  },
  reducers: {
    addOne(state, { payload: values }) {
      values = { ...values, id: ++state.id }
      const cardsList = [...state.cardsList, values]
      return {
        cardsList
      }
    }
  }
}
