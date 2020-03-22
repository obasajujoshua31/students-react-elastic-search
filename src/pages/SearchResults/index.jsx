import React, { useContext } from "react";
import { context } from "../../store/store";
import SearchResults from "../../components/SearchResults";
import Navbar from "../../components/Navbar";

function SearchResultPage() {
  const {
    store: { actors },
    dispatch,
  } = useContext(context);

  return (
    <Navbar>
      <div className="container">
        <SearchResults actors={actors} />
      </div>
    </Navbar>
  );
}

export default SearchResultPage;
