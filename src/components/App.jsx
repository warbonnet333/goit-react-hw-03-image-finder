import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar"
import ImageGallery from "./ImageGallery/ImageGallery"
import LoadButton from "./LoadButton/LoadButton"
import Spinner from "./Spinner/Spinner"

import KEY from "./services/base"
import baseUrl from './services/url'
const axios = require('axios');



export default class App extends Component {
  state = {
    images: [],
    page: 1,
    query: "",
    prevQuery: "",
    isLoaded: false,
    largeLoaded: false
  }

  fetchImages = (query, page = 1) => {
    axios
      .get(baseUrl(query, page, KEY))
      .then(({ data }) => this.setImages(data))
      .catch(console.log)
      .finally(() => { this.setState({ isLoaded: false, largeLoaded: false }) })
  }

  setImages = ({ hits }) => this.setState(({ images }) => (images.length ? { images: [...images, ...hits] } : { images: hits }))

  handleChange = ({ target }) => {
    this.setState({ query: target.value, page: 1 })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.setState({ images: [], largeLoaded: true })
    const { query, page } = this.state
    this.fetchImages(query, page)
    this.setState({ prevQuery: query, query: "" })
  }

  loadMore = async () => {
    await this.setState(({ page }) => ({ page: page + 1, isLoaded: true }));
    const { prevQuery, page } = this.state
    this.fetchImages(prevQuery, page)
  }



  render() {
    const { images, query, isLoaded, largeLoaded } = this.state
    return (
      <>
        <Searchbar query={query} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        {largeLoaded && <Spinner />}
        {!!images.length &&
          <>
            < ImageGallery images={images} />
            {isLoaded ? <Spinner /> : <LoadButton onClick={this.loadMore} />}
          </>}

      </>
    )
  }
}