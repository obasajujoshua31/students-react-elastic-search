import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import CardContainer from "../../components/ActorCardContainer";
import Loader from "../../components/Loader";
import { getAllActors } from "../../api/api";

function Actors() {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllActors();
      setActors(result);
    };
    fetchData();
  }, []);
  return (
    <Navbar>
      {actors.length === 0 && <Loader />}
      {actors.length > 0 && <CardContainer actorsOrDirectors={actors} />}
    </Navbar>
  );
}

export default Actors;
