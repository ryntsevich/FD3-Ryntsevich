import React from 'react';
import PropTypes from 'prop-types';


import './GameBlock.css';

class GameBlock extends React.Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        cbSelectGame: PropTypes.func.isRequired,
        selectedId: PropTypes.number.isRequired,
        cbDeleteGame: PropTypes.func.isRequired
    };

    selectGame = () => {
        this.props.cbSelectGame(this.props.id);
    };

    deleteGame = () => {
        const question = confirm('Do you really want to delete this game?');
        question && this.props.cbDeleteGame(this.props.id);
    };

    render() {
        return (
            <div className={this.props.selectedId == this.props.id ? "game selected" : "game"} onClick={this.selectGame}>
                <img src={this.props.img} />
                <div className="nameGame">{this.props.title}</div>
                <div className="properties">
                    <div className="properties_price">Стоимость: {this.props.price} руб.</div>
                    <div className="properties_count">Осталось коробок: {this.props.count}</div>
                </div>
                <button className="btn-delete" onClick={this.deleteGame}>Delete</button>
            </div>
        )
    }
}

export default GameBlock;
