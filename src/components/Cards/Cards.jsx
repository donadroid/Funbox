import React, { Component } from 'react';
import './Cards.scss';
import Card from '../Card'


export default class Cards extends Component {

    renderCards = () => {
        const { data } = this.props;
        let newsTemplate = null;

        if (data.length) {
            newsTemplate = data.map(function (item) {
                return <Card
                    key={item.id}
                    data={item}
                />
            })
        } else {
            newsTemplate = <p>К сожалению товаров нет</p>
        }

        return newsTemplate;
    }

    render() {

        return (
            <div className="cards">
                {this.renderCards()}
            </div>
        )
    }
}