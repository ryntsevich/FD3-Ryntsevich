import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let companyName = 'Velcom';
let clientsArr = [
    { id: 1, surname: 'Иванов', balance: 200 },
    { id: 2, surname: 'Сидоров', balance: 250 },
    { id: 3, surname: 'Петров', balance: 180 },
    { id: 4, surname: 'Григорьев', balance: -220 },
];

ReactDOM.render(
    <MobileCompany
        nameCompany={companyName}
        clients={clientsArr}
    />
    , document.getElementById('container')
);


