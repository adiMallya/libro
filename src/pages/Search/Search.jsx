import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

import { BookCard } from "src/components";
import { getFilteredData } from "src/utils/filterArray";
import { useData } from "src/contexts";
import styles from "./Search.module.css";

function Search() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const { books, search, dispatch } = useData();

  const filteredBooks = getFilteredData(books, search);

  const searchHandler = () => {
    if (input.length > 1 && input !== "") {
      dispatch({
        type: "SEARCH",
        payload: input,
      });
    }
  };

  return (
    <div className="page">
      <div className={styles.pageHeader}>
        <FontAwesomeIcon
          className={styles.backBtn}
          icon={faArrowCircleLeft}
          onClick={() => navigate("/")}
          title="Return To Home"
        ></FontAwesomeIcon>
        <label htmlFor="search" className={styles.searchBar}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Type to search"
            name="search"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={searchHandler}
          />
        </label>
      </div>
      <div className="grid-view">
        {filteredBooks.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
}

export { Search };
