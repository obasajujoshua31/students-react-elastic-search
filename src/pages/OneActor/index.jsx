import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import ActorDisplayCard from "../../components/ActorDisplayCard";
import Loader from "../../components/Loader";
import { getOneActor } from "../../api/api";

function OneActor() {
  const { id } = useParams();
  const [actor, setActor] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getOneActor(id);
      setActor(result);
    };
    fetchData();
  }, [id]);
  return (
    <Navbar>
      {!actor && <Loader />}
      {actor && <ActorDisplayCard actorOrDirector={actor} />}
    </Navbar>
  );
}

export default OneActor;
