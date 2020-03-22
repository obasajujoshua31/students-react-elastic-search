import React, { useState, useEffect, useContext } from "react";
import { context } from "../store/store";
import { Link, withRouter } from "react-router-dom";
import { getAuthor } from "../store/action";
import SearchSpinner from "./SearchSpinner";

function Navbar({ children, history, location }) {
  const [actor, setActor] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchValue, setSearch] = useState("");

  const { store, dispatch } = useContext(context);

  useEffect(() => {
    return () => {
      if (searchValue === "") {
        setLoading(false);
      }
    };
  }, [searchValue, actor, history]);

  useEffect(() => {
    return () => {};
  }, [actor]);

  function goToSearch() {
    if (history.pathname === "search") {
      return;
    }

    history.push("/search");
  }

  async function SearchUser(e) {
    if (e.target.value === "") {
      return;
    }
    setSearch(e.target.value);
    getAuthor(e.target.value, dispatch);
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          Home
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="#">
                Directors
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/actors">
                Actors
              </Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onKeyUp={setSearch}
              onChange={SearchUser}
              onFocus={goToSearch}
            />
            {isLoading && <SearchSpinner />}
          </form>
        </div>
      </nav>
      {children}
    </div>
  );
}

export default withRouter(Navbar);
