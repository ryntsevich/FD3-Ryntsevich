import React from 'react';
import PropTypes from 'prop-types';


import './GameBlock.css';

class GameBlock extends React.Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        nameGame: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        cbSelectGame: PropTypes.func.isRequired,
        selectedId: PropTypes.string.isRequired,
        cbDeleteGame: PropTypes.func.isRequired,
        statusMode: PropTypes.number.isRequired,
        cbEditGame: PropTypes.func.isRequired,
        blocked: PropTypes.bool.isRequired,
        add: PropTypes.bool.isRequired

    };

    selectGame = () => {
            this.props.cbSelectGame(this.props.id);
    };

    deleteGame = (event) => {
        const question = confirm('Do you really want to delete this game?');
        question && this.props.cbDeleteGame(this.props.id);
        event.stopPropagation();
    };

    editGame = (event) => {
        event.stopPropagation();
        this.props.cbEditGame(this.props.id);
    };

    render() {
        return (
            <div className={this.props.selectedId == this.props.id ? "game selected" : "game"} onClick={(this.props.blocked || this.props.add)? null : this.selectGame}>
                <img src={this.props.img} />
                <div className="nameGame">{this.props.nameGame}</div>
                <div className="properties">
                    <div className="properties_price">Стоимость: {this.props.price} руб.</div>
                    <div className="properties_count">Осталось коробок: {this.props.count}</div>
                </div>
                <button className="btn-edit" onClick={this.editGame} disabled={this.props.blocked}>Edit</button>
                <button className="btn-delete" onClick={this.deleteGame} disabled={this.props.blocked}>Delete</button>
            </div>
        )
    }
}

export default GameBlock;
