import { useData } from "src/contexts";
import styles from "./BookCard.module.css";

const BookCard = ({ book }) => {
  const { categories, dispatch } = useData();
  const { _id, imgURL, title, author, category } = book;

  const moveToShelf = (bookId, selectedCategory) =>
    dispatch({
      type: "MOVE_TO_CATEGORY",
      payload: { _id: bookId, category: selectedCategory },
    });

  return (
    <div key={_id} className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={imgURL} alt={title} className="img-res" />
      </div>
      <div className={styles.cardInfo}>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardSubtitle}>{author}</p>
        <div>
          <p>Move to...</p>
          <ul className="list inline-list">
            {categories.map((category, idx) => (
              <button
                key={idx}
                className={`btn btn--primary-solid ${styles.cardBtn}`}
                onClick={() => moveToShelf(_id, category)}
              >
                {category}
              </button>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { BookCard };
