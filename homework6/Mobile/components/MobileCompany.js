import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';

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
  };

  setNameCompany1 = () => {
    this.setState({ nameCompany: 'МТС' });
  };

  setNameCompany2 = () => {
    this.setState({ nameCompany: 'Velcom' });
  };

  setBalance = (clientId, newBalance) => {
    let changed = false;
    let newClients = [...this.state.clients]; // копия самого массива клиентов
    newClients.forEach((c, i) => {
      if (c.id == clientId && c.balance != newBalance) {
        let newClient = { ...c }; // копия хэша изменившегося клиента
        newClient.balance = newBalance;
        newClients[i] = newClient;
        changed = true;
      }
    });
    if (changed)
      this.setState({ clients: newClients });
  };


  setBalance1 = () => {
    this.setBalance(105, 230);
  };

  setBalance2 = () => {
    this.setBalance(105, 250);
  };

  render() {

    console.log('MobileCompany render');

    var clientsCode = this.state.clients.map(client =>
      <MobileClient key={client.id} info={client} />
    );

    return (
      <div className="MobileCompany">
        <button value="МТС" onClick={this.setNameCompany1}>MTC</button>
        <button value="Velcom" onClick={this.setNameCompany2}>Velcome</button>
        <div className="MobileCompany">Компания &laquo;{this.state.nameCompany}&raquo;</div>
        <button>Все</button>
        <button>Активные</button>
        <button>Заблокированные</button>
        <div className="MobileCompanyClients">
          {clientsCode}
        </div>
        <button>Добавить клиента</button>
      </div>
    )
      ;

  }

}

export default MobileCompany;
