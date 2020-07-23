import React from 'react';
import PropTypes from 'prop-types';


const RainbowFrame = props => {

    let content = props.children;
    props.colors.forEach((color, i) =>
        content = <div key={i} style={{ border: "solid 6px " + color, padding: "10px" }}>{content}</div>
    );

    return <div style={{ width: "400px", textAlign: "center" }}>{content}</div>;
}

RainbowFrame.propTypes = {
    colors: PropTypes.array.isRequired
};


export default RainbowFrame;

