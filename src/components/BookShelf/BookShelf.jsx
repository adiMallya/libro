import { BookCard } from "src/components";
import styles from "./BookShelf.module.css";

const BookShelf = ({ category, books }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{category}</h2>
      <div className="grid-view">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </section>
  );
};

export { BookShelf };
