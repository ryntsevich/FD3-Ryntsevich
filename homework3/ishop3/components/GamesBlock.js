import React from 'react';
import PropTypes from 'prop-types';

import './GamesBlock.css';

import GameBlock from './GameBlock';

class GamesBlock extends React.Component {

    static propTypes = {
        nameShop: PropTypes.string.isRequired,
        games: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                nameGame: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                imgGame: PropTypes.string.isRequired,
                count: PropTypes.number.isRequired,
            })
        ).isRequired
    };

    state = {
        selectedId: 0,
        currentGames: this.props.games
    };

    selectGame = (id) => {
        this.setState({ selectedId: id });
    };

    deleteGame = (id) => {
        this.setState({ currentGames: this.state.currentGames.filter(game => game.id != id) });
    };

    render() {
        let gamesHTML = this.state.currentGames.map(game => {
            return <GameBlock
                key={game.id}
                id={game.id}
                img={game.imgGame}
                title={game.nameGame}
                price={game.price}
                count={game.count}
                cbSelectGame={this.selectGame}
                selectedId={this.state.selectedId}
                cbDeleteGame={this.deleteGame}
            />
        });

        return (
            <div className="gamesBlock">
                <div className="titleShop">{this.props.nameShop}</div>
                <div className="games">{gamesHTML}</div>
            </div>
        )
    }
}

export default GamesBlock;

