import React from "react";
import Loader from 'react-loader-spinner'
import styles from "./Spinner.module.css"

const Spinner = () =>
  <div className={styles.loader}>
    <Loader type="ThreeDots" />
  </div>

export default Spinner