var GamesBlock = React.createClass({

    displayName: 'GamesBlock',

    render: function () {
        var games = this.props.games,
            gamesHTML = games.map(function (game) {
                return React.DOM.div({ key: game.id, className: 'game' },
                    React.DOM.img({ src: game.imgGame }),
                    React.DOM.div({ className: 'nameGame' }, game.nameGame),
                    React.DOM.div({ className: 'properties' },
                        React.DOM.div({ className: 'properties_price' }, 'Стоимость: ' + game.price + ' руб.'),
                        React.DOM.div({ className: 'properties_count' }, 'Осталось коробок: ' + game.count)
                    )
                );
            });

        return React.DOM.div({ className: 'gamesBlock' },
            React.DOM.div({ className: 'titleShop' }, this.props.nameShop),
            React.DOM.div({ className: 'games' }, gamesHTML)
        );
    }
});