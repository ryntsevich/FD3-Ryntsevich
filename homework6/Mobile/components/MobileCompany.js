import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import ClientInfo from './ClientInfo';
import { clientEvents } from './events';


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
    modeFilter: 0,
    modeAdd: 0, //1-add, 2-edit
    editClient: null
  };

  componentDidMount = () => {
    clientEvents.addListener('Delete', this.deleteClient);
    clientEvents.addListener('Save', this.saveClient);
    clientEvents.addListener('Edit', this.editClient);
    clientEvents.addListener('Cancel', this.cancelClient);
  };

  componentWillUnmount = () => {
    clientEvents.removeListener('Delete', this.deleteClient);
    clientEvents.removeListener('Save', this.saveClient);
    clientEvents.removeListener('Edit', this.editClient);
    clientEvents.removeListener('Cancel', this.cancelClient);

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
    this.setState({ clients: clients });
  }

  addClient = () => {
    this.setState({ modeAdd: 1 });
  }

  saveClient = (id, surname, balance) => {
    let clients = [...this.state.clients];
    if (this.state.modeAdd === 1) {
      let newClient = { id: clients.length + 2, surname: surname, balance: parseInt(balance) };
      clients = [...clients, newClient];
    }
    if (this.state.modeAdd === 2) {
      clients.forEach((client, i) => {
        if (client.id == id) {
          let client = { ...client };
          client.id = id;
          client.surname = surname;
          client.balance = parseInt(balance);
          clients[i] = client;
        }
      })
    };
    this.setState({ modeAdd: 0, clients: clients });
  };

  editClient = (id) => {
    let editClient = this.state.clients.find(client => {
      return (client.id === id);
    });
    this.setState({
      editClient: editClient,
      modeAdd: 2,
    });
  }

  cancelClient = () => {
    let clients = [...this.state.clients];
    this.setState({ modeAdd: 0, clients: clients });
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
        <div className="MobileCompanyName">Компания &laquo;{this.state.nameCompany}&raquo;</div>
        <button onClick={this.chooseAll}>Все</button>
        <button onClick={this.chooseActive}>Активные</button>
        <button onClick={this.chooseBlocked}>Заблокированные</button>
        <div className="MobileCompanyClients">
          {clientsCode}
        </div>
        <button onClick={this.addClient}>Добавить клиента</button>
        {(this.state.modeAdd === 1) && <ClientInfo key={this.state.clients.length + 1}
          mode={this.state.modeAdd}
          id={this.state.clients.length + 1}
          surname=''
          balance='' />
        }

        {(this.state.modeAdd === 2) && <ClientInfo key={this.state.editClient.id}
          mode={this.state.modeAdd}
          id={this.state.editClient.id}
          surname={this.state.editClient.surname}
          balance={this.state.editClient.balance} />
        }
      </div>
    );
  }
}

export default MobileCompany;
