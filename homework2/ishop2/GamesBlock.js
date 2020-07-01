var GamesBlock = React.createClass({

    displayName: 'GamesBlock',

    propTypes: {
        nameShop: React.PropTypes.string.isRequired,
        games: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                id: React.PropTypes.number.isRequired,
                nameGame: React.PropTypes.string.isRequired,
                price: React.PropTypes.number.isRequired,
                imgGame: React.PropTypes.string.isRequired,
                count: React.PropTypes.number.isRequired,
            })
        ).isRequired
    },

    getInitialState: function () {
        return {
            selectedId: 0,
            currentGames: this.props.games
        };
    },

    selectGame: function (id) {
        this.setState({ selectedId: id });
    },

    deleteGame: function (id) {
        this.setState({
            currentGames: this.state.currentGames.filter(function (game) {
                return game.id != id;
            })
        });
    },

    render: function () {
        var self = this,
            gamesHTML = this.state.currentGames.map(function (game) {
                return React.createElement(GameBlock, {
                    key: game.id,
                    id: game.id,
                    img: game.imgGame,
                    title: game.nameGame,
                    price: game.price,
                    count: game.count,
                    cbSelectGame: self.selectGame,
                    selectedId: self.state.selectedId,
                    cbDeleteGame: self.deleteGame
                });
            });

        return React.DOM.div({ className: 'gamesBlock' },
            React.DOM.div({ className: 'titleShop' }, this.props.nameShop),
            React.DOM.div({ className: 'games' }, gamesHTML)
        );
    }
});