import React from 'react';
import ReactDOM from 'react-dom';

import GamesBlock from './components/GamesBlock';

let nameShop = 'Магазин настольных игр';
let gamesArray = require('./games.json');

ReactDOM.render(
    <GamesBlock
        nameShop={nameShop}
        games={gamesArray} />,
    document.getElementById('container')
);

