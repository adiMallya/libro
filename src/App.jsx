import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Search } from "src/pages";
import "./App.css";
import { useData } from "src/contexts";
import { books, categories } from "src/utils/store";

function App() {
  const { dispatch } = useData();

  useEffect(() => {
    dispatch({ type: "INIT_DATA", payload: books });
    dispatch({ type: "INIT_CATEGORIES", payload: categories });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
