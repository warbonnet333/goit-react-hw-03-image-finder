import React, { Component, createRef } from "react";
import styles from "./Modal.module.css"
import PropTypes from 'prop-types';

export default class Modal extends Component {
  modalRef = createRef()

  componentDidMount() {
    window.addEventListener("keydown", this.keyCloseModal)
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.keyCloseModal)
  }

  handleCloseModal = ({ target }) => {
    const { current } = this.modalRef
    if (current !== target) return
    this.props.onClose()
  }

  keyCloseModal = ({ code }) => {
    if (code !== 'Escape') return
    this.props.onClose()
  }



  render() {
    const { img } = this.props
    return (
      <div className={styles.Overlay} ref={this.modalRef} onClick={this.handleCloseModal}>
        <div className={styles.Modal}>
          <img src={img} alt="" />
        </div>
      </div>
    )
  }

}

Modal.propTypes = {
  img: PropTypes.string.isRequired
}