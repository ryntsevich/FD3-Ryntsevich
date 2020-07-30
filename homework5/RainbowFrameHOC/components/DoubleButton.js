import React from 'react';
import './DoubleButton.css';

class DoubleButton extends React.Component {

    pressed = (event) => {
        this.props.cbPressed(event.target.value);
    }

    render() {
        return (
            <div className="doubleButton">
                <button className="doubleButton_btn" value={this.props.caption1} onClick={this.pressed}>{this.props.caption1}</button>
                {this.props.children}
                <button className="doubleButton_btn" value={this.props.caption2} onClick={this.pressed}>{this.props.caption2}</button>
            </div>
        )
    }
}

export default DoubleButton;