import React, { Component, createRef } from "react";
import styles from "./ImageGalleryItem.module.css"

export default class ImageGalleryItem extends Component {
  listItemRef = createRef()

  showSrc = () => {
    const { current } = this.listItemRef
    this.props.openModal(current.dataset.sourse)
  }

  render() {
    const { webformatURL, largeImageURL, alt } = this.props
    return (
      <li className={styles.ImageGalleryItem} onClick={this.showSrc}>
        <img src={webformatURL} data-sourse={largeImageURL} alt={alt} ref={this.listItemRef} className={styles.ImageGalleryItem_image} />
      </li>
    )
  }
}
