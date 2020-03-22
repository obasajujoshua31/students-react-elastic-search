import React from "react";
import { Link } from "react-router-dom";

function ActorDisplayCard({ actorOrDirector }) {
  return (
    <div class="card">
      <div class="card-header">Featured</div>
      <div class="card-body">
        <h5 class="card-title">{actorOrDirector.name}</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <Link to={`/actors/${actorOrDirector.id}`} class="btn btn-primary">
          View Actor
        </Link>
      </div>
    </div>
  );
}

export default ActorDisplayCard;
