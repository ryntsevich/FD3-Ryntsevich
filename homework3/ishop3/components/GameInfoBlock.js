import React from 'react';
import PropTypes from 'prop-types';


import './GameInfoBlock.css';

class GameInfoBlock extends React.Component {

    static propTypes = {
        selectedGame: PropTypes.object.isRequired,
        statusMode: PropTypes.number.isRequired
    };

    render() {
        return (
            <div className="gameInfo" hidden={this.props.statusMode !== 1}>
                <div className="gameInfo_title">Карта товара</div>
                <div className="gameInfo_description">
                    <p>Название игры: {this.props.selectedGame.nameGame}</p>
                    <p>Ссылка на изображение: {this.props.selectedGame.imgGame}</p>
                    <p>Стоимость игры: {this.props.selectedGame.price}</p>
                    <p>Осталось коробок: {this.props.selectedGame.count}</p>
                </div>
            </div>
        )
    }

}

export default GameInfoBlock;