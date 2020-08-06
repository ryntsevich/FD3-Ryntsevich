import React from 'react';
import PropTypes from 'prop-types';
import { clientEvents } from './events';

import './ClientInfo.css';

class ClientInfo extends React.PureComponent {
    static propTypes = {
        mode: PropTypes.number.isRequired,
        clients: PropTypes.shape({
            id: PropTypes.number.isRequired,
            surname: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,
        }),
    };

    newBalance = null;
    newSurname = null;

    setNewBalance = (ref) => {
        this.newBalance = ref
    }

    setNewSurname = (ref) => {
        this.newSurname = ref
    }

    saveClient = () => {
        let surname = this.newSurname.value;
        let balance = this.newBalance.value;
        clientEvents.emit('Save', this.props.id, surname, balance);
    }

    cancelClient = () => {
        clientEvents.emit('Cancel');
    }

    render() {
        return (

            <div className="clientInfo" >
                {(this.props.mode != 1) && <div className="client_item">
                    Id: {this.props.id}
                </div>
                }
                <div className="client_item">
                    <label htmlFor="surname">Фамилия: </label> <input type="text" id="surname" defaultValue={this.props.surname} ref={this.setNewSurname} />
                </div>
                <div className="client_item">
                    <label htmlFor="balance">Баланс: </label><input type="text" id="balance" defaultValue={this.props.balance} ref={this.setNewBalance} />
                </div>
                <div className="buttonsEdit">
                    <button className="btn-save" onClick={this.saveClient}>Save</button>
                    <button className="btn-cancel" onClick={this.cancelClient}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default ClientInfo;




