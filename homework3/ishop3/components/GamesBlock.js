import React from 'react';
import PropTypes from 'prop-types';

import './GamesBlock.css';

import GameBlock from './GameBlock';
import GameInfoBlock from './GameInfoBlock';
import GameEditBlock from './GameEditBlock';

class GamesBlock extends React.Component {

    static propTypes = {
        nameShop: PropTypes.string.isRequired,
        games: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                nameGame: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                imgGame: PropTypes.string.isRequired,
                count: PropTypes.number.isRequired
            })
        ).isRequired
    };

    state = {
        selectedId: '',
        currentGames: this.props.games,
        statusMode: 0,
        blockChange: false,
        add: false,
        key: '5'
    };

    selectGame = (id) => {
        this.setState({ selectedId: id, statusMode: 1 });
    };

    setDeleteCode = (id) => {
        this.setState({selectedId: id}, this.deleteGame)
    }

    deleteGame = () => {
        this.setState({ currentGames: this.state.currentGames.filter(game => game.id != this.state.selectedId), statusMode:0, selectedId: '' });
    };

    editGame = (id) => {
        this.setState({ selectedId: id, statusMode: 2, key: ++this.state.key, add: false});
    }
    isChange = () => {
        this.setState({ blockChange: true });
    }

    cancelEdit = () => {
        this.setState({ statusMode: 0, blockChange: false, add: false });
    }

    addNewGame = () => {
        let key = ++this.state.key;
        let newKey = String(key);
        this.setState({ statusMode: 2, key: newKey, add: true });
    }

    changeGame = (newGame) => {
        let games;
        if (this.state.add) {
            let game = { ...newGame, id: this.state.key };
            games = this.state.currentGames.slice();
            games.push(game);
        } else {
            games = this.state.currentGames.map(game => game.id == newGame.id ? newGame : game);
        }
        this.setState({ currentGames: games, blockChange: false, statusMode: 0, add: false });
    }

    render() {
        let gamesHTML = this.state.currentGames.map(game => {
            return <GameBlock
                key={game.id}
                id={game.id}
                img={game.imgGame}
                nameGame={game.nameGame}
                price={game.price}
                count={game.count}
                isSelected={game.id == this.state.selectedId}
                cbSelectGame={this.selectGame}
                selectedId={this.state.selectedId}
                cbDeleteGame={this.setDeleteCode}
                statusMode={this.state.statusMode}
                cbEditGame={this.editGame}
                cbisChange={this.isChange}
                blocked={this.state.blockChange}
                add={this.state.add}
            />
        });

        let selectedGame = this.state.currentGames.find(game => game.id == this.state.selectedId);
        let emptyNewGame = {
            id: this.state.key,
            name: '',
            img: '',
            price: '',
            count: ''
        };

        return (
            <div className="gamesBlock">
                <div className="titleShop">{this.props.nameShop}</div>
                <div className="games">{gamesHTML}</div>
                <button className="btn-create" onClick={this.addNewGame} disabled={this.state.blockChange}>New Game</button>
                {this.state.selectedId && <GameInfoBlock selectedGame={selectedGame} statusMode={this.state.statusMode}/>}
                {(this.state.selectedId || this.state.add) && <GameEditBlock
                    key={this.state.key}
                    selectedGame={this.state.add ? emptyNewGame : selectedGame}
                    statusMode={this.state.statusMode}
                    add={this.state.add}
                    cbIsChange={this.isChange}
                    cbChangeGame={this.changeGame}
                    cbCancelEdit={this.cancelEdit} />}
            </div>
        )
    }
}

export default GamesBlock;

