import React from 'react';
import PropTypes from 'prop-types';

import { clientEvents } from './events';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    info: PropTypes.shape({
      id: PropTypes.number.isRequired,
      surname: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

  state = {
    info: this.props.info,
  };

  componentWillReceiveProps = (newProps) => {
    console.log('MobileClient id=' + this.props.info.id + ' componentWillReceiveProps');
    this.setState({ info: newProps.info });
  };

  deleteClient = () => {
    const deleteQuestion = confirm('Вы уверенны, что хотите удалить клиента?');
    if (deleteQuestion) {
      clientEvents.emit('Delete', this.props.info.id);
    }
  }

  editClient = () => {
    clientEvents.emit('Edit', this.props.info.id);
  }


  render() {

    console.log('MobileClient id=' + this.state.info.id + 'render');

    return (
      <div className="MobileClient">
        <div className="MobileClientSurname list">{this.state.info.surname}</div>
        <div className="MobileClientBalance list">{this.state.info.balance}</div>
        <div className={this.state.info.balance >= 0 ? "active list" : "blocked list"}>{this.state.info.balance >= 0 ? "Активный" : "Заблокированный"}</div>
        <div className="list"><button onClick={this.editClient}>Редактировать</button></div>
        <div className="list"><button onClick={this.deleteClient}>Удалить</button></div>
      </div>
    );

  }

}

export default MobileClient;
