import React from "react";
import styles from "./LoadButton.module.css";

const LoadButton = ({ onClick }) => <button className={styles.Button} type="button" onClick={onClick} > Load more</button>

export default LoadButton