import React from "react";
import DisplayCard from "../components/DisplayCard";

function CardContainer({ movies }) {
  return (
    <div className="row justify-content-center">
      {movies.map(movie => (
        <div className="col-sm-12 col-md-3 m-2 p-3">
          <DisplayCard movie={movie} />
        </div>
      ))}
    </div>
  );
}

export default CardContainer;
