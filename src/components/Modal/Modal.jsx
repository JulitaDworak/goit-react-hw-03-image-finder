import React from 'react';
import PropTypes from 'prop-types';



const Modal = ({ open, handleClose, currentImg }) => {
  const actions = [
    <button label="Close" primary={true} onClick={handleClose}></button>,
  ];

  return (
    <div
      actions={actions}
      modal={false}
      open={open}
      onRequestClose={handleClose}
    >
      <img src={currentImg} alt="" style={{ width: '100%' }} />
    </div>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  currentImg: PropTypes.string.isRequired,
};

export default Modal;