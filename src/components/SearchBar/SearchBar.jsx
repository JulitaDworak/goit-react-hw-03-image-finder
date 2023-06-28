import React, { Component } from 'react';
import axios from 'axios';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';

class Search extends Component {
  state = {
    searchtext: '',
    amount: 12,
    apiURL: 'https://pixabay.com/api',
    apiKey: '35951390-f6c6ef4470c78e55c6c9cf8e4',
    images: [],
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    currentPage: 1, // aktualna strona obrazów;
  };

  onTextChange = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === '') {
        this.setState({ images: [] });
      } else {
        this.searchImages();
      }
    });
  };

  onAmountChange = (e, index, value) => this.setState({ amount: value });

  searchImages = () => {
    const { searchtext, amount, image_type, orientation, safesearch, currentPage } = this.state;

    axios
      .get(
        `${this.state.apiURL}/?key=${this.state.apiKey}&q=${searchtext}&image_type=${image_type}&per_page=${amount}&${orientation}&safesearch=${safesearch}&page=${currentPage}`
      )
      .then(res => {
        const newImages = [...this.state.images, ...res.data.hits]; // połącz obrazy z obecnej strony z nowo pobranymi obrazami
        this.setState({ images: newImages });
      })
      .catch(err => console.log(err));
  };

  loadMoreImages = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }), () => {
      this.searchImages();
    });
  };

  render() {
    console.log(this.state);
    return (
      <div >
        <input
          name="searchtext"
          value={this.state.searchtext}
          onChange={this.onTextChange}
          floatingLabelText="Search For Images"
          fullWidth={true}
          class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
        >
          </input>

        {this.state.images.length > 0 && (
          <ImageGallery images={this.state.images} />
        )}

        {this.state.images.length > 0 && (
          <Button onClick={this.loadMoreImages} />
        )}
      </div>
    );
  }
}

export default Search;
