import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import ClientInfo from './ClientInfo';
import {clientEvents} from './events';


import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    nameCompany: PropTypes.string.isRequired,
    clients: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        surname: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    nameCompany: this.props.nameCompany,
    clients: this.props.clients,
    modeFilter: 0
  };

  componentDidMount = () => {
    clientEvents.addListener('Delete', this.deleteClient);
  };

  componentWillUnmount = () => {
    clientEvents.removeListener('Delete', this.deleteClient);
  };

  setNameCompany1 = () => {
    this.setState({ nameCompany: 'МТС' });
  };

  setNameCompany2 = () => {
    this.setState({ nameCompany: 'Velcom' });
  };

  setBalance = (clientId, newBalance) => {
    let changed = false;
    let newClients = [...this.state.clients];
    newClients.forEach((c, i) => {
      if (c.id == clientId && c.balance != newBalance) {
        let newClient = { ...c };
        newClient.balance = newBalance;
        newClients[i] = newClient;
        changed = true;
      }
    });
    if (changed)
      this.setState({ clients: newClients });
  };

  chooseAll = () => {
    this.setState({ modeFilter: 0 });
  }
  chooseActive = () => {
    this.setState({ modeFilter: 1 });
  }
  chooseBlocked = () => {
    this.setState({ modeFilter: 2 });
  }

  deleteClient = (id) => {
    let clients = [...this.state.clients];
    clients = clients.filter(client => client.id !== id);
    this.setState({clients: clients} );
  }

  render() {

    console.log('MobileCompany render');

    let clientsCode = this.state.clients.filter(client => {
      if (this.state.modeFilter === 1) {
        return client.balance >= 0;
      }
      else if (this.state.modeFilter === 2) {
        return client.balance < 0;
      }
      else {
        return client;
      }
    });

    clientsCode = clientsCode.map(client =>
      <MobileClient key={client.id} info={client} />
    );

    return (
      <div className="MobileCompany">
        <button value="МТС" onClick={this.setNameCompany1}>MTC</button>
        <button value="Velcom" onClick={this.setNameCompany2}>Velcome</button>
        <div className="MobileCompany">Компания &laquo;{this.state.nameCompany}&raquo;</div>
        <button onClick={this.chooseAll}>Все</button>
        <button onClick={this.chooseActive}>Активные</button>
        <button onClick={this.chooseBlocked}>Заблокированные</button>
        <div className="MobileCompanyClients">
          {clientsCode}
        </div>
        <button>Добавить клиента</button>
        <ClientInfo />
      </div>
    )
      ;

  }

}

export default MobileCompany;
