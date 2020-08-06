import React from 'react';
import PropTypes from 'prop-types';

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

  render() {

    console.log('MobileClient id=' + this.state.info.id + 'render');

    return (
      <div className="MobileClient">
        <div className="MobileClientSurname list">{this.state.info.surname}</div>
        <div className="MobileClientBalance list">{this.state.info.balance}</div>
        <div className={this.state.info.balance >= 0 ? "active list" : "blocked list"}>{this.state.info.balance >= 0 ? "Активный" : "Заблокированный"}</div>
        <div className="list"><button>Редактировать</button></div>
        <div className="list"><button >Удалить</button></div>

        {/* <button>Удалить</button> */}
      </div>
    );

  }

}

export default MobileClient;
