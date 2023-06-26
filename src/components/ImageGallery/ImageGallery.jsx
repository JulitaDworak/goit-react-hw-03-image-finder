import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridList } from 'material-ui';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

class ImageGallery extends Component {
  state = {
    open: false,
    currentImg: '',
    isLoading: false,
  };

  handleOpen = img => {
    this.setState({ open: true, currentImg: img });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    let imageListContent;
    const { images } = this.props;
    const { open, currentImg, isLoading } = this.state;

    if (images) {
        imageListContent = (
            <GridList cols={4}>
              {images.map((img) => (
                <ImageGalleryItem img={img} handleOpen={this.handleOpen} key={img.id} />
              ))}
            </GridList>
          );
          ;
    } else {
      imageListContent = <Loader />;
    }



    return (
      <div>
        {imageListContent}
        {isLoading && <Loader />}

        <Modal
          open={this.state.open}
          handleClose={this.handleClose}
          currentImg={this.state.currentImg}
        />
      </div>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
