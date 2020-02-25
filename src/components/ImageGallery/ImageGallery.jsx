import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"
import Modal from "../Modal/Modal"
import styles from "./ImageGalerry.module.css"
import PropTypes from 'prop-types';

export default class ImageGallery extends Component {
  state = {
    isModalOpen: false,
    currentImg: ""
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.images !== this.props.images && prevProps.images.length) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  openModal = (imgSrc) => this.setState({ isModalOpen: true, currentImg: imgSrc })


  closeModal = () => this.setState({ isModalOpen: false })


  render() {
    const { isModalOpen, currentImg } = this.state
    const { images } = this.props
    return (
      <>
        <ul className={styles.ImageGallery}>
          {images.map(({ id, webformatURL, largeImageURL, tags }) =>
            <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} alt={tags} openModal={this.openModal} />)}
        </ul>
        {isModalOpen && <Modal img={currentImg} onClose={this.closeModal} />}
      </>
    )
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired
  }))
}
