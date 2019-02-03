import React, { Component } from 'react';
import './Card.scss';
import Background from '../../images/cat.png';


export default class Card extends Component {

    state = {
        active: false,
        missing: false,
        count: 10,
        countWeight: '0,5',
        present: 0,
        mouse: 'мышь',
        happy: '',
        expo: 'Сказочное заморское яство',
    }

    onActivated = (e) => {
        e.stopPropagation();
        const { quantity, expoDefault } = this.props.data;

        this.setState(({ missing, active,happy }) => {

            if (missing) {
                return {
                    active: false,
                    missing: false,
                    count: quantity,
                    countWeight: '0,5',
                    present: '',
                    mouse: 'мышь',
                    happy: '',
                }
            }

            return {
                active: !active,
                expo: expoDefault,
                happy: happy,
            }
        })
    }

    onAddItem = (e) => {
        e.stopPropagation();
        const { quantity, total, weight, declension, expoDefault, customerSatisfied } = this.props.data;

        let countPresent, happy;

        this.setState(({ count, countWeight }) => {

            if ((count + quantity) < 35) {
                countPresent = 1
            } else if ((count + quantity) > 35 && (count + quantity) < 98) {
                countPresent = 2
            }
            else if ((count + quantity) > 98) {
                countPresent = 5;
                happy = customerSatisfied;
            };

            if (count >= total) {
                return {
                    count: total,
                    missing: true,
                    active: false,
                }
            };

            let num = +countWeight.toString().replace(/(\.|\s)|(,)/g, () => ',' ? "." : ".");
            let comma = (num + weight).toString().replace('.', ',');

            return {
                count: count + quantity,
                active: true,
                countWeight: comma,
                present: countPresent,
                happy: happy,
                expo: expoDefault,
            }
        }, () => this.onChangeDeclension(countPresent, declension))
    }

    onChangeDeclension = (number, titles) => {
        this.setState(() => {
            let cases = [2, 0, 1, 1, 1, 2];
            let result = titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];

            return {
                mouse: result,
            }
        })
    }

    hoverActivated = () => {
        const { active } = this.state;
        const { expoUnchecked } = this.props.data;

        this.setState(() => {

            if (active) {
                return ({
                    expo: expoUnchecked,
                })
            }
        })
    }

    hoverDeactivated = (e) => {
        e.stopPropagation();
        const { expoDefault } = this.props.data;

        this.setState(() => {
            return ({
                expo: expoDefault,
            })
        })
    }


    render() {
        const { id, name, filling, text, textActive, textMisssing, expoUnchecked } = this.props.data;
        const { active, count, missing, countWeight, present, mouse, happy, expo } = this.state;

        let status;
        let colorExpo = {};

        if ((missing === false) && (active === false)) {
            status = '';
        } else if ((missing === false) && (active === true)) {
            status = 'active';
        } else if ((missing === true) && (active === false)) {
            status = 'missing';
        } else if ((missing === true) && (active === true)) {
            status = 'missing';
        };

        if (expo === expoUnchecked) {
            colorExpo.color = '#e62e7a';
        };

        return (
            <div className={`card ${status}`} key={id} onClick={this.onActivated}>
                <div className='card__inner' onMouseEnter={this.hoverActivated} onMouseLeave={this.hoverDeactivated} >
                    <div className="card-header">
                        <div className='card-header__corner'></div>
                        <p className='card__expo' style={colorExpo}> {expo} </p>
                    </div>

                    <div className='card__bottom' style={{ backgroundImage: `url(${Background})` }}>
                        <div className='disabled'></div>

                        <div className='card__container'>

                            <h2 className='card__title'>{name}</h2>
                            <p className='card__filling'>{filling}</p>

                            <ul className='card__desc'>
                                <li className='card__text'> <span className='card__portions'>{count}</span> порций</li>

                                {
                                    present > 1 && <li className='card__text'> {present} <span className='card__present'> </span>  {mouse} в подарок</li>
                                }

                                {
                                    present < 2 && <li className='card__text'> <span className='card__present'> </span>  {mouse} в подарок</li>
                                }

                                <li className='card__text'>{happy}</li>
                            </ul>
                        </div>

                        <div className='round' onClick={this.onAddItem}>
                            <div className='round__count'>{countWeight}</div>
                            <div className='round__weight'>кг</div>
                        </div>

                    </div>
                </div>

                {
                    !active && !missing && <div className='under-card'> <p className='under-card__text'>{text} <button className='button' onClick={this.onActivated}> купи.</button></p></div>
                }

                {
                    active && <div className='under-card'> <p className='under-card__text'>{textActive}</p></div>
                }

                {
                    missing && <div className='under-card'> <p className='under-card__text under-card__text_yellow'>{textMisssing}</p></div>
                }
            </div>
        )
    }
}