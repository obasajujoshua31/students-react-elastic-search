import React from "react";
import { Link } from "react-router-dom";

function DisplayCard({ movie }) {
  return (
    <div class="card">
      <div class="card-header">Featured</div>
      <div class="card-body">
        <h5 class="card-title">{movie.title}</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <Link to="#" class="btn btn-primary">
          View Movie
        </Link>
      </div>
    </div>
  );
}

export default DisplayCard;
