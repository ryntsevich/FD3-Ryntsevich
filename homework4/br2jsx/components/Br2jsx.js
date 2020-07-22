import React from 'react';
import PropTypes from 'prop-types';

import './Br2jsx.css';

class Br2jsx extends React.Component {

    render() {
        return (
            <div className="br2jsx">{this.props.text}</div >
        )
    }
}

export default Br2jsx;