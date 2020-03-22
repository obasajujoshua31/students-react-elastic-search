import axios from "axios";

const apiUrl = "http://localhost:4000";

export const getAllMovies = () => {
  return new Promise((resolve, reject) => {
    return axios
      .get(`${apiUrl}/movies`)
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getAllActors = () => {
  return new Promise((resolve, reject) => {
    return axios
      .get(`${apiUrl}/actors`)
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getOneActor = id => {
  return new Promise((resolve, reject) => {
    return axios
      .get(`${apiUrl}/actors/${id}`)
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getOneMovie = id => {
  return new Promise((resolve, reject) => {
    return axios
      .get(`${apiUrl}/movies/${id}`)
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const searchActor = actor => {
  return new Promise((resolve, reject) => {
    return axios
      .get(`${apiUrl}/search/actors/${actor}`)
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
