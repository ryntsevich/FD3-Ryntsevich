import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let companyName = 'Velcom';
let clientsArr = [
    { id: 101, surname: 'Иванов', balance: 200 },
    { id: 105, surname: 'Сидоров', balance: 250 },
    { id: 110, surname: 'Петров', balance: 180 },
    { id: 120, surname: 'Григорьев', balance: -220 },
];

ReactDOM.render(
    <MobileCompany
        nameCompany={companyName}
        clients={clientsArr}
    />
    , document.getElementById('container')
);


