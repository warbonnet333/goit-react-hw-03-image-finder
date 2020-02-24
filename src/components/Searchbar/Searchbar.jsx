import React from "react"
import styles from "./Searchbar.module.css"

const Searchbar = ({ query, handleSubmit, handleChange }) => (
  <header className={styles.Searchbar}>
    <form className={styles.SearchForm} onSubmit={handleSubmit}>
      <button type="submit" className={styles.SearchForm_button}>
        <span className={styles.SearchForm_button_label}>Search</span>
      </button>

      <input
        onChange={handleChange}
        className={styles.SearchForm_input}
        type="text"
        value={query}
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
)


export default Searchbar

