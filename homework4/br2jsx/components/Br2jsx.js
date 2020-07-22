import React from 'react';
import PropTypes from 'prop-types';

import './Br2jsx.css';

export default props => {
    const regexp = /<br ?\/?>/igm,
        array = props.text.split(regexp),
        newArray = [];

    array.forEach((elem, i) => {
        (i !== array.length - 1) ? newArray.push(elem, <br key={i} />) : newArray.push(elem)
    });

    return <div className="br2jsx">{newArray}</div>;
}