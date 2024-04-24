import React, { useEffect, useState } from 'react';

export const MovieList = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const resp = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY');
    const json = await resp.json();
    console.log(json.results);
    setData(json.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
    </div>
  );
};

export default MovieList;
