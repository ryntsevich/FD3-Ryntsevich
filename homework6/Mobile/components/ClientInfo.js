import React from 'react';
import PropTypes from 'prop-types';
import {clientEvents} from './events';

import './ClientInfo.css';

class ClientInfo extends React.PureComponent {

    render() {
        return (

            <div className="clientInfo" >
                <div className="client_item">
                    id
                </div>
                <div className="client_item">
                    <label htmlFor="img">Фамилия: </label> <input type="text" id="img" />
                </div>
                <div className="client_item">
                    <label htmlFor="price">Статус: </label><input type="text" id="price" />
                </div>
                <div className="client_item">
                    <label htmlFor="count">Баланс: </label><input type="text" id="count" />
                </div>
            </div>
        )
    }
}

export default ClientInfo;




