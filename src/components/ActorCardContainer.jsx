import React from "react";
import ActorDisplayCard from "../components/ActorDisplayCard";

function ActorCardContainer({ actorsOrDirectors }) {
  return (
    <div className="row justify-content-center">
      {actorsOrDirectors.map(actor => (
        <div className="col-sm-12 col-md-3 m-2 p-3">
          <ActorDisplayCard actorOrDirector={actor} />
        </div>
      ))}
    </div>
  );
}

export default ActorCardContainer;
