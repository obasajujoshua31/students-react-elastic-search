import React from "react";
import { Link } from "react-router-dom";

function SearchResults({ actors }) {
  return (
    <div>
      {actors.length === 0 && <h3>No results found</h3>}
      {actors.length > 0 &&
        actors.map(actor => (
          <ul className="list-group">
            <Link to={`/actors/${actor.id}`}>
              <li className="list-group-item">{actor.name}</li>
            </Link>
          </ul>
        ))}
    </div>
  );
}

export default SearchResults;
