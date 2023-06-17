import { Link } from "react-router-dom";
import { BookShelf } from "src/components";
import { useData } from "src/contexts";

function Home() {
  const { books, categories } = useData();
  return (
    <div className="page">
      <Link className="btn link-text--primary" to={"/search"}>
        Search Books
      </Link>
      <div>
        {categories.map((cat, index) => {
          const filteredBooks = books.filter(
            ({ category }) => category === cat
          );
          return <BookShelf key={index} category={cat} books={filteredBooks} />;
        })}
      </div>
    </div>
  );
}

export { Home };
