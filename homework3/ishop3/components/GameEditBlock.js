import React from 'react';
import PropTypes from 'prop-types';


import './GameEditBlock.css';

class GameEditBlock extends React.Component {

    static propTypes = {
        selectedGame: PropTypes.object.isRequired,
        add: PropTypes.bool.isRequired,
        cbIsChange: PropTypes.func.isRequired,
        cbChangeGame: PropTypes.func.isRequired,
        cbCancelEdit: PropTypes.func.isRequired
    };

    state = {
        nameGame: this.props.selectedGame.nameGame,
        imgGame: this.props.selectedGame.imgGame,
        price: this.props.selectedGame.price,
        count: this.props.selectedGame.count,
        nameError: this.props.add,
        imgError: this.props.add,
        priceError: this.props.add,
        countError: this.props.add
    }

    changeInputValue = (event) => {
        this.props.cbIsChange();
        if (event.target.value.trim()) {
            this.setValue(event, false);
        } else {
            this.setValue(event, true);
        }
    }

    setValue = (event, error) => {
        switch (event.target.id) {
            case 'name':
                this.setState({ nameGame: event.target.value, nameError: error });
                break;
            case 'img':
                this.setState({ imgGame: event.target.value, imgError: error });
                break;
            case 'price':
                this.setState({ price: event.target.value, priceError: error });
                break;
            case 'count':
                this.setState({ count: event.target.value, countError: error });
                break;
        }
    }

    saveGame = (event) => {
        if (event.target.name == 'save') {
            this.props.cbChangeGame({
                ...this.props.selectedGame,
                nameGame: this.state.nameGame,
                imgGame: this.state.imgGame,
                price: this.state.price,
                count: this.state.count
            });
        } else {
            this.props.cbChangeGame({
                ...this.props.selectedGame,
                id: this.props.selectedGame.id,
                nameGame: this.state.nameGame,
                imgGame: this.state.imgGame,
                price: this.state.price,
                count: this.state.count
            });
        }
    }

    render() {
        return (
            <div className="gameEdit" >
                <div className="gameEdit_title">Режим {this.props.add ? "создания" : "редактирования"}</div>
                <div className="gameEdit_description">
                    <div className="game_item">
                        <label htmlFor="name">Название игры: </label> <input type="text" id="name" defaultValue={this.state.nameGame} onChange={this.changeInputValue} />
                        {this.state.nameError && <span className="error">Введите значение!</span>}
                    </div>
                    <div className="game_item">
                        <label htmlFor="img">Ссылка на изображение: </label> <input type="text" id="img" defaultValue={this.state.imgGame} onChange={this.changeInputValue} />
                        {this.state.imgError && <span className="error">Введите значение!</span>}
                    </div>
                    <div className="game_item">
                        <label htmlFor="price">Стоимость игры: </label><input type="text" id="price" defaultValue={this.state.price} onChange={this.changeInputValue} />
                        {this.state.priceError && <span className="error">Введите значение!</span>}
                    </div>
                    <div className="game_item">
                        <label htmlFor="count">Осталось коробок: </label><input type="text" id="count" defaultValue={this.state.count} onChange={this.changeInputValue} />
                        {this.state.countError && <span className="error">Введите значение!</span>}
                    </div>
                </div>
                <div className="buttonsEdit">
                    <button className="btn-save" disabled={this.state.nameError || this.state.imgError || this.state.priceError || this.state.countError} onClick={this.saveGame} value={this.props.add ? "add" : "save"}>Save</button>
                    <button className="btn-cancel" onClick={this.props.cbCancelEdit}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default GameEditBlock;