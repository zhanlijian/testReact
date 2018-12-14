import React, { Component } from 'react';
import { Card, Button } from 'antd';
import obj from '../modules/puzzlecards';
import { connect } from 'dva';

const namespace = 'puzzlecards';

const mapStateToProps = (state) => {
  console.log(state, obj, 111)
  const cardList = state[namespace].data;
//   const cardList = obj.state.data;
  return {
    cardList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAdd: (newCard) => {
      const action = {
        type: `${namespace}/addNewCard`,
        payload: newCard,
      };
      dispatch(action);
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class PuzzleCardsPage extends Component {
    constructor(props){
        super(props)
    }

    render() {
      return (
        <div>
          {
            this.props.cardList.map(card => {
              return (
                <Card key={card.id} style={{marginBottom:'15px'}}>
                  <div>Q: {card.setup}</div>
                  <div>
                    <strong>A: {card.punchline}</strong>
                  </div>
                </Card>
              );
            })
          }
          <div>
            <Button onClick={() => this.props.onClickAdd({
              setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              punchline: 'here we use dva',
            })}> 添加卡片 </Button>
          </div>
        </div>
      );
    }
  }