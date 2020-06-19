var GamesBlock = React.createClass({

    displayName: 'GamesBlock',

    render: function () {
        var gamesHTML = [];
        for (var i = 0; i < this.props.games.length; i++) {
            var game = this.props.games[i];
            var gameHTML = React.DOM.div({ key: game.id, className: 'game' },
                React.DOM.img({ src: game.imgGame }),
                React.DOM.div({ className: 'nameGame' }, game.nameGame),
                React.DOM.div({ className: 'properties' },
                    React.DOM.div({ className: 'properties_price' }, 'Стоимость: ' + game.price + ' руб.'),
                    React.DOM.div({ className: 'properties_count' }, 'Осталось коробок: ' + game.count)
                )
            );
            gamesHTML.push(gameHTML);
        }

        return React.DOM.div({ className: 'gamesBlock' },
            React.DOM.div({ className: 'titleShop' }, this.props.nameShop),
            React.DOM.div({ className: 'games' }, gamesHTML)
        );

    }

});