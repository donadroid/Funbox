import React, { Component } from 'react';
import './App.scss';
import Cards from '../Cards'



const data = [
  {
    name: 'Нямушка',
    expoDefault: 'Сказочное заморское яство',
    expoUnchecked: 'Котэ не одобряет?',
    filling: ' с фуа-гра',
    quantity: 10,
    total: 100,
    weight: 0.5,
    id: 1,
    text: 'Чего сидишь? Порадуй котэ,',
    textActive: 'Печень утки разварная с артишоками.',
    textMisssing: 'Печалька, с фуа-гра закончился.',
    declension: ['мышь', 'мыши', 'мышей'],
    customerSatisfied: 'заказчик доволен',
  },
  {
    name: 'Нямушка',
    expoDefault: 'Сказочное заморское яство',
    expoUnchecked: 'Котэ не одобряет?',
    filling: ' с рыбой',
    quantity: 10,
    total: 100,
    weight: 0.5,
    id: 2,
    text: 'Чего сидишь? Порадуй котэ,',
    textActive: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    textMisssing: 'Печалька, с рыбой закончился.',
    declension: ['мышь', 'мыши', 'мышей'],
    customerSatisfied: 'заказчик доволен',
  },
  {
    name: 'Нямушка',
    expoDefault: 'Сказочное заморское яство',
    expoUnchecked: 'Котэ не одобряет?',
    filling: ' с курой',
    quantity: 10,
    total: 100,
    weight: 0.5,
    id: 3,
    text: 'Чего сидишь? Порадуй котэ,',
    textActive: 'Филе из цыплят с трюфелями в бульоне.',
    textMisssing: 'Печалька, с курой закончился.',
    declension: ['мышь', 'мыши', 'мышей'],
    customerSatisfied: 'заказчик доволен',
  },
]


export default class App extends Component {

  render() {

    return (
      <div className="App" >
        <h1 className='App__title'>Ты сегодня покормил кота?</h1>
        <Cards data={data}/>
      </div>
    );
  }
}