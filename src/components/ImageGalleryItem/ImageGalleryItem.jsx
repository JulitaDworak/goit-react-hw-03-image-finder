import React from 'react';
import PropTypes from 'prop-types';
import { GridTile } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';



const ImageGalleryItem = ({ img, handleOpen }) => (
  <GridTile
    title={img.tags}
    key={img.id}
    subtitle={img.user}
    actionIcon={
      <IconButton onClick={() => handleOpen(img.largeImageURL)}>
        <ZoomIn color="white" />
      </IconButton>
    }
  >
    <img src={img.largeImageURL} alt="" />
  </GridTile>
);

ImageGalleryItem.propTypes = {
  img: PropTypes.object.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default ImageGalleryItem;