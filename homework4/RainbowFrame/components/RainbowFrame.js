import React from 'react';
import PropTypes from 'prop-types';


const RainbowFrame = props => {
    return <div className='rainbowFrame'>{props.children}</div>;
}

RainbowFrame.propTypes = {
    colors: PropTypes.array.isRequired
};


export default RainbowFrame;

