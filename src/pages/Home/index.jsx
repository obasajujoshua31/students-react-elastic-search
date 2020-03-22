import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Loader from "../../components/Loader";
import CardContainer from "../../components/CardContainer";
import { getAllMovies } from "../../api/api";

function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllMovies();
      setMovies(result);
    };
    fetchData();
  });
  return (
    <Navbar>
      {movies.length === 0 && <Loader />}
      {movies.length > 0 && <CardContainer movies={movies} />}
    </Navbar>
  );
}

export default Home;
