import React from 'react';
import PropTypes from 'prop-types';




const ImageGalleryItem = ({ img, handleOpen }) => (
  <div 
    title={img.tags}
    key={img.id}
    subtitle={img.user}
    actionIcon={
      <button onClick={() => handleOpen(img.largeImageURL)}>
        show me this picture
      </button>
    }
  >
    <img  src={img.largeImageURL} alt="" />
  </div>
);

ImageGalleryItem.propTypes = {
  img: PropTypes.object.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default ImageGalleryItem;