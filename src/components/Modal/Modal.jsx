import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const Modal = ({ open, handleClose, currentImg }) => {
  const actions = [
    <FlatButton label="Close" primary={true} onClick={handleClose} />,
  ];

  return (
    <Dialog
      actions={actions}
      modal={false}
      open={open}
      onRequestClose={handleClose}
    >
      <img src={currentImg} alt="" style={{ width: '100%' }} />
    </Dialog>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  currentImg: PropTypes.string.isRequired,
};

export default Modal;
