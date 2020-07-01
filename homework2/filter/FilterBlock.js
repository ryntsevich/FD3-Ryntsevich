var FilterBlock = React.createClass({

    displayName: 'FilterBlock',

    getInitialState: function () {
        return {
            list: this.props.content,
            isChecked: false,
            filterValue: ''
        };
    },

    updateList: function () {
        var updetedList = this.props.content.slice();
        if (this.state.filterValue) {
            var state = this.state.filterValue;
            updetedList = updetedList.filter(function (item) {
                return item.text.toLowerCase().indexOf(state) !== -1;
            });
        }

        updetedList = this.state.isChecked ? updetedList.sort(this.compareString) : updetedList;

        this.setState({ list: updetedList });
    },

    compareString: function (a, b) {
        if (a.text < b.text)
            return -1;
        if (a.text > b.text)
            return 1;
        return 0;
    },

    resetList: function () {
        this.setState({ isChecked: false, filterValue: '' }, this.updateList);
    },

    changeCheckboxStatus: function (event) {
        this.setState({ isChecked: event.target.checked }, this.updateList);
    },

    changeInputTextValue: function (event) {
        this.setState({ filterValue: event.target.value }, this.updateList);
    },

    render: function () {
        var listHTML = this.state.list.map(function (item) {
            return React.DOM.option({ key: item.id, }, item.text);
        });

        return React.DOM.div({ className: 'filterBlock' },
            React.DOM.input({ type: 'checkbox', checked: this.state.isChecked, onChange: this.changeCheckboxStatus }),
            React.DOM.input({ type: 'text', value: this.state.filterValue, onChange: this.changeInputTextValue }),
            React.DOM.button({ className: 'btnReset', onClick: this.resetList }, 'Сброс'),
            React.DOM.div({ className: 'containerList' }, React.DOM.select({ className: 'list', multiple: true }, listHTML))
        );
    }
});