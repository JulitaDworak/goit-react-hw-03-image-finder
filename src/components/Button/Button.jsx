
import { Component } from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Button extends Component {
  handleClick = e => {
    if (this.props.onClick) {
      this.props.onClick(e);
    } else {
      toast.info('Brak więcej grafik');
    }
  };

  render() {
    return (
      <button type="button" onClick={this.handleClick} className={css.Button}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
};
