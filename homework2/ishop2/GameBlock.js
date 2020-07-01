var GameBlock = React.createClass({

    displayName: 'GameBlock',

    propTypes: {
        id: React.PropTypes.number.isRequired,
        img: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        count: React.PropTypes.number.isRequired,
        cbSelectGame: React.PropTypes.func.isRequired,
        selectedId: React.PropTypes.number.isRequired,
        cbDeleteGame: React.PropTypes.func.isRequired
    },

    selectGame: function () {
        this.props.cbSelectGame(this.props.id);
    },

    deleteGame: function () {
        var question = confirm('Do you really want to delete this game?');
        question && this.props.cbDeleteGame(this.props.id);
    },

    render: function () {
        return React.DOM.div({ className: this.props.selectedId == this.props.id ? 'game selected' : 'game', onClick: this.selectGame },
            React.DOM.img({ src: this.props.img }),
            React.DOM.div({ className: 'nameGame' }, this.props.title),
            React.DOM.div({ className: 'properties' },
                React.DOM.div({ className: 'properties_price' }, 'Стоимость: ' + this.props.price + ' руб.'),
                React.DOM.div({ className: 'properties_count' }, 'Осталось коробок: ' + this.props.count)
            ),
            React.DOM.button({ className: 'btn-delete', onClick: this.deleteGame }, 'Delete')
        );
    }
});